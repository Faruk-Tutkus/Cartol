import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  const { food } = req.query;

  if (!food) {
    return res.status(400).json({ error: 'Gıda ismi belirtilmedi.' });
  }

  try {
    // İlgili URL'yi oluştur
    const url = `https://www.diyetkolik.com/kac-kalori/${encodeURIComponent(food)}`;

    // HTTP isteği yap
    const response = await axios.get(url);
    
    // HTML içeriğini cheerio ile yükle
    const $ = cheerio.load(response.data);

    // Protein değeri için seçici
    const protein = $('#solAnaSutun > div.p15.kurumsalBorder.backgroundWhite.mt-3 > div.mt-3 > div.d-flex.align-items-center.mt-2.carb-prot-fat > div:nth-child(3) > span.d-block.kkBigNumberIkincil.my-1 > span').text().trim();

    // Yağ değeri için seçici
    const fat = $('#solAnaSutun > div.p15.kurumsalBorder.backgroundWhite.mt-3 > div.mt-3 > div.d-flex.align-items-center.mt-2.carb-prot-fat > div:nth-child(4) > span.d-block.kkBigNumberIkincil.my-1 > span').text().trim();

    // Eğer değerler varsa yanıt gönder
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
