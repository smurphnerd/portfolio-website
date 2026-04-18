-- Lock down blog_comments so only the service role (used by the post-comment
-- edge function) can write. Anon keeps read access so the public site can
-- list comments.

alter table public.blog_comments enable row level security;

drop policy if exists "blog_comments_select_anon" on public.blog_comments;
drop policy if exists "blog_comments_insert_anon" on public.blog_comments;
drop policy if exists "blog_comments_update_anon" on public.blog_comments;
drop policy if exists "blog_comments_delete_anon" on public.blog_comments;

create policy "blog_comments_select_anon"
  on public.blog_comments
  for select
  to anon, authenticated
  using (true);

-- No insert/update/delete policy for anon/authenticated → all writes denied.
-- The service role bypasses RLS, so the edge function can still insert.
