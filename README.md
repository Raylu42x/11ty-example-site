# 11ty Example Site

A minimal [Eleventy](https://www.11ty.dev/) starter site, designed to be used
with [11ty CMS](https://github.com/Raylu42x/11ty-cms).

The CMS clones this repo, lets you edit content in a browser UI, and pushes
back. A GitHub Actions workflow builds the site to `/docs` and GitHub Pages
serves it from there.

## Use it with 11ty CMS

1. **Fork this repo** (or click "Use this template").
2. **Enable GitHub Pages**: in your fork, go to **Settings → Pages**, set
   **Source** to *Deploy from a branch*, **Branch** to `main`, and **Folder** to
   `/docs`. Save.
3. **Add the site to 11ty CMS**: open the CMS, click **⚙ Sites → Add a site**,
   paste your fork URL, and set:
   - **Content dir**: `src`
   - **Media dir**: `src/assets`

That's it. Edits made in the CMS get committed to `main`; the workflow rebuilds
`/docs` and Pages serves it within a minute or two.

## Use it standalone

```sh
npm install
npx @11ty/eleventy --serve
```

Then open <http://localhost:8080>. To build for production:

```sh
npx @11ty/eleventy --output=docs
```

## What's in the box

```
.
├── .github/workflows/build.yml   GitHub Actions: builds to /docs on push
├── .eleventy.js                   Eleventy config (input=src, output=docs)
├── src/
│   ├── _data/site.json            Site metadata (title, description, author)
│   ├── _includes/
│   │   ├── base.njk               Site-wide layout
│   │   └── post.njk               Layout for posts (extends base)
│   ├── assets/
│   │   └── sample.jpg             Example image
│   ├── posts/
│   │   ├── posts.json             Folder-level frontmatter for posts
│   │   ├── hello-world.md
│   │   └── styling-tips.md
│   ├── index.njk                  Home page (lists posts)
│   ├── about.md                   Example static page
│   └── feed.njk                   Atom feed at /feed.xml
├── docs/                          Build output (committed; served by Pages)
├── LICENSE                        MIT
└── README.md
```

### Post frontmatter

Each post in `src/posts/*.md` is expected to have at least these fields:

```yaml
---
title: Hello, world
date: 2026-06-20
draft: false
tags: [post, intro]
description: A short description
---
```

The `posts.json` file in the same folder adds the `post` tag and applies the
`post.njk` layout to every file automatically — you don't have to repeat that
per file.

## License

[MIT](LICENSE)
