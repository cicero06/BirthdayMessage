// HTML elemanlarını seç
const giftBox = document.getElementById('gift-box');
const countdown = document.getElementById('countdown');
const timer = document.getElementById('timer');
const birthdayContent = document.getElementById('birthday-content');

// Tarih ayarları
const targetDate = new Date('2025-01-18T00:00:00+01:00'); // Avrupa saati

// Geri sayım fonksiyonu
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    // Hediye zamanı geldi
    clearInterval(countdownInterval);
    countdown.style.display = 'none';
    giftBox.style.animation = 'openGift 1s ease forwards';
    setTimeout(() => {
      giftBox.style.display = 'none';
      birthdayContent.style.display = 'block';
    }, 1000);
  } else {
    // Geri sayımı güncelle
    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
    timer.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

// Geri sayımı başlat
const countdownInterval = setInterval(updateCountdown, 1000);

// Hediye kutusu animasyonu için CSS ekle
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes openGift {
  0% { transform: scale(1); }
  100% { transform: scale(0); }
}`;
document.head.appendChild(styleSheet);
