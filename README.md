# Resume — laniricky

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Language: TypeScript](https://img.shields.io/badge/language-TypeScript-3178c6.svg)](https://www.typescriptlang.org/) [![GitHub stars](https://img.shields.io/github/stars/laniricky/resume?style=social)](https://github.com/laniricky/resume/stargazers) [![Pages](https://img.shields.io/badge/GitHub%20Pages-enabled-brightgreen)](https://laniricky.github.io/resume)

A repository containing the source and published versions of my resume (Markdown / HTML / PDF). This repository is intended to store a machine-readable resume source, a simple site (GitHub Pages) to view it, and any build tooling/scripts used to produce polished output.

Repository details
- Owner: laniricky (https://github.com/laniricky)
- Repository: laniricky/resume (public)
- Default branch: main
- Primary language: TypeScript
- License: MIT
- Last pushed: 2025-10-19T11:14:02Z
- Stars: 1

Contents (typical)
- resume.md or resume.yml — canonical source (Markdown or JSON/YAML)
- package.json / build scripts — tooling for building HTML/PDF
- dist/ or public/ — generated HTML/PDF outputs
- assets/ — images, fonts, styles
- README.md — this file

Quick start

1. View online
- If the repository is published via GitHub Pages, open:
  https://laniricky.github.io/resume

2. Local preview (common pattern)
- Install dependencies:
  npm install
- Start a local dev server (if a script exists):
  npm start
- Build production artifacts:
  npm run build
- Generated files (HTML/PDF) will usually be placed in dist/ or public/.

3. If there are direct outputs
- Look for resume.pdf or resume.html in the repository root or the dist/ (public/) folder and open it in your browser or PDF viewer.

Project structure recommendations
- Keep a single canonical source (resume.md or resume.yml/json). Use build scripts to generate HTML/PDF from that source.
- Store generated artifacts in .gitignore if you prefer not to track them, or in a release branch/folder if you want to host them (for example, on Pages).

How to contribute
- Fork the repo, create a feature branch, and open a pull request.
- Suggested contribution types:
  - Content updates (typos, formatting)
  - Improvements to the build pipeline (scripts, CI)
  - Styling and accessibility improvements for the site
- Please follow standard commit and PR practices and include a short description of your change.

Contact
- GitHub: https://github.com/laniricky
- Homepage / Pages (if enabled): https://laniricky.github.io/resume

License
This project is licensed under the MIT License — see the LICENSE file for details.

Notes
- This repository uses TypeScript for tooling or site code.
- If you can't find the resume file you expect (PDF/MD/HTML), check the repository root and common subdirectories like dist/, public/, or site/.
