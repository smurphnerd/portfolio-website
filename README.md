# portfolio-website

Source for [smurphnerd.com](https://smurphnerd.com) — my personal portfolio, project writeups, and blog.

## Stack

- React 18 + TypeScript (Create React App)
- React Router v6 for routing
- Tailwind CSS + SCSS modules for styling
- `react-markdown` + `remark-gfm` for rendering long-form content
- Supabase for blog comments
- LaTeX (`latexmk`) for the resume PDFs

## Getting started

```bash
npm install
npm start            # http://localhost:3000
```

Copy `.env.local` and set the Supabase credentials used by the comments section:

```
REACT_APP_SUPABASE_URL=...
REACT_APP_SUPABASE_ANON_KEY=...
REACT_APP_TURNSTILE_SITE_KEY=...
```

## Comment spam protection

Blog comments go through a Supabase Edge Function (`supabase/functions/post-comment`) that verifies a [Cloudflare Turnstile](https://www.cloudflare.com/application-services/products/turnstile/) token before inserting. RLS on `blog_comments` blocks direct anon writes, so the function is the only path to create a comment.

One-time setup:

1. Create a Turnstile site for `smurphnerd.com` in the Cloudflare dashboard. Copy the site key into `REACT_APP_TURNSTILE_SITE_KEY` (client env) and production host env vars.
2. Store the secret key in Supabase:
   ```bash
   supabase secrets set TURNSTILE_SECRET_KEY=<secret>
   ```
3. Apply the RLS migration to production:
   ```bash
   supabase db push          # or run supabase/migrations/20260418_lock_blog_comments_rls.sql in the SQL editor
   ```
4. Deploy the edge function:
   ```bash
   supabase functions deploy post-comment
   ```

After this, direct `insert` calls from the anon key return an RLS error; only the edge function (running with the service role) can write comments.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm start` | Dev server with hot reload |
| `npm run build` | Production bundle into `build/` |
| `npm run build:resume` | Compile the LaTeX resume sources in `resume/` into `public/resume/` (requires `latexmk`) |
| `npm test` | Run the CRA test runner |

## Layout

```
public/
  blog/                      Markdown posts served as static assets
  resume/                    Compiled resume PDFs (produced by build:resume)
  *-report.pdf               Project reports linked from project pages
resume/                      LaTeX sources for the resume variants
src/
  App.tsx                    Pre-loads image assets, mounts the router
  routes.tsx                 Route tree (landing, projects, blog, inspiration)
  components/                Shared UI (Navbar, Project, Blog, MarkdownRenderer, …)
  pages/
    blogs/index.ts           Blog post metadata + markdown paths
    projects/                One file per project; index.ts aggregates them
  assets/                    Icons, thumbnails, demo images
  styles/                    Page-level SCSS modules and shared styles
  utils/                     `supabase` client and `timeAgo` formatter
```

## Adding content

**New project:** create `src/pages/projects/MyProject.tsx` exporting a `Project`, then add it to the list in `src/pages/projects/index.ts`. Order here controls the order on `/projects` and the prev/next links on project pages.

**New blog post:** drop the markdown into `public/blog/my-post.md`, add an entry (with `markdownPath`) to `src/pages/blogs/index.ts`, and add a thumbnail export in `src/assets/thumbnails/index.ts`.

## Deployment

Hosted on Netlify; `public/_redirects` rewrites all paths to `index.html` so client-side routing works on deep links. `homepage` in `package.json` is set to the production domain.
