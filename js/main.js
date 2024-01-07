document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-gallery');
    let currentIndex = 0;

    function showImage(index) {
        const images = document.querySelectorAll('.slider-gallery img');
        images.forEach((image, i) => {
            image.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

 
    setInterval(nextSlide, 3000);

    // Initial setup
    const images = document.querySelectorAll('.slider-gallery img');
    showImage(currentIndex);

    // Event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
});