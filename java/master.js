document.addEventListener('DOMContentLoaded', function () {
    // ========== 메뉴 네비게이션 ==========
    const hamburgerBtn = document.querySelector('.navBox a');
    const mainNav = document.getElementById('mainNav');
    const cancelBtn = document.querySelector('.cancel');
    const menuItems = document.querySelectorAll('.menu_open');

    // 전체메뉴 열기
    hamburgerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        mainNav.classList.add('open');
        document.body.style.overflow = 'hidden'; // 스크롤 잠금
    });

    // 닫기 버튼 클릭 시
    cancelBtn.addEventListener('click', function () {
        mainNav.classList.remove('open');
        document.body.style.overflow = ''; // 스크롤 복원
    });

    // 메인메뉴 클릭 시 서브 토글
    menuItems.forEach(item => {
        const menuLink = item.querySelector('a');

        menuLink.addEventListener('click', function (e) {
            e.preventDefault();

            const isActive = item.classList.contains('active');

            // 모든 메뉴 닫기
            menuItems.forEach(i => i.classList.remove('active'));

            // 기존에 닫혀있던 메뉴만 열기
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    document.addEventListener('click', function (e) {
        const isMobile = window.innerWidth <= 767;

        // 메뉴 외부 클릭 시 닫기
        if (
            isMobile &&
            !mainNav.contains(e.target) &&
            !hamburgerBtn.contains(e.target)
        ) {
            mainNav.classList.remove('open');
            document.body.style.overflow = '';
        }
    });


    // 화면 크기 기준 영상 목록 선택
    let videoList;
    if (window.innerWidth <= 767) {
        // 모바일: 영상 3개
        videoList = [
            "video/M_video3.mp4",
            "video/M_video1.mp4",
            "video/M_video2.mp4"
        ];
    } else {
        // PC: 영상 6개
        videoList = [
            "video/video1.mp4",
            "video/video3.mp4",
            "video/video4.mp4",
            "video/video6.mp4"
        ];
    }

    let currentVideo = 0;
    const videoElement = document.querySelector(".bg-video");

    // 첫 영상 설정
    videoElement.src = videoList[currentVideo];
    videoElement.play();

    // 영상이 끝나면 다음 영상으로 변경
    videoElement.addEventListener("ended", () => {
        currentVideo++;
        if (currentVideo >= videoList.length) {
            currentVideo = 0; // 마지막 영상 후 첫 영상으로
        }
        videoElement.src = videoList[currentVideo];
        videoElement.play();
    });

    //커리큘럼 슬라이드
    const slider = document.querySelector('.CurriculumBox');

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // 속도 조절
        slider.scrollLeft = scrollLeft - walk;
    });

    // 터치 스크롤도 지원
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
    });

    //사용제품 슬라이드
    const styslider = document.querySelector('.productBox');

    let isDown2 = false;
    let startX2;
    let scrollLeft2;

    styslider.addEventListener('mousedown', (e) => {
        isDown2 = true;
        styslider.classList.add('active');
        startX2 = e.pageX - styslider.offsetLeft;
        scrollLeft2 = styslider.scrollLeft;
    });

    styslider.addEventListener('mouseleave', () => {
        isDown2 = false;
        styslider.classList.remove('active');
    });

    styslider.addEventListener('mouseup', () => {
        isDown2 = false;
        styslider.classList.remove('active');
    });

    styslider.addEventListener('mousemove', (e) => {
        if (!isDown2) return;
        e.preventDefault();
        const x = e.pageX - styslider.offsetLeft;
        const walk = (x - startX2) * 1.5; // 속도 조절
        styslider.scrollLeft2 = scrollLeft - walk;
    });

    // 터치 스크롤도 지원
    styslider.addEventListener('touchstart', (e) => {
        startX2 = e.touches[0].pageX - styslider.offsetLeft;
        scrollLeft2 = styslider.scrollLeft;
    });

    styslider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - styslider.offsetLeft;
        const walk = (x - startX2) * 1.5;
        styslider.scrollLeft2 = scrollLeft - walk;
    });

    //카페수칙 슬라이드
    const cafeslider = document.querySelector('.cafeGaide');

    let isDown3 = false;
    let startX3;
    let scrollLeft3;

    cafeslider.addEventListener('mousedown', (e) => {
        isDown3 = true;
        cafeslider.classList.add('active');
        startX3 = e.pageX - cafeslider.offsetLeft;
        scrollLeft3 = cafeslider.scrollLeft;
    });

    cafeslider.addEventListener('mouseleave', () => {
        isDown3 = false;
        cafeslider.classList.remove('active');
    });

    cafeslider.addEventListener('mouseup', () => {
        isDown3 = false;
        cafeslider.classList.remove('active');
    });

    cafeslider.addEventListener('mousemove', (e) => {
        if (!isDown3) return;
        e.preventDefault();
        const x = e.pageX - cafeslider.offsetLeft;
        const walk = (x - startX3) * 1.5; // 속도 조절
        cafeslider.scrollLeft3 = scrollLeft - walk;
    });

    // 터치 스크롤도 지원
    cafeslider.addEventListener('touchstart', (e) => {
        startX3 = e.touches[0].pageX - cafeslider.offsetLeft;
        scrollLeft3 = cafeslider.scrollLeft;
    });

    cafeslider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - cafeslider.offsetLeft;
        const walk = (x - startX3) * 1.5;
        cafeslider.scrollLeft3 = scrollLeft - walk;
    });

    //카페이미지 슬라이드
    const spaceslider = document.querySelector('.M_spaceBox');

    let isDown4 = false;
    let startX4;
    let scrollLeft4;

    spaceslider.addEventListener('mousedown', (e) => {
        isDown4 = true;
        spaceslider.classList.add('active');
        startX4 = e.pageX - spaceslider.offsetLeft;
        scrollLeft4 = spaceslider.scrollLeft;
    });

    spaceslider.addEventListener('mouseleave', () => {
        isDown4 = false;
        spaceslider.classList.remove('active');
    });

    spaceslider.addEventListener('mouseup', () => {
        isDown4 = false;
        spaceslider.classList.remove('active');
    });

    spaceslider.addEventListener('mousemove', (e) => {
        if (!isDown4) return;
        e.preventDefault();
        const x = e.pageX - spaceslider.offsetLeft;
        const walk = (x - startX4) * 1.5; // 속도 조절
        spaceslider.scrollLeft4 = scrollLeft - walk;
    });

    // 터치 스크롤도 지원
    spaceslider.addEventListener('touchstart', (e) => {
        startX4 = e.touches[0].pageX - spaceslider.offsetLeft;
        scrollLeft4 = spaceslider.scrollLeft;
    });

    spaceslider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - spaceslider.offsetLeft;
        const walk = (x - startX4) * 1.5;
        spaceslider.scrollLeft4 = scrollLeft - walk;
    });

    //갤러리이미지 슬라이드
    const gelslider = document.querySelector('.gellaryPic');

    let isDown5 = false;
    let startX5;
    let scrollLeft5;

    gelslider.addEventListener('mousedown', (e) => {
        isDown5 = true;
        gelslider.classList.add('active');
        startX5 = e.pageX - gelslider.offsetLeft;
        scrollLeft5 = gelslider.scrollLeft;
    });

    gelslider.addEventListener('mouseleave', () => {
        isDown5 = false;
        gelslider.classList.remove('active');
    });

    gelslider.addEventListener('mouseup', () => {
        isDown5 = false;
        gelslider.classList.remove('active');
    });

    gelslider.addEventListener('mousemove', (e) => {
        if (!isDown5) return;
        e.preventDefault();
        const x = e.pageX - gelslider.offsetLeft;
        const walk = (x - startX5) * 1.5; // 속도 조절
        gelslider.scrollLeft5 = scrollLeft - walk;
    });

    // 터치 스크롤도 지원
    gelslider.addEventListener('touchstart', (e) => {
        startX5 = e.touches[0].pageX - gelslider.offsetLeft;
        scrollLeft5 = gelslider.scrollLeft;
    });

    gelslider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - gelslider.offsetLeft;
        const walk = (x - startX5) * 1.5;
        gelslider.scrollLeft5 = scrollLeft - walk;
    });

    //매거진이미지 슬라이드
    const megaslider = document.querySelector('.megazine_BG');

    let isDown6 = false;
    let startX6;
    let scrollLeft6;

    megaslider.addEventListener('mousedown', (e) => {
        isDown6 = true;
        megaslider.classList.add('active');
        startX6 = e.pageX - megaslider.offsetLeft;
        scrollLeft6 = megaslider.scrollLeft;
    });

    megaslider.addEventListener('mouseleave', () => {
        isDown6 = false;
        megaslider.classList.remove('active');
    });

    megaslider.addEventListener('mouseup', () => {
        isDown6 = false;
        megaslider.classList.remove('active');
    });

    megaslider.addEventListener('mousemove', (e) => {
        if (!isDown6) return;
        e.preventDefault();
        const x = e.pageX - megaslider.offsetLeft;
        const walk = (x - startX6) * 1.5; // 속도 조절
        megaslider.scrollLeft6 = scrollLeft - walk;
    });

    // 터치 스크롤도 지원
    megaslider.addEventListener('touchstart', (e) => {
        startX6 = e.touches[0].pageX - megaslider.offsetLeft;
        scrollLeft6 = megaslider.scrollLeft;
    });

    megaslider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - megaslider.offsetLeft;
        const walk = (x - startX6) * 1.5;
        megaslider.scrollLeft6 = scrollLeft - walk;
    });

    // ========== Month 드롭다운 ==========
    const monthList = document.getElementById('monthList');
    const selectedMonth = document.getElementById('selectedOption');
    const monthOptions = monthList.querySelectorAll('.option');

    selectedMonth.addEventListener('click', function (e) {
        e.stopPropagation();
        monthList.classList.toggle('open');
    });

    monthOptions.forEach((option, index) => {
        if (index === 0) return;
        option.addEventListener('click', function () {
            selectedMonth.textContent = this.textContent;
            monthList.classList.remove('open');
        });
    });

    // ========== Category 드롭다운 ==========
    const categoryList = document.getElementById('categoryList');
    const selectedCategory = document.getElementById('selectedCategory');
    const categoryOptions = categoryList.querySelectorAll('.option');

    selectedCategory.addEventListener('click', function (e) {
        e.stopPropagation();
        categoryList.classList.toggle('open');
    });

    categoryOptions.forEach((option, index) => {
        if (index === 0) return;
        option.addEventListener('click', function () {
            selectedCategory.textContent = this.textContent;
            categoryList.classList.remove('open');
        });
    });
    document.addEventListener('click', function (e) {
        // 드롭다운 닫기
        const monthList = document.querySelector('.monthList');
        const categoryList = document.querySelector('.categoryList');

        if (monthList && !monthList.contains(e.target)) {
            monthList.classList.remove('open');
        }

        if (categoryList && !categoryList.contains(e.target)) {
            categoryList.classList.remove('open');
        }
    });

});