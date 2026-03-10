

## Undangan Pernikahan Digital - Tema Adat Bali 🕉️

Landing page undangan pernikahan bertema adat Bali dengan fokus tampilan mobile, menggunakan data dummy yang bisa diganti nanti, dengan backend Supabase untuk RSVP & ucapan.

### Design & Theme
- **Warna**: Hitam gelap, emas (gold), dan merah marun — nuansa adat Bali yang mewah
- **Font**: Serif elegan untuk nama mempelai, script/cursive untuk aksen dekoratif
- **Ornamen**: Border emas, motif Bali (garis dekoratif, ornamen mandala SVG)
- **Layout**: Mobile-first (max-width ~430px centered), scroll vertikal satu halaman

### Sections (scroll-based dengan animasi fade-in & slide-up)

1. **Cover / Opening**
   - Layar penuh dengan overlay gelap, nama mempelai besar (script font), tanggal pernikahan
   - Teks "Kepada Yth." dengan nama tamu dari URL parameter (`?to=...`)
   - Tombol "Buka Undangan" yang memulai musik & scroll ke konten

2. **Kutipan & Countdown**
   - Kutipan dari kitab suci (Rg Veda) dengan ornamen emas
   - Countdown timer (hari, jam, menit, detik) ke tanggal pernikahan

3. **Profil Mempelai**
   - Dua card: mempelai pria & wanita dengan foto placeholder
   - Nama lengkap, nama orang tua, alamat — dengan animasi slide-in

4. **Detail Acara (Waktu & Tempat)**
   - Tanggal, waktu, lokasi dengan ikon dekoratif
   - Tombol "Lihat Lokasi" (link ke Google Maps)
   - Foto landscape di bawah

5. **Galeri Foto**
   - Grid/carousel foto prewedding (placeholder images)
   - Lightbox saat foto diklik

6. **RSVP Form** *(dengan Supabase)*
   - Input: Nama, Alamat, Kehadiran (Hadir / Tidak Hadir)
   - Simpan ke tabel `rsvp` di Supabase

7. **Wedding Gift**
   - Info rekening bank dengan tombol "Copy No Rekening"
   - Dua rekening (mempelai pria & wanita)

8. **Wedding Wish / Ucapan** *(dengan Supabase)*
   - Form kirim ucapan (nama + pesan)
   - Tampilkan daftar ucapan dari tamu sebelumnya
   - Simpan ke tabel `wishes` di Supabase

9. **Footer / Closing**
   - Ucapan terima kasih dengan ornamen penutup

### Animasi
- Scroll-triggered fade-in dan slide-up untuk setiap section
- Parallax subtle pada gambar hero
- Countdown timer yang bergerak real-time
- Hover effect pada tombol dan foto galeri

### Backend (Supabase)
- Tabel `rsvp`: id, name, address, attendance (hadir/tidak), created_at
- Tabel `wishes`: id, name, message, created_at
- RLS policy: siapa saja bisa insert, hanya baca data yang sudah ada

