# Resume (laniricky/resume)

A small static resume/portfolio website built with HTML. This repository contains the source for a minimal personal resume site that can be opened directly in a browser or served via GitHub Pages.

Repository metadata
- Owner: laniricky (https://github.com/laniricky)
- Repo: laniricky/resume
- Primary language: HTML
- Default branch: main
- Last push: 2025-07-07T16:55:56Z
- Size: small (static site)

Note: If you want me to include exact file listings or reference specific files in the README I can fetch them and update this README.

Quick start

1. Clone the repo
   git clone https://github.com/laniricky/resume.git
   cd resume

2. Open locally
   - Option A: Open index.html directly in your browser (double-click or use your browser's File > Open).
   - Option B: Serve with a simple HTTP server (recommended to avoid CORS or resource path issues):
     - Python 3:
       python -m http.server 8000
       Open http://localhost:8000
     - Node (http-server):
       npx http-server -p 8000
       Open http://localhost:8000

What’s in this repo (expected)
- index.html — the main resume / portfolio page
- assets/ (optional) — images, styles, scripts (CSS, JS)
- styles.css — stylesheet(s)
- README.md — this file

If the actual file names differ, let me know and I’ll update the README to match.

Deploying (GitHub Pages)
- The site is a static HTML site and can be published with GitHub Pages.
- To enable:
  1. In the repository settings, enable Pages and set the source to the main branch (root) or the docs/ folder if you prefer.
  2. The published URL will look like: https://laniricky.github.io/resume/ (once Pages is enabled).

Recommended improvements / next steps
- Add a license (e.g., MIT) to make reuse clear.
- Add a simple CSS framework (or a small stylesheet) for responsive layout.
- Add meta and Open Graph tags for better sharing and SEO.
- Add automated checks or a preview workflow (optional) using GitHub Actions.
- Add an accessible PDF version of your resume for downloads.

Contributing
- If you want to make changes:
  1. Fork the repo
  2. Create a branch for your change (git checkout -b feature/update-resume)
  3. Open a pull request with a clear summary of the changes

Contact
- Author: laniricky — https://github.com/laniricky

