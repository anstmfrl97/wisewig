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
            "video/M_video1.mp4",
            "video/M_video2.mp4",
            "video/M_video3.mp4"
        ];
    } else {
        // PC: 영상 6개
        videoList = [
            "video/video1.mp4",
            "video/video2.mp4",
            "video/video3.mp4",
            "video/video4.mp4",
            "video/video5.mp4",
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

    //갤러리이미지 슬라이드
    const gellaryPic = document.querySelector('gellaryPic');

    let isDown6 = false;
    let startX6;
    let scrollLeft6;

    gellaryPic.addEventListener('mousedown', (e) => {
        isDown6 = true;
        gellaryPic.classList.add('active');
        startX6 = e.pageX - gellaryPic.offsetLeft;
        scrollLeft6 = gellaryPic.scrollLeft;
    });

    gellaryPic.addEventListener('mouseleave', () => {
        isDown6 = false;
        gellaryPic.classList.remove('active');
    });

    gellaryPic.addEventListener('mouseup', () => {
        isDown6 = false;
        gellaryPic.classList.remove('active');
    });

    gellaryPic.addEventListener('mousemove', (e) => {
        if (!isDown6) return;
        e.preventDefault();
        const x = e.pageX - gellaryPic.offsetLeft;
        const walk = (x - startX6) * 1.5; // 속도 조절
        gellaryPic.scrollLeft6 = scrollLeft - walk;
    });

    // 터치 스크롤도 지원
    gellaryPic.addEventListener('touchstart', (e) => {
        startX6 = e.touches[0].pageX - gellaryPic.offsetLeft;
        scrollLeft6 = gellaryPic.scrollLeft;
    });

    gellaryPic.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - gellaryPic.offsetLeft;
        const walk = (x - startX6) * 1.5;
        gellaryPic.scrollLeft6 = scrollLeft - walk;
    });

});