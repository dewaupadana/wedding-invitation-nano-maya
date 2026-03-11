

## Rencana Perubahan Undangan Pernikahan

Berdasarkan gambar referensi yang dikirim, ada 5 perubahan utama:

### 1. Hero Section Baru (setelah cover dibuka, sebelum countdown)
Membuat komponen `HeroSection` baru yang menampilkan:
- Foto mempelai sebagai background full-width dengan overlay gelap
- Nama mempelai "Wika & Iin" dalam font script besar
- Tanggal pernikahan "17 OKTOBER 2025"
- Kutipan dari Rg Veda di bawahnya
- Layout mirip gambar pertama yang dilampirkan

### 2. Redesign EventSection (Waktu & Tempat)
Mengubah tampilan dari card menjadi:
- Foto mempelai di atas (seperti gambar kedua)
- Ornamen Bali di antara foto dan info
- Teks undangan formal ("Atas Asung Kerta Wara Nugraha...")
- Info waktu & tempat dalam format teks sederhana (bukan card)
- Tombol "MAP LOKASI"

### 3. Background Warna Berbeda per Section
Menambahkan variasi background seperti di gambar kedua:
- Section gelap: `#2c2c2c` (base hitam)
- Section terang/krem: warna krem/beige untuk beberapa section (seperti bagian waktu & tempat di gambar)
- Alternating pattern antara gelap dan terang

### 4. Slider Foto di atas Galeri
Menambahkan horizontal photo slider (carousel) menggunakan `embla-carousel-react` (sudah terinstall) tepat di atas grid galeri foto yang sudah ada.

### 5. Update Warna Theme
Mengubah CSS variables di `index.css`:
- Base hitam: `#2c2c2c` → HSL sekitar `0 0% 17%`
- Gold: `#c9a24d` → HSL sekitar `40 49% 55%`
- Update semua variabel terkait (background, card, muted, border, dll)

### Urutan Section di Index.tsx (setelah perubahan)
1. CoverSection (tetap)
2. **HeroSection** (BARU - foto + nama mempelai)
3. CountdownSection (tetap)
4. CoupleSection (tetap)
5. EventSection (REDESIGN)
6. GallerySection (+ slider di atas)
7. RsvpSection (tetap)
8. GiftSection (tetap)
9. WishesSection (tetap)
10. FooterSection (tetap)

### File yang akan diubah/dibuat:
- **Buat**: `src/components/wedding/HeroSection.tsx`
- **Edit**: `src/components/wedding/EventSection.tsx` — ubah dari card ke teks + foto
- **Edit**: `src/components/wedding/GallerySection.tsx` — tambah slider carousel
- **Edit**: `src/index.css` — update warna `#2c2c2c` dan `#c9a24d`
- **Edit**: `src/pages/Index.tsx` — tambah HeroSection, tambah background alternating per section

