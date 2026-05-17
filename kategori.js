
document.addEventListener('DOMContentLoaded', function() {
  
  
  var semuaKota = document.querySelectorAll('.kotak-kota');
  semuaKota.forEach(function(kotak) {
    kotak.addEventListener('click', function(e) {
      e.preventDefault();
      var namaKota = kotak.querySelector('div').textContent;
      alert('Menampilkan kuliner di ' + namaKota + ' 🌸\n(Fitur ini akan segera hadir!)');
    });
  });
});