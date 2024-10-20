const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

let browser;

// Initialize the browser once
async function initializeBrowser() {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }
}

// Fetch calorie data for the given food
async function getCalorieData(food) {
  await initializeBrowser();
  const page = await browser.newPage();
  const url = `https://www.diyetkolik.com/kac-kalori/${encodeURIComponent(food)}`;

  await page.goto(url, { waitUntil: 'networkidle2' });

  // Extract protein and fat data
  const protein = await page.evaluate(() => {
    const element = document.querySelector(
      '#solAnaSutun > div.p15.kurumsalBorder.backgroundWhite.mt-3 > div.mt-3 > div.d-flex.align-items-center.mt-2.carb-prot-fat > div:nth-child(3) > span.d-block.kkBigNumberIkincil.my-1 > span'
    );
    return element ? element.textContent.trim() : null;
  });

  const fat = await page.evaluate(() => {
    const element = document.querySelector(
      '#solAnaSutun > div.p15.kurumsalBorder.backgroundWhite.mt-3 > div.mt-3 > div.d-flex.align-items-center.mt-2.carb-prot-fat > div:nth-child(4) > span.d-block.kkBigNumberIkincil.my-1 > span'
    );
    return element ? element.textContent.trim() : null;
  });

  await page.close(); // Close the page to save resources

  return { protein, fat };
}

app.get('/calories', async (req, res) => {
  const food = req.query.food;
  if (!food) {
    return res.status(400).json({ error: 'Gıda ismi belirtilmedi.' });
  }

  try {
    const data = await getCalorieData(food);
    if (data.protein && data.fat) {
      res.json({ calories: data });
    } else {
      res.status(404).json({ error: 'Kalori bilgisi bulunamadı.' });
    }
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).json({ error: 'Sunucu hatası.' });
  }
});

// Ensure the browser is closed on server exit
process.on('exit', async () => {
  if (browser) await browser.close();
});

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await initializeBrowser(); // Start the browser on server startup
});
