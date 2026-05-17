var daftarMakanan = [
  {
    nama:"Rawon Setan Surabaya", kategori:"indonesia",
    gambar:"https://i.pinimg.com/736x/a6/c2/28/a6c22823c94080307e24362f05eaa082.jpg",
    badge:"hot", badgeText:"🔥 Hot", rating:4.95, harga:35000, hargaTeks:"Rp 35.000",
    lokasi:"Surabaya, Jawa Timur", tags:["Berkuah","Pedas","Khas Jatim"]
  },
  {
    nama:"Sate Madura Pak Arif", kategori:"indonesia",
    gambar:"https://i.pinimg.com/736x/81/70/66/817066a3e0587d60592d31920f31f69a.jpg",
    badge:"top", badgeText:"⭐ Top", rating:4.87, harga:28000, hargaTeks:"Rp 28.000",
    lokasi:"Madura, Jawa Timur", tags:["Bakar","Gurih","Khas Madura"]
  },
  {
    nama:"Es Campur Pak Kumis", kategori:"dessert",
    gambar:"https://i.pinimg.com/736x/c4/a4/29/c4a4293c23490e5d55c575a1143b8660.jpg",
    badge:"baru", badgeText:"✨ Baru", rating:4.92, harga:15000, hargaTeks:"Rp 15.000",
    lokasi:"Bandung, Jawa Barat", tags:["Segar","Manis","Dingin"]
  },
  {
    nama:"Nasi Padang Ampera", kategori:"indonesia",
    gambar:"https://i.pinimg.com/736x/2a/86/64/2a8664012cab9e98c8d9ac3974589218.jpg",
    badge:"hot", badgeText:"🔥 Hot", rating:4.88, harga:25000, hargaTeks:"Rp 25.000",
    lokasi:"Padang, Sumatera Barat", tags:["Komplit","Pedas","Khas Minang"]
  },
  {
    nama:"Mie Aceh Istimewa", kategori:"indonesia",
    gambar:"https://i1-c.pinimg.com/1200x/22/a6/4d/22a64d8f5f2c16b6d0146bf4f7a1f67a.jpg",
    badge:"top", badgeText:"⭐ Top", rating:4.75, harga:30000, hargaTeks:"Rp 30.000",
    lokasi:"Banda Aceh, Aceh", tags:["Pedas","Rempah","Khas Aceh"]
  },
  {
    nama:"Burger Smash Juicy", kategori:"western",
    gambar:"https://i.pinimg.com/736x/3b/03/1f/3b031f3a47a7dc7bb3220a683b895e3d.jpg",
    badge:"baru", badgeText:"✨ Baru", rating:4.70, harga:55000, hargaTeks:"Rp 55.000",
    lokasi:"Jakarta Selatan", tags:["Western","Kenyang","Cheesy"]
  },
  {
    nama:"Takoyaki Osaka Style", kategori:"jajanan",
    gambar:"https://i.pinimg.com/736x/fe/58/0c/fe580c83a433505a674e19b1a835ab2b.jpg",
    badge:"hot", badgeText:"🔥 Hot", rating:4.65, harga:20000, hargaTeks:"Rp 20.000",
    lokasi:"Surabaya, Jawa Timur", tags:["Jajanan","Gurih","Hits"]
  },
  {
    nama:"Kepiting Saus Padang", kategori:"seafood",
    gambar:"https://i1-c.pinimg.com/1200x/d6/48/a1/d648a134058417fb0a55483e6c380c33.jpg",
    badge:"top", badgeText:"⭐ Top", rating:4.80, harga:120000, hargaTeks:"Rp 120.000",
    lokasi:"Makassar, Sulawesi Selatan", tags:["Seafood","Pedas","Premium"]
  },
  {
    nama:"Teh Tarik Harum", kategori:"minuman",
    gambar:"https://i.pinimg.com/736x/fe/c0/30/fec030f16ba1fdea1f66d4580fead697.jpg",
    badge:"baru", badgeText:"✨ Baru", rating:4.60, harga:12000, hargaTeks:"Rp 12.000",
    lokasi:"Medan, Sumatera Utara", tags:["Minuman","Manis","Hangat"]
  },
  {
    nama:"Gudeg Yu Djum", kategori:"indonesia",
    gambar:"https://i.pinimg.com/736x/74/51/db/7451db063362821a07b41a27ba3db912.jpg",
    badge:"hot", badgeText:"🔥 Hot", rating:4.90, harga:20000, hargaTeks:"Rp 20.000",
    lokasi:"Yogyakarta, DIY", tags:["Manis","Khas Jogja","Legendaris"]
  },
  {
    nama:"Martabak Telur Spesial", kategori:"jajanan",
    gambar:"https://i1-c.pinimg.com/1200x/d6/48/a1/d648a134058417fb0a55483e6c380c33.jpg",
    badge:"hot", badgeText:"🔥 Hot", rating:4.82, harga:30000, hargaTeks:"Rp 30.000",
    lokasi:"Bandung, Jawa Barat", tags:["Gurih","Malam","Populer"]
  },
  {
    nama:"Pudding Mochi Matcha", kategori:"dessert",
    gambar:"https://i.pinimg.com/736x/d4/2b/9c/d42b9cbae3db8d9ed42237f0d89ebef0.jpg",
    badge:"baru", badgeText:"✨ Baru", rating:4.55, harga:18000, hargaTeks:"Rp 18.000",
    lokasi:"Surabaya, Jawa Timur", tags:["Dessert","Matcha","Manis"]
  }
];


