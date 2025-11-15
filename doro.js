let index = 0;
let slides = [];

function showSlides() {
    if (!slides.length) return; // 沒有圖片就跳過
    slides.forEach(s => s.style.display = "none");
    index = (index + 1) % slides.length;
    slides[index].style.display = "block";
    setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    slides = Array.from(document.querySelectorAll(".slideshow img"));
    if (slides.length) showSlides();
});
