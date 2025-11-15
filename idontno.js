// idontno.js (不要包含 <script> 標籤)
let index = 0;
let slides = [];

function showSlides() {
    if (!slides.length) return; // 沒有圖片就跳過
    slides.forEach(s => s.style.display = "none");
    index = (index + 1) % slides.length;
    slides[index].style.display = "block";
    setTimeout(showSlides, 3000);
}

// 為每個帶有 .hover-audio 的項目添加滑鼠懸停事件
document.querySelectorAll('li').forEach(li => {
    const audio = li.querySelector('.hover-audio');
    
    if (audio) {
        li.addEventListener('mouseenter', () => {
            audio.currentTime = 0;  // 重置音檔位置
            audio.play();
        });
        
        li.addEventListener('mouseleave', () => {
            audio.pause();
        });
    }
});