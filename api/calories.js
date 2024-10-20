import puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

export default async function handler(req, res) {
  let browser = null;

  try {
    // Chrome'u başlat
    browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: true, // Başsız modda çalıştır
    });

    const page = await browser.newPage();
    await page.goto('https://www.diyetkolik.com/kac-kalori/beyaz-ekmek', {
      waitUntil: 'networkidle2',
    });

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
      await browser.close(); // Tarayıcıyı kapat
    }
  }
}