var filterAktif = "semua";
var urutanAktif = "default";



function tampilkanKartu(data) {
  var grid        = document.getElementById("gridKartu");
  var pesanKosong = document.getElementById("pesanKosong");
  var jumlah      = document.getElementById("jumlahHasil");

  jumlah.textContent = data.length;

  if (data.length === 0) {
    grid.innerHTML = "";
    pesanKosong.style.display = "block";
    return;
  }
  pesanKosong.style.display = "none";

  var html = "";
  for (var i = 0; i < data.length; i++) {
    var m = data[i];

    var badgeHTML = m.badge
      ? '<div class="kartu-badge badge-' + m.badge + '">' + m.badgeText + '</div>'
      : "";

    var tagsHTML = m.tags.map(function(t) {
      return '<span class="tag">' + t + '</span>';
    }).join("");

    
    var gambarHTML = '<img src="' + m.gambar + '" alt="' + m.nama + '" '
      + 'onerror="this.style.display=\'none\';this.parentElement.classList.add(\'gambar-fallback\')" />';

    html += `
      <div class="col-lg-4 col-md-6">
        <div class="kartu">
          <div class="kartu-gambar">
            ${gambarHTML}
            ${badgeHTML}
          </div>
          <div class="kartu-isi">
            <div class="kartu-kategori-label">${m.kategori.toUpperCase()}</div>
            <div class="kartu-nama">${m.nama}</div>
            <div class="kartu-lokasi">📍 ${m.lokasi}</div>
            <div class="kartu-bawah">
              <div class="kartu-rating"><span class="bintang">★</span> ${m.rating}</div>
              <div class="kartu-harga">${m.hargaTeks}</div>
            </div>
            <div class="kartu-tags">${tagsHTML}</div>
          </div>
        </div>
      </div>`;
  }
  grid.innerHTML = html;
}



function terapkanFilter() {
  var kataCari = document.getElementById("inputCari").value.toLowerCase().trim();

  var hasil = daftarMakanan.filter(function(m) {
    var cocokKategori = (filterAktif === "semua") || (m.kategori === filterAktif);
    var cocokCari     = !kataCari
      || m.nama.toLowerCase().includes(kataCari)
      || m.lokasi.toLowerCase().includes(kataCari);
    return cocokKategori && cocokCari;
  });

  if (urutanAktif === "rating") hasil.sort(function(a,b){ return b.rating - a.rating; });
  if (urutanAktif === "murah")  hasil.sort(function(a,b){ return a.harga  - b.harga;  });
  if (urutanAktif === "mahal")  hasil.sort(function(a,b){ return b.harga  - a.harga;  });

  tampilkanKartu(hasil);
}



function filterKategori(kategori, tombol) {
  filterAktif = kategori;
  document.querySelectorAll(".tombol-filter").forEach(function(t){
    t.classList.remove("aktif");
  });
  tombol.classList.add("aktif");
  terapkanFilter();
}

function cariMakanan()  { terapkanFilter(); }

function urutkanKartu() {
  urutanAktif = document.getElementById("urutkan").value;
  terapkanFilter();
}

tampilkanKartu(daftarMakanan);