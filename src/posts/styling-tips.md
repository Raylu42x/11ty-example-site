---
title: Styling tips for a minimal blog
date: 2026-06-18
draft: false
tags: [post, design, css]
description: A few small choices that make a plain blog feel intentional rather than empty.
---

A minimal blog isn't the same as an unstyled one. A few small choices go a long
way:

1. **Pick one column width.** Around 65–75 characters per line keeps reading
   comfortable. This site uses a `max-width` of 720px.
2. **Use the system font stack.** It's fast, familiar, and never breaks.
3. **Respect dark mode.** A single `prefers-color-scheme` media query is
   enough — no toggle, no JavaScript.
4. **Limit your accent color to one.** Links and emphasis only.

## Code blocks

```js
// posts are collected from src/posts/*.md
eleventyConfig.addCollection('posts', (api) =>
  api.getFilteredByGlob('src/posts/*.md')
);
```

## Quotes

> The best way to make a small thing feel finished is to leave it small.

Have fun.
