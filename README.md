Cartol, kullanıcıların sağlıklı yaşam ve beslenme hedeflerine ulaşmalarını kolaylaştırmak için geliştirilmiş bütüncül bir mobil uygulamadır. Günlük kalori ve su ihtiyacı takibinden, kişiye özel beslenme önerilerine; yapay zekâ destekli besin analizinden zengin tarif veritabanına kadar birçok özelliği tek bir platformda birleştirir.
Bu proje, Atatürk Üniversitesi Bilgisayar Mühendisliği Bölümü'nde "Bilgisayar Mühendisliği Seçmeli Tasarım Dersi - 1" kapsamında Muhammed Faruk TUTKUS tarafından, Dr. Öğr. Üyesi Bilal USANMAZ danışmanlığında geliştirilmiştir.
📜 İçindekiler
Proje Hakkında
✨ Temel Özellikler
📸 Ekran Görüntüleri
🛠️ Kullanılan Teknolojiler
🏗️ Mimari ve Veri Akışı
🚀 Kurulum ve Çalıştırma
🔮 Gelecek Çalışmalar ve Öneriler
📄 Lisans
📧 İletişim
📖 Proje Hakkında
Günümüzdeki mobil sağlık uygulamaları genellikle manuel veri girişi gerektirir, sınırlı yapay zekâ entegrasyonuna sahiptir ve kapsamlı bir veritabanı sunmaz. Cartol, bu sorunlara çözüm getirmeyi hedefler:
Otomasyon: Manuel veri girişini en aza indirerek kullanıcıların günlük kalori, makro ve su ihtiyacını kişisel bilgilere göre otomatik olarak hesaplar.
Yapay Zekâ Gücü: Google Gemini API entegrasyonu sayesinde, kullanıcılar sağlıkla ilgili sorularına anında yanıt alabilir ve bir yiyeceğin fotoğrafını çekerek kalori, besin değerleri ve ilgili tarifler hakkında bilgi edinebilir.
Entegre Platform: Beslenme takibi, tarifler ve akıllı danışmanlık hizmetlerini tek bir uygulamada sunarak kullanıcıların birden fazla uygulama kullanma ihtiyacını ortadan kaldırır.
✨ Temel Özellikler
👤 Kişisel Profil ve Hesaplama: Yaş, boy, kilo, cinsiyet ve aktivite seviyesine göre günlük kalori, su, protein, karbonhidrat ve yağ ihtiyacını hesaplama.
💧 Su ve Kalori Takibi: Gerçek zamanlı olarak güncellenen ilerleme çubukları ile günlük su ve kalori tüketimini kolayca takip etme.
🥗 Geniş Tarif Veritabanı: Kahvaltı, öğle ve akşam yemeği olarak kategorize edilmiş, besin değerleri belirtilmiş yüzlerce sağlıklı yemek tarifi.
🔍 Akıllı Arama ve Filtreleme: Tarifler arasında isme göre arama yapma ve kategoriye göre filtreleme.
🤖 AI Destekli Sohbet: Sağlık, diyet ve egzersizle ilgili soruları yanıtlayan yapay zekâ tabanlı sohbet modülü.
📸 Görsel Tanıma ile Besin Analizi: Kameradan veya galeriden yüklenen bir yiyecek fotoğrafını analiz ederek tahmini kalori ve makro değerlerini sunma.
🔐 Güvenli Kimlik Doğrulama: E-posta/şifre ve sosyal medya hesapları (Google, Apple) ile güvenli ve hızlı giriş/kayıt işlemleri (Clerk ile).
📊 İlerleme Takibi: Boy ve kilo verilerini grafik üzerinde görselleştirerek motivasyonu artırma.
🎨 Modern ve Akıcı Arayüz: Kullanıcı deneyimini zenginleştiren animasyonlu Tab Bar ve Drawer menü yapıları.
📸 Ekran Görüntüleri
Giriş Ekranı	Ana Sayfa (Home)	Tarifler Ekranı
![alt text](link-buraya-gelecek/signin.png)
![alt text](link-buraya-gelecek/home.png)
![alt text](link-buraya-gelecek/recipes.png)
AI Sohbet Ekranı	AI Görsel Analiz	Animasyonlu Navigasyon
![alt text](link-buraya-gelecek/ai-chat.png)
![alt text](link-buraya-gelecek/ai-vision.png)
![alt text](link-buraya-gelecek/navigation.gif)
🛠️ Kullanılan Teknolojiler
Frontend: React Native, Expo
Kimlik Doğrulama (Auth): Clerk
Veritabanı: Firebase (Cloud Firestore)
Yapay Zekâ (AI): Google Gemini API
Navigasyon: React Navigation
Grafikler: React Native Chart Kit
🏗️ Mimari ve Veri Akışı
Uygulama, modern bir sunucusuz (serverless) mimari üzerine kurulmuştur:
Kullanıcı Arayüzü (React Native): Kullanıcı etkileşimlerini yönetir ve görsel bileşenleri oluşturur.
Kimlik Doğrulama (Clerk): Kullanıcı kayıt, giriş ve oturum yönetimi işlemlerini güvenli bir şekilde gerçekleştirir.
Veri Depolama (Firebase/Firestore): Kullanıcı profilleri, günlük tüketim verileri ve tarifler gibi kalıcı verileri NoSQL doküman veritabanında saklar. Gerçek zamanlı senkronizasyon yeteneği sayesinde veriler anında güncellenir.
Yapay Zekâ (Gemini API): Metin tabanlı sorulara yanıt vermek ve görsel analizi yapmak için harici bir API olarak kullanılır. Uygulama, isteği API'ye gönderir ve gelen yanıtı kullanıcıya gösterir.
Generated code
Kullanıcı ---> [React Native Uygulaması]
              |
              |--- (Auth) ---> Clerk
              |
              |--- (Veri Okuma/Yazma) ---> Firebase Firestore
              |
              |--- (AI Sorgusu) ---> Google Gemini API
