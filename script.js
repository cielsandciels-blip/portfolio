function moveSlide(step, btn) {
    // 1. クリックされたボタンの「親の箱（slider-container）」を見つける
    const container = btn.closest('.slider-container');
    
    // 2. その箱の中にある画像だけを取得する（これで他のプロジェクトと混ざらない！）
    const slides = container.querySelectorAll('.slide');
    
    // 3. その箱の中で現在表示されている画像(active)を探す
    let currentActive = container.querySelector('.slide.active');
    
    // 4. その画像が「箱の中のスライドリスト」の何番目か調べる
    let currentIndex = Array.from(slides).indexOf(currentActive);
    
    // 5. 今の active を消す
    slides[currentIndex].classList.remove('active');
    
    // 6. 次の番号を計算（箱の中のスライド枚数でループさせる）
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    
    // 7. その箱の中の新しい画像に active をつける
    slides[currentIndex].classList.add('active');
}