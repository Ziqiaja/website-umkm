# P06 Layout: Halaman Tentang

Halaman `tentang.html` dipilih sebagai halaman utama selain beranda. Area promo memasangkan teks dan gambar, sedangkan informasi jam buka, lokasi, dan kontak membentuk tiga kolom dengan isi per baris; karena keduanya mempunyai hubungan dua dimensi, CSS Grid menjaga kolom dan baris tetap teratur. Flexbox dipakai untuk kelompok tombol/status promo dan susunan vertikal isi setiap kartu, yang masing-masing merupakan kelompok satu dimensi.

Alternatif yang dipertimbangkan adalah Flexbox untuk seluruh kartu informasi. Alternatif itu kurang tepat karena pembagian tiga kolom sekaligus baris lebih jelas dinyatakan sebagai Grid. Tidak ada elemen yang perlu menempel pada containing block, jadi positioning lokal tidak ditambahkan. Spacing memakai token `--space-*` dari P05. Urutan DOM dan fokus keyboard tetap mengikuti urutan sumber; tidak ada perubahan pada tabel, form, atau validasinya. Tidak ada media query atau breakpoint baru sebelum P07.

## Code review teman

Menunggu masukan aktual dari teman reviewer; catatan akan dilengkapi sebelum perubahan di-commit.