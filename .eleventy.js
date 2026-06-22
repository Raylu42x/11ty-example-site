module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.addFilter('readableDate', (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });
  });

  eleventyConfig.addFilter('isoDate', (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString();
  });

  eleventyConfig.addGlobalData('year', () => new Date().getFullYear());

  eleventyConfig.addCollection('posts', (collectionApi) =>
    collectionApi
      .getFilteredByGlob('src/posts/*.md')
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: 'src', output: 'docs', includes: '_includes', data: '_data' },
    markdownTemplateEngine: 'njk',
  };
};
