# 🥑 Cartol - Sağlıklı Yaşam Asistanınız

**Cartol**, sağlıklı yaşam ve dengeli beslenme hedeflerinize ulaşmanızı kolaylaştırmak için geliştirilmiş kapsamlı bir mobil uygulamadır. Günlük kalori ve su takibinden, yapay zekâ destekli besin analizine; kişisel önerilerden zengin tarif veritabanına kadar birçok özelliği tek bir platformda sunar.

> 📚 Bu proje, **Atatürk Üniversitesi Bilgisayar Mühendisliği** bölümü *“Seçmeli Tasarım Dersi - 1”* kapsamında **Muhammed Faruk TUTKUS** tarafından, **Dr. Öğr. Üyesi Bilal USANMAZ** danışmanlığında geliştirilmiştir.

---

## 📑 İçindekiler

- [📖 Proje Hakkında](#-proje-hakkında)
- [✨ Temel Özellikler](#-temel-özellikler)
- [📸 Ekran Görüntüleri](#-ekran-görüntüleri)
- [🛠️ Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [🏗️ Mimari ve Veri Akışı](#-mimari-ve-veri-akışı)
- [🚀 Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
- [🔮 Gelecek Çalışmalar](#-gelecek-çalışmalar)
- [📄 Lisans](#-lisans)
- [📧 İletişim](#-iletişim)

---

## 📖 Proje Hakkında

Günümüzdeki sağlık uygulamalarının çoğu kullanıcıdan manuel veri girişi ister, sınırlı yapay zekâ desteği sunar ve parçalı çözümler üretir. **Cartol** bu eksikleri gidererek:

- 🔄 **Otomasyon sağlar**: Kişisel bilgilere göre su, kalori ve makro ihtiyaçlarını otomatik hesaplar.
- 🧠 **Yapay zekâ desteklidir**: Google Gemini API sayesinde metin ve görsel tabanlı besin analizleri sağlar.
- 🔗 **Tüm özellikleri bir araya getirir**: Kullanıcıların birden fazla uygulamaya ihtiyaç duymadan her şeye tek noktadan ulaşmasını sağlar.

---

## ✨ Temel Özellikler

- 👤 **Profil ve Kişisel Hesaplama**: Yaş, boy, kilo ve aktivite seviyesine göre günlük ihtiyaç hesaplama.
- 💧 **Su ve Kalori Takibi**: Gerçek zamanlı ilerleme çubuklarıyla kolay takip.
- 🥗 **Zengin Tarif Veritabanı**: Kategorilere ayrılmış yüzlerce tarif.
- 🔍 **Akıllı Arama ve Filtreleme**: İsim veya kategoriye göre arama.
- 🤖 **AI Destekli Sohbet**: Sağlık, diyet ve egzersiz sorularına anında cevap.
- 📸 **Görsel Tabanlı Besin Analizi**: Fotoğrafla tahmini kalori ve makro değer hesaplama.
- 🔐 **Güvenli Giriş**: E-posta/şifre, Google ve Apple ile giriş (Clerk entegrasyonu).
- 📊 **İlerleme Grafikleri**: Kilo ve boy değişimlerini görselleştirme.
- 🎨 **Modern Arayüz**: Animasyonlu navigasyon (Tab Bar + Drawer).

---

## 📸 Ekran Görüntüleri

| Giriş Ekranı | Ana Sayfa | Tarifler |
|-------------|-----------|----------|
| ![signin](./assets/screens/signin.png) | ![home](./assets/screens/home.png) | ![recipes](./assets/screens/recipes.png) |

| AI Sohbet | Görsel Analiz | Navigasyon |
|----------|----------------|------------|
| ![ai-chat](./assets/screens/ai-chat.png) | ![ai-vision](./assets/screens/ai-vision.png) | ![navigation](./assets/screens/navigation.gif) |

> 📂 `./assets/screens/` klasörünü görsellerinle birlikte projeye eklemeyi unutma!

---

## 🛠️ Kullanılan Teknolojiler

| Katman         | Teknolojiler                    |
|----------------|---------------------------------|
| **Frontend**   | React Native, Expo              |
| **Kimlik**     | Clerk                           |
| **Veritabanı** | Firebase (Cloud Firestore)      |
| **Yapay Zekâ** | Google Gemini API               |
| **Navigasyon** | React Navigation                |
| **Grafikler**  | React Native Chart Kit          |

---

## 🏗️ Mimari ve Veri Akışı

```mermaid
graph TD
  Kullanıcı -->|Etkileşim| ReactNative[React Native Uygulaması]
  ReactNative -->|Kimlik| Clerk
  ReactNative -->|Veri| Firestore[Firebase Firestore]
  ReactNative -->|AI Sorgusu| Gemini[Google Gemini API]
