<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Behavioral Rules

### Reference Link Data Extraction Rule
- **Primary Action**: When the user provides a reference URL (e.g. case study, article, or documentation), **DO NOT automatically add a link button or UI tag** to the page unless explicitly requested.
- **Data Enrichment**: Always fetch and read the URL content using `read_url_content`, extract key metrics, problem descriptions, technical solutions, and quantified results, and update the portfolio content directly with those real-world details.

