---
title: Hello, world
date: 2026-06-20
draft: false
tags: [post, intro]
description: A first post to demonstrate the example site and CMS frontmatter fields.
---

Welcome to the **11ty Example Site**. This post exists to show what a typical
entry in the `posts` collection looks like.

## Frontmatter

Every post in `src/posts/` is expected to have at least these fields:

- `title` — the post heading
- `date` — publish date (ISO `YYYY-MM-DD`)
- `draft` — `true` hides the post from listings
- `tags` — an array of tags; `post` is added automatically by `posts.json`
- `description` — shown on the home page and in feed entries

## Images

Drop images into `src/assets/` and reference them like this:

![Sample image]({{ '/assets/sample.jpg' | url }})

That's it. Edit `src/posts/hello-world.md` to make your own.
