function submitForm() {
  const name = document.getElementById('fName').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  const topic = document.getElementById('fTopic').value;
  const msg = document.getElementById('fMsg').value.trim();
  const agree = document.getElementById('fAgree').checked;
  if (!name || !email || !topic || !msg) { alert('Mohon lengkapi semua field yang wajib diisi! 🌸'); return; }
  if (!agree) { alert('Mohon setujui Kebijakan Privasi terlebih dahulu.'); return; }
  const btn = document.querySelector('.btn-send');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
    btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
    const successMsg = document.getElementById('successMsg');
    successMsg.style.display = 'flex';
    document.getElementById('fName').value = '';
    document.getElementById('fEmail').value = '';
    document.getElementById('fPhone').value = '';
    document.getElementById('fTopic').value = '';
    document.getElementById('fMsg').value = '';
    document.getElementById('fAgree').checked = false;
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan Sekarang';
      btn.style.background = '';
      btn.disabled = false;
      successMsg.style.display = 'none';
    }, 4000);
  }, 1500);
}

const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.1});
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));