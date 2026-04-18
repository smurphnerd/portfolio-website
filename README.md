# portfolio-website

Source for [smurphnerd.com](https://smurphnerd.com) — my personal portfolio, project writeups, and blog.

## Stack

- React 18 + TypeScript (Create React App)
- React Router v6 for routing
- Tailwind CSS + SCSS modules for styling
- `react-markdown` + `remark-gfm` for rendering long-form content
- PocketBase (self-hosted) for blog comments
- LaTeX (`latexmk`) for the resume PDFs

## Getting started

```bash
npm install
npm start            # http://localhost:3000
```

Copy `.env.local` and set the environment variables used by the comments section:

```
REACT_APP_POCKETBASE_URL=https://db.smurphnerd.com
REACT_APP_TURNSTILE_SITE_KEY=...
REACT_APP_COMMENTS_ENABLED=true   # omit or set to anything else to hide the comment UI entirely
```

## Comments

Comments are gated behind `REACT_APP_COMMENTS_ENABLED`. When the flag is anything other than `"true"` (or unset), the comment section isn't rendered and PocketBase/Turnstile aren't contacted — useful while a backend is down or being migrated.

When enabled, comments go through a custom PocketBase route (`POST /api/post-comment`) implemented as a JS hook (`pb_hooks/post-comment.pb.js` on the server). The hook verifies a [Cloudflare Turnstile](https://www.cloudflare.com/application-services/products/turnstile/) token before inserting. The `blog_comments` collection's API rules allow anonymous `List`/`View` but block direct `Create` — the hook is the only path to write a comment.

Backend setup (one-time, already done on the server):

1. Create a Turnstile site for `smurphnerd.com` in the Cloudflare dashboard. Copy the site key into `REACT_APP_TURNSTILE_SITE_KEY` (client env) and production host env vars.
2. On the PocketBase server, set the secret key in the environment (e.g. add `Environment=TURNSTILE_SECRET_KEY=...` to `/etc/systemd/system/pocketbase.service`) and restart PocketBase.
3. The `blog_comments` collection and the `post-comment` hook are already provisioned. Schema: `author_name`, `author_organization`, `comment`, `blog_route`.

After this, direct `create` calls to the collection are rejected; only the hook path can write.

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
  utils/                     `pocketbase` client and `timeAgo` formatter
```

## Adding content

**New project:** create `src/pages/projects/MyProject.tsx` exporting a `Project`, then add it to the list in `src/pages/projects/index.ts`. Order here controls the order on `/projects` and the prev/next links on project pages.

**New blog post:** drop the markdown into `public/blog/my-post.md`, add an entry (with `markdownPath`) to `src/pages/blogs/index.ts`, and add a thumbnail export in `src/assets/thumbnails/index.ts`.

## Deployment

Hosted on Netlify; `public/_redirects` rewrites all paths to `index.html` so client-side routing works on deep links. `homepage` in `package.json` is set to the production domain.
