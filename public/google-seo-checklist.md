# Google SEO Optimizasyon Adımları

## ✅ Tamamlanan İyileştirmeler

### 1. Meta Etiketler ve Yapısal Veri
- ✅ Ana sayfaya Organization Schema eklendi
- ✅ Tüm ürün sayfalarına Product Schema (JSON-LD) eklendi
- ✅ Open Graph ve Twitter Card meta etiketleri eklendi
- ✅ Breadcrumb Schema tüm ürün sayfalarında mevcut
- ✅ Canonical URL'ler eklendi

### 2. Teknik SEO
- ✅ robots.txt dosyası mevcut ve optimize
- ✅ Sitemap.xml dinamik olarak üretiliyor (65+ sayfa)
- ✅ Favicon tüm formatlarda mevcut (icon.png, favicon.ico, apple-icon.png)
- ✅ Mobile-friendly tasarım (responsive)

### 3. İçerik Optimizasyonu
- ✅ Ana sayfaya SEO-friendly içerik paragrafları eklendi
- ✅ Ürün kodları ve detaylı açıklamalar sisteme gömüldü
- ✅ H1, H2, H3 başlıkları hiyerarşik olarak düzenlendi
- ✅ Alt etiketleri (image alt tags) eklendi
- ✅ Internal linking yapısı oluşturuldu

### 4. Ürün Sayfası İyileştirmeleri
- ✅ Her ürün için benzersiz meta title ve description
- ✅ Ürün kodu (SKU/MPN) schema'ya eklendi
- ✅ Marka bilgisi yapısal veriye eklendi
- ✅ Ürün görselleri schema'da belirtildi
- ✅ Stok durumu (InStock) belirtildi

## 📋 Yapılması Gerekenler

### Google Search Console Kurulumu
1. **Google Search Console'a gidin:** https://search.google.com/search-console
2. **Siteyi ekleyin:** "Özellik ekle" butonuna tıklayın
3. **URL öneki seçin:** `https://angoraotomasyon.com`
4. **Doğrulama kodu alın:** HTML etiketi yöntemini seçin
5. **Kodu yerleştirin:** Layout.tsx dosyasındaki verification kodunu gerçek kod ile değiştirin:
   ```typescript
   verification: {
     google: 'buraya-google-verification-kodunuz',
   }
   ```
6. **Site haritasını gönderin:** `https://angoraotomasyon.com/sitemap.xml`

### Google Business Profile
- Google İşletme Profilini oluşturun/güncelleyin
- Adres, telefon, çalışma saatleri ekleyin
- Kategorileri belirleyin: "Endüstriyel Otomasyon Firması"

### Analytics
- Google Analytics 4 (GA4) kurulumu yapın
- Conversion tracking ayarlayın

## 🎯 Önerilen İçerik Geliştirmeleri

### Yeni İçerikler
1. **Ürün Kılavuzları:** Her ürün kategorisi için detaylı kullanım kılavuzları
2. **Vaka Çalışmaları:** Başarılı proje hikayeleri
3. **Sıkça Sorulan Sorular:** Her ürün kategorisi için FAQ sayfası
4. **Video İçerikler:** Ürün tanıtım videoları (YouTube SEO)

### Mevcut İçerik İyileştirmeleri
1. Blog yazılarına dahili linkler ekleyin
2. Ürün kategorilerine açıklayıcı metin ekleyin
3. Proje sayfalarına detaylı teknik bilgiler ekleyin

## 📊 İzleme ve Raporlama

### Takip Edilecek Metrikler
- Organic trafik (Google Analytics)
- Anahtar kelime sıralamaları (Google Search Console)
- Sayfa hızı (PageSpeed Insights)
- Mobile kullanılabilirlik
- Crawl hataları
- Index durumu

### Önemli Anahtar Kelimeler
- "endüstriyel otomasyon"
- "plc programlama"
- "siemens plc"
- "servo motor"
- "otomasyon sistemleri"
- "scada sistemi"
- Ürün kodları (örn: "TC4S-14R", "TK4S-14RN")

## 🔧 Teknik Notlar

### Netlify Ayarları
- ✅ Netlify'da custom domain yapılandırması yapılmalı
- ✅ SSL sertifikası aktif olmalı
- ✅ Redirects yapılandırması (_redirects dosyası mevcut)

### Performans Optimizasyonu
- Görselleri WebP formatına çevirmeyi düşünün
- Lazy loading'i etkinleştirin
- CDN kullanımı (Netlify otomatik sağlıyor)

## 📅 Sonraki Adımlar

1. **Hemen yapın:**
   - Google Search Console verification kodunu güncelleyin
   - Siteyi Google Search Console'a ekleyin
   - Sitemap'i gönderin

2. **Bu hafta:**
   - Google Business Profile oluşturun
   - Google Analytics kurun
   - İlk performans raporunu alın

3. **Bu ay:**
   - Anahtar kelime araştırması yapın
   - İçerik takvimi oluşturun
   - Backlink stratejisi belirleyin

## 🌟 Ekstra İpuçları

- Düzenli olarak blog yazıları yayınlayın (SEO için önemli)
- Sosyal medya paylaşımlarını artırın
- Sektörel forumlarda aktif olun
- İş ortaklarından backlink alın
- Müşteri yorumlarını ve referansları sitenize ekleyin
