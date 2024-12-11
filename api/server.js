const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const app = express()
app.use(cors());
const apiKey = 'AIzaSyDz4pvtvF4kAmUYgW_wRi4xyxoZAmZOc0M';
const genAI = new GoogleGenerativeAI(apiKey);
const fileManager = new GoogleAIFileManager(apiKey);
const multer = require('multer');
const path = require('path');


async function uploadToGemini(path, mimeType) {
  const uploadResult = await fileManager.uploadFile(path, {
    mimeType,
    displayName: path,
  });
  const file = uploadResult.file;
  console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
  return file;
}

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
app.use(cors());
app.use(bodyParser.json())
const generationConfig = {
  temperature: 0.9,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // uploads klasörüne kaydet
  },
  filename: (req, file, cb) => {
    // Orijinal dosya adından uzantıyı al
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    cb(null, `${baseName}-${Date.now()}${ext}`); // Yeni dosya adını oluştur
  },
});

// multer yükleyicisi
const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).json({ filePath: `uploads/${req.file.filename}` });
});

app.post('/server', async (req, res) => {
  try {
    const { text, image } = req.body;
    const files = [];

    // Eğer resim varsa işleme al
    if (image) {
      const uploadedImage = await uploadToGemini(image, "image/jpeg");
      files.push({
        mimeType: uploadedImage.mimeType,
        fileUri: uploadedImage.uri,
      });
    }

    // Chat oturumu başlatma
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            ...(files.length > 0
              ? [
                  {
                    fileData: {
                      mimeType: files[0].mimeType,
                      fileUri: files[0].fileUri,
                    },
                  },
                ]
              : []),
            { text: `${text}. Açıklamayı Türkçe yap` },
          ],
        },
      ],
    });

    // Mesaj gönder ve cevap al
    const result = await chatSession.sendMessage("");
    const response = result.response.text();

    return res.json({
      response,
    });
  } catch (error) {
    console.error('Hata:', error);
    return res.status(500).json({ error: 'İşlem sırasında bir hata oluştu.' });
  }
});

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})