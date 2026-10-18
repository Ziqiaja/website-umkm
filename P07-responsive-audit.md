# P07 Responsive Audit

## Cakupan dan breakpoint berbasis konten

Audit mencakup `index.html`, `produk.html`, `galeri.html`, `tentang.html`, dan `kontak.html` di folder proyek, serta `../kontak.html` yang masih tersedia di root. Gejala awal paling nyata ada di halaman Tentang: grid informasi tetap tiga kolom pada viewport 320px; teks kartu melampaui viewport dan lebar halaman mencapai 382px. Penyebabnya adalah aturan tiga kolom khusus di `tentang.css` yang mengalahkan susunan responsif global. Grid informasi sekarang memakai minimum track `14rem` dan `auto-fit`, sedangkan promo beralih ke satu kolom pada `max-width: 760px`.

Dua transisi grid informasi yang mengikuti lebar konten (bukan perangkat tertentu) diamati pada browser:

| Lebar viewport | Gejala sebelum transisi | Hasil setelah transisi |
| --- | --- | --- |
| 545-585 CSS px | Satu kartu mengisi baris; tersedia ruang untuk track minimum 14rem berikutnya. | Grid `auto-fit` berubah dari satu menjadi dua kolom. |
| 825-865 CSS px | Dua kartu mengisi baris; ruang konten cukup untuk track minimum ketiga. | Grid berubah dari dua menjadi tiga kolom. |

Nilai fluida yang dipakai: `--text-display: clamp(1.75rem, calc(1.25rem + 2.5vw), 3.5rem)` dan `--page-gutter: clamp(20px, 7vw, 80px)`. Keduanya menjaga judul dan ruang tepi proporsional tanpa memperbesar tipografi tanpa batas.

## Audit gambar dan semantik

| Halaman | Temuan gambar | Hasil |
| --- | --- | --- |
| Beranda | Tidak ada elemen `<img>`; hero menggunakan background image. | Tidak ada `alt`, dimensi intrinsik, atau `srcset` untuk diaudit pada hero. |
| Produk | Empat sumber aktual berukuran 1376x768, 640x427, 554x554, dan 400x400. Semua punya `alt`; atribut `width`/`height` sebelumnya tidak ada. | Dimensi intrinsik ditambahkan. CSS mempertahankan frame 16:9 dengan `object-fit: cover`; foto non-16:9 memang terpotong sebagai thumbnail. Tidak ada kandidat `srcset` lain pada markup/sumber yang tersedia. |
| Galeri | Sumber aktual 1376x768 dan 1004x723, keduanya ber-`alt`; CSS memberi frame tinggi tetap dan `object-fit: cover`. | Dimensi intrinsik ditambahkan. Bagian galeri diberi nama aksesibel setelah review menemukan section tanpa nama. Tidak ada kandidat `srcset` lain yang tersedia. |
| Tentang | Sumber aktual 1004x723, memiliki `alt`; frame gambar ditata 360px dengan `object-fit: cover`. | Atribut dimensi intrinsik ditambahkan; tidak ada kandidat sumber alternatif yang tersedia. |
| Kontak | Tidak ada elemen gambar. | Tidak ada atribut gambar atau kandidat sumber untuk ditambahkan. |
| Kontak root | Tidak ada elemen gambar. | Tautan navigasi lama dan jalur script form yang rusak diperbaiki agar mengarah ke halaman dan script proyek yang ada. |

Semua gambar konten yang diaudit memiliki `alt` deskriptif. Sumber eksternal hanya menyediakan URL tunggal dalam HTML, sehingga `srcset`/`sizes` tidak direkayasa dengan kandidat resolusi yang tidak tersedia. Tabel produk tetap semantik dan bergulir di `.table-wrap`; form, urutan DOM, token P02-P06, Grid/Flexbox, dan focus indicator dipertahankan.

## Pengujian dan peer review

| Skenario | Hasil |
| --- | --- |
| Narrow 320px | Kelima halaman utama dan kontak root: `scrollWidth` sama dengan lebar layout viewport; tidak ada scroll horizontal tingkat halaman. |
| Medium 768px dan wide 1280px | Semua halaman tidak overflow; kolom mengikuti ruang yang tersedia. |
| Portrait 390x844 dan landscape 844x390 | Semua halaman tidak overflow. |
| Zoom 200% | Pemeriksaan browser menemukan Tentang dan Kontak overflow ketika lebar layout turun ke sekitar 187 CSS px. Setelah koreksi min-content, keenam file diuji ulang pada lebar efektif yang sama (172px layout viewport setelah scrollbar) dan semuanya memiliki `scrollWidth` sama dengan viewport. |
| Keyboard | Tab pertama menampilkan outline fokus 2px pada tautan brand. Form kontak root diisi dan disubmit dengan otomasi browser; preview data tampil. |

Review independen dilakukan pada `galeri.html`, halaman yang tidak menjadi fokus layout P06. Reviewer menemukan section galeri tidak memiliki nama aksesibel; rekomendasinya adalah memberi heading atau label aksesibel, dan label `aria-label` diterapkan. Review ini dijalankan sebagai peer review berbantuan AI, bukan review langsung dari teman praktikum; identitas/persetujuan teman praktikum belum tersedia dan tidak diklaim.

## Perbaikan terverifikasi

Perbaikan utama adalah membuat grid Tentang mengikuti lebar konten dan menumpuk promo pada viewport sempit. Pengujian ulang di 320px mengubah lebar halaman dari 382px menjadi sama dengan viewport (305px layout width pada browser pengujian), tanpa elemen yang melewati batas. Pada 200% zoom, item flex kartu dan teks heading mempertahankan lebar min-content; heading sekarang boleh membungkus dan konten Grid dapat menyusut. Retest pada lebar efektif 187 CSS px tidak menemukan page-level overflow pada enam file. Selain itu, gambar menerima dimensi intrinsik terverifikasi dan halaman kontak root kini memuat handler form serta tujuan navigasi yang benar.
