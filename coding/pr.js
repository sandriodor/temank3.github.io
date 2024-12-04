// Ambil elemen tombol dan menu
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Menampilkan dan menyembunyikan menu saat tombol diklik
menuButton.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Menyembunyikan menu jika klik di luar menu
window.addEventListener('click', function(event) {
    if (!event.target.matches('#menuButton')) {
        dropdownMenu.style.display = 'none';
    }
});
