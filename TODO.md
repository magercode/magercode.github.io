# PEMBARUAN SITUS SELANJUTNYA

## Dokumentasi Baru
- [ ] Buat halaman dokumentasi Game Theory di `src/halaman/game-theory.html` dengan struktur konsisten (`header`, `main`, `aside`), breadcrumbs, dan tema gelap.
- [ ] Buat halaman dokumentasi Kriptografi di `src/halaman/kriptografi.html` dengan fokus konsep dasar + contoh sederhana.
- [ ] Buat halaman dokumentasi Music Theory di `src/halaman/music-theory.html` dengan pengantar notasi, interval, dan chord dasar.
- [ ] Buat halaman dokumentasi DevOps di `src/halaman/devops.html` berisi ringkasan praktik inti (CI/CD, monitoring, deployment).
- [ ] Tambahkan link ke 4 halaman baru pada navigasi sidebar Dokumen Inti di semua halaman `src/halaman/*.html`.
- [ ] Tambahkan link ke 4 halaman baru pada menu header (top-nav) bila diperlukan, atau buat submenu di halaman Dokumentasi.
- [ ] Update `src/halaman/dokumentasi.html` untuk menampilkan 4 dokumentasi baru di daftar dokumen populer.
- [ ] Pastikan semua halaman baru terdaftar di `sitemap.xml` dan metadata SEO (description + og + twitter + canonical) sesuai pola terbaru.

## Playground & IDE
- [ ] Tentukan tujuan playground: hanya LaTeX, atau juga code IDE untuk JS/Python/HTML.
- [ ] Buat halaman khusus playground lanjutan di `src/halaman/playground-ide.html` atau perluas `src/halaman/math-playground.html`.
- [ ] Tambahkan komponen editor kode berbasis web (misal CodeMirror atau Monaco) dengan tema gelap.
- [ ] Tambahkan area output/preview yang jelas (console output atau preview HTML).
- [ ] Tambahkan tombol aksi: Run, Reset, Copy, dan Clear output.
- [ ] Buat preset contoh untuk tiap bahasa/tema (misal: JS dasar, HTML/CSS, LaTeX).
- [ ] Pastikan layout playground memakai Bento Grid dan tetap responsif di mobile.

## Konsistensi & UX
- [ ] Perbarui copywriting agar konsisten: “dokumentasi & arahan belajar mandiri”, bukan kelas/sesi.
- [ ] Cek semua breadcrumbs agar sesuai struktur “Beranda / Halaman / [Judul]”.
- [ ] Audit sidebar mobile setelah penambahan konten agar tidak overflow dan tetap full-width.

## QA & Rilis
- [ ] Verifikasi semua link internal tidak 404.
- [ ] Lakukan pengecekan tampilan di mobile (≤768px) untuk halaman baru.
- [ ] Pastikan metadata SEO tidak duplikat dan canonical benar.
