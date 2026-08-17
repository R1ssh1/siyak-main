import scrape from 'website-scraper';

const options = {
  urls: ['https://neonalloys.com/'],
  directory: './neonalloys_clone',
  recursive: false, // Start with false to just get the homepage first, or true if we want everything
  maxRecursiveDepth: 1, // Let's just get the homepage and its direct assets for now, otherwise it might take forever
};

console.log("Starting scrape...");
scrape(options).then((result) => {
    console.log("Scrape complete!", result.length, "pages scraped.");
}).catch((err) => {
    console.error("Scrape failed", err);
});
