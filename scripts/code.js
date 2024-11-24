document.addEventListener('DOMContentLoaded', function () {
    const backgroundImages = document.querySelectorAll('.background img');
    let currentIndex = 0;

    function changeBackground() {
        backgroundImages[currentIndex].style.opacity = '0';
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        backgroundImages[currentIndex].style.opacity = '1';

    }

    setInterval(changeBackground, 2000); // Cambia cada segundo (1000 ms = 1s)
});
