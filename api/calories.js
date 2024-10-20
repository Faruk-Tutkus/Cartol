const puppeteer = require('puppeteer-core');
const chrome = require('chrome-aws-lambda');

module.exports = async (req, res) => {
  const { food } = req.query;

  if (!food) {
    return res.status(400).json({ error: 'Gıda ismi belirtilmedi.' });
  }

  let browser = null;

  try {
    browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    });

    const page = await browser.newPage();
    const url = `https://www.diyetkolik.com/kac-kalori/${encodeURIComponent(food)}`;

    await page.goto(url, { waitUntil: 'networkidle2' });

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

    await page.close();

    if (protein && fat) {
      res.status(200).json({ calories: { protein, fat } });
    } else {
      res.status(404).json({ error: 'Kalori bilgisi bulunamadı.' });
    }
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).json({ error: 'Sunucu hatası.' });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
