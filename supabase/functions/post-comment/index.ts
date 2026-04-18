// Supabase Edge Function: post-comment
// Verifies a Cloudflare Turnstile token, validates input, and inserts a row
// into public.blog_comments using the service role client. RLS on that table
// denies anon writes, so this function is the only path to create a comment.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const ALLOWED_ORIGINS = new Set([
  "https://smurphnerd.com",
  "https://www.smurphnerd.com",
  "http://localhost:3000",
]);

const MAX_NAME = 100;
const MAX_ORG = 100;
const MAX_COMMENT = 5000;

interface CommentPayload {
  author_name?: string;
  author_organization?: string;
  comment?: string;
  blog_route?: string;
  turnstile_token?: string;
  website?: string; // honeypot — must be empty
}

function corsHeaders(origin: string | null) {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : "";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    Vary: "Origin",
  };
}

function json(
  body: unknown,
  init: ResponseInit & { cors: Record<string, string> },
) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init.cors,
      ...(init.headers ?? {}),
    },
  });
}

async function verifyTurnstile(token: string, remoteIp: string | null) {
  const secret = Deno.env.get("TURNSTILE_SECRET_KEY");
  if (!secret) throw new Error("TURNSTILE_SECRET_KEY not configured");

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.append("remoteip", remoteIp);

  const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const cors = corsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: cors });
  }
  if (req.method !== "POST") {
    return json({ error: "method_not_allowed" }, { status: 405, cors });
  }

  let payload: CommentPayload;
  try {
    payload = (await req.json()) as CommentPayload;
  } catch {
    return json({ error: "invalid_json" }, { status: 400, cors });
  }

  if (payload.website && payload.website.trim() !== "") {
    // Honeypot tripped — pretend success so bots don't learn.
    return json({ ok: true }, { status: 200, cors });
  }

  const author_name = (payload.author_name ?? "").trim();
  const author_organization = (payload.author_organization ?? "").trim();
  const comment = (payload.comment ?? "").trim();
  const blog_route = (payload.blog_route ?? "").trim();
  const token = (payload.turnstile_token ?? "").trim();

  if (!author_name || !comment || !blog_route || !token) {
    return json({ error: "missing_fields" }, { status: 400, cors });
  }
  if (
    author_name.length > MAX_NAME ||
    author_organization.length > MAX_ORG ||
    comment.length > MAX_COMMENT
  ) {
    return json({ error: "field_too_long" }, { status: 400, cors });
  }

  const remoteIp =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    null;

  const ok = await verifyTurnstile(token, remoteIp);
  if (!ok) {
    return json({ error: "turnstile_failed" }, { status: 403, cors });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );

  const { error } = await supabase.from("blog_comments").insert({
    author_name,
    author_organization: author_organization || null,
    comment,
    blog_route,
  });

  if (error) {
    console.error("insert failed", error);
    return json({ error: "insert_failed" }, { status: 500, cors });
  }

  return json({ ok: true }, { status: 200, cors });
});
