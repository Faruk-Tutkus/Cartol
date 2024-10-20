import fetch from 'node-fetch';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  const { food } = req.query;

  if (!food) {
    return res.status(400).json({ error: 'Gıda ismi belirtilmedi.' });
  }

  try {
    const url = `https://www.diyetkolik.com/kac-kalori/${encodeURIComponent(food)}`;
    
    const response = await fetch(url);
    const body = await response.text();
    
    const $ = cheerio.load(body);

    const protein = $('#solAnaSutun > div.p15.kurumsalBorder.backgroundWhite.mt-3 > div.mt-3 > div.d-flex.align-items-center.mt-2.carb-prot-fat > div:nth-child(3) > span.d-block.kkBigNumberIkincil.my-1 > span').text().trim();
    const fat = $('#solAnaSutun > div.p15.kurumsalBorder.backgroundWhite.mt-3 > div.mt-3 > div.d-flex.align-items-center.mt-2.carb-prot-fat > div:nth-child(4) > span.d-block.kkBigNumberIkincil.my-1 > span').text().trim();

    if (protein && fat) {
      res.status(200).json({ calories: { protein, fat } });
    } else {
      res.status(404).json({ error: 'Kalori bilgisi bulunamadı.' });
    }
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).json({ error: 'Sunucu hatası.' });
  }
}
