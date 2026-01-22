let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    
    // 今の「active」を消す
    slides[currentSlide].classList.remove('active');
    
    // 次の番号を計算する（最後の次は最初に戻る）
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    
    // 新しい番号に「active」をつける
    slides[currentSlide].classList.add('active');
}