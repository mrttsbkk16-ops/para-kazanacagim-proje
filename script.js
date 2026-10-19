// Mobil Menü Açma/Kapatma
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Gönderim Yakalama (Simülasyon)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Harika! Mesajınız başarıyla simüle edildi. Kodlar tamamen hazır.');
});
