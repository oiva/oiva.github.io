import striptags from 'striptags';

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPreprocessor("posts", "*", (data, content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
    if (typeof data.published !== "undefined" && !data.published) {
      return false;
    }
    return content;
  });

  // liquid options
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });

  eleventyConfig.setIncludesDirectory("../_includes");
  eleventyConfig.setLayoutsDirectory("../_layouts");
  eleventyConfig.setInputDirectory("posts");
  eleventyConfig.setDataDirectory("../_data");

  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });

  eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));

  eleventyConfig.addUrlTransform(urlTransform);
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").map(post => {
      post.data.permalink = post.url;
      post.outputPath = `./_site${post.url}index.html`;
      return post;
    });
  });
}

/**
 * From https://jonathanyeong.com/excerpts-with-eleventy/
 */
function extractExcerpt(article) {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  if (article.data.hasOwnProperty('excerpt')) {
    return article.data.excerpt;
  }

  let excerpt = null;

  // take first paragraph
  const content = article.templateContent.split(/<\/p>|<\/figure>/)[0];

  // remove extra spaces
  excerpt = striptags(content)
    .replace(/^\\s+|\\s+$|\\s+(?=\\s)/g, "")
    .trim()

  // Cap at 250 characters
  if (excerpt.length > 250) {
    excerpt = excerpt.substring(0, 247)
      .concat("...");
  }

  return excerpt;
}

function urlTransform({ url }) {
  // subfolders for year, month, date, because that's how the
  // url has always been. There are not (or might not be)
  // any collection pages for year or month.
  if (url.match(/^\/\d{4}-\d{2}-\d{2}-.*/i)) {
    const newUrl = '/' + url.substring(1, 5) + '/' + url.substring(6, 8) + '/' + url.substring(9, 11) + '/' + url.substring(12);
    console.log(url + ' -> ' + newUrl);
    return newUrl;
  }

  // index, page2, page3...
  if (url.match(/^\/\d{1,}\//)) {
    const pageUrl = '/page' + (parseInt(url.substring(1, url.length - 1)) + 1) + '/';
    return pageUrl;
  }

  // Returning undefined skips the url transform.
  return
}