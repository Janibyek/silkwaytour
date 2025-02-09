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
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}
    slides[slideIndex1 - 1].style.display = "block";
    setTimeout(showSlides1, 3000); // 2 секунд тутамд зураг солигдоно
}
let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 3000); // 2 секунд тутамд зураг солигдоно
}
let slideIndex3 = 0;
showSlides3();

function showSlides3() {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides3, 3000); // 2 секунд тутамд зураг солигдоно
}
let slideIndex4 = 0;
showSlides4();

function showSlides4() {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides4, 3000); // 2 секунд тутамд зураг солигдоно
}
let slideIndex5 = 0;
showSlides5();

function showSlides5() {
    let i;
    let slides = document.getElementsByClassName("mySlides5");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides5, 3000); // 2 секунд тутамд зураг солигдоно
}
