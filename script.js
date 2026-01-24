function moveSlide(step, btn) {
    // 1. クリックされたボタンの親である「slider-container」を特定する
    const container = btn.closest('.slider-container');
    
    // 2. そのコンテナの中にあるスライドだけを取得する
    const slides = container.querySelectorAll('.slide');
    
    // 3. 現在 active がついているスライドとその番号を探す
    let currentActive = container.querySelector('.slide.active');
    let currentIndex = Array.from(slides).indexOf(currentActive);
    
    // 4. 今の「active」を消す
    slides[currentIndex].classList.remove('active');
    
    // 5. 次の番号を計算（ここは元のロジックを継承！）
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    
    // 6. 新しい番号に「active」をつける
    slides[currentIndex].classList.add('active');
}