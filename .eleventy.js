const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.min.css');
  eleventyConfig.addPassthroughCopy('./src/asset');
  eleventyConfig.addPassthroughCopy('./src/admin');
	
	eleventyConfig.addCollection("recentPosts", function(collectionApi) {
  return collectionApi.getFilteredByGlob("./src/articles/*.md").reverse().slice(0, 3);
});
	
	eleventyConfig.addFilter("postDate", (dateObj) => {
			return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
