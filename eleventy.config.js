import footnotes from 'eleventy-plugin-footnotes';
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

  eleventyConfig.addShortcode("categoryName", (category) => {
    switch (category) {
      case "elama": return "Elämä";
      case "flash": return "Flash";
      case "html": return "HTML";
      case "infotoggle": return "InfoToggle";
      case "internet": return "Internet";
      case "ipod": return "iPod";
      case "kaytettavyys": return "käytettävyys";
      case "linux": return "Linux";
      case "php": return "PHP";
      case "wlan": return "WLAN";
      default: return category;
    }
  });

  eleventyConfig.addPairedShortcode("callout", (content, title) => {
    return `<aside class="callout callout-info">
  <div class="callout-content">
    <strong>${title}:</strong> ${content}
  </div>
</aside>`
  });

  eleventyConfig.addUrlTransform(urlTransform);
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").map(post => {
      post.data.permalink = post.url;
      post.outputPath = `./_site${post.url}index.html`;
      return post;
    });
  });

  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });
  eleventyConfig.addFilter("head", function (array, limit) {
    return array.length > 0 ? array[0] : undefined;
  });
  eleventyConfig.addFilter("removeFootnotes", function (content) {
    return content.replaceAll(/<a class="Footnotes__ref".*>(.*)<\/a>/g, '$1');
  });
  eleventyConfig.addFilter("dropTitleLevel", function (content) {
    return content.replaceAll(/<h5>(.*)<\/h5>/g, '<h6>$1</h6>')
      .replaceAll(/<h4>(.*)<\/h4>/g, '<h5>$1</h5>')
      .replaceAll(/<h3>(.*)<\/h3>/g, '<h4>$1</h4>')
      .replaceAll(/<h2>(.*)<\/h2>/g, '<h3>$1</h3>')
      .replaceAll(/<h1>(.*)<\/h1>/g, '<h2>$1</h2>');
  });

  eleventyConfig.amendLibrary("md", function (md) {
    md.set({ typographer: true });
  });

  eleventyConfig.addPlugin(footnotes, { /* … */ })

  // Copy CNAME file to output to fix GitHub Pages custom domain
  eleventyConfig.addPassthroughCopy("CNAME");

  // RSS Feed
  // eleventyConfig.addPlugin(feedPlugin, {
  //   type: "rss", // or "rss", "json"
  //   collection: {
  //     name: "posts", // iterate over `collections.posts`
  //     limit: 0,     // 0 means no limit
  //   },
  //   metadata: {
  //     language: "en",
  //     title: "Oiva Eskola",
  //     subtitle: "Full stack web developer",
  //     base: "https://oivaeskola.fi/",
  //     author: {
  //       name: "Oiva Eskola",
  //       email: "", // Optional
  //     }
  //   }
  // });
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
    console.log(url + ' -> ' + pageUrl);
    return pageUrl;
  }

  console.log(url + ' -> ' + url);

  // Returning undefined skips the url transform.
  return
}