Use code with caution.
🚀 Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:
Node.js Kurulumu
Bilgisayarınızda Node.js'in (LTS sürümü tavsiye edilir) kurulu olduğundan emin olun.
Generated sh
node -v
Use code with caution.
Sh
Proje Deposunu Klonlama
Generated sh
git clone https://github.com/Faruk-Tutkus/Cartol.git
cd Cartol
Use code with caution.
Sh
Bağımlılıkları Yükleme
Proje için gerekli olan tüm paketleri npm ile yükleyin.
Generated sh
npm install
Use code with caution.
Sh
Projeyi Başlatma
Uygulamayı Expo geliştirme sunucusu ile başlatın.
Generated sh
npm run start
Use code with caution.
Sh
Expo Go ile Çalıştırma
Akıllı telefonunuza App Store veya Google Play'den Expo Go uygulamasını indirin.
Terminalde çıkan QR kodunu Expo Go uygulaması ile taratarak projeyi telefonunuzda canlı olarak görüntüleyebilirsiniz.
🔮 Gelecek Çalışmalar ve Öneriler
Genişletilmiş Veritabanı: Farklı diyet türlerini (vegan, ketojenik vb.) destekleyen tarifler eklemek.
Topluluk Özelliği: Kullanıcıların kendi tariflerini ekleyip paylaşabileceği bir sosyal modül.
Gelişmiş Aktivite Takibi: Akıllı saatler ve diğer giyilebilir cihazlarla entegrasyon sağlayarak yakılan kalori takibini otomatikleştirmek.
Oyunlaştırma (Gamification): Rozetler, puanlar ve günlük hedefler gibi özellikler ekleyerek kullanıcı motivasyonunu artırmak.
Sesli Komutlar: Uygulama içinde sesli komutlarla etkileşim kurma imkânı.
📄 Lisans
Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.
📧 İletişim
Muhammed Faruk TUTKUS - GitHub Profili - E-posta
Proje Linki: https://github.com/Faruk-Tutkus/Cartol
