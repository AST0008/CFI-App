//fetchiing all the urls of the blogs on the homepage and storing thier links in an array

async function getUrl() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://blog.ankitsanghvi.in/");

  const urls = await page.evaluate(() => {
    const links = document.querySelectorAll(".post-card-content-link");
    const urls = Array.from(links).map((link) => link.getAttribute("href"));
    return urls;
  });

  await browser.close();
  return urls;
}

//Naviagting to each page and extracting their contents and titles and returning an object

async function scrape(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://blog.ankitsanghvi.in${url}`, { timeout: 60000 });

  const blogContent = await page.evaluate(() => {
    const title = document.querySelector(".post-full-title").innerText;
    const content = document.querySelector(".post-content").innerText;
    return { title, content };
  });

  await browser.close();
  return blogContent;
}

// saving the scraped data of array of objects as an CSV file
async function saveToCSV(data) {
  const csvContent = data
    .map((blog) => `${blog.title},${blog.content}`)
    .join("\n");
  fs.writeFileSync("./blogs.csv", csvContent);
  console.log("Blog data saved to CSV successfully!");
}

//calling geturl and pushing the objects in an array

(async () => {
  const urls = await getUrl();
  const blogContents = [];

  for (const url of urls) {
    const content = await scrape(url);
    blogContents.push(content);
  }

  await saveToCSV(blogContents);
})();
