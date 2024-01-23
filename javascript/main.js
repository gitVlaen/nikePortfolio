// Navigation의 이벤트
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    let primaryEl = document.getElementById("primary");

    if (currentScrollPos === 0) {
        primaryEl.style.top = "40px";
        primaryEl.style.position = "fixed";
        primaryEl.style.transition = "0s";
    } else if (prevScrollPos > currentScrollPos || currentScrollPos < 40) {
        primaryEl.style.top = "0px";
        primaryEl.style.position = "fixed";
        primaryEl.style.transition = "0.3s";
    } else {
        primaryEl.style.top = "-58px";
        primaryEl.style.transition = "0.3s";
    }
    prevScrollPos = currentScrollPos;
};

// 1024px 이하의 크기에서 햄버거 메뉴 클릭시 sidenavbar가 생성
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menuButton').addEventListener('click', function () {
        toggleNav();
    });

    function toggleNav() {
        var navbar = document.getElementById('sidenavbar');
        if (navbar.style.width === '250px') {
            navbar.style.width = '0';
        } else {
            navbar.style.width = '250px';
        }
    }

    function toggleSubMenu(subMenuId) {
        var subMenu = document.getElementById(subMenuId);
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
        } else {
            subMenu.style.display = 'block';
        }
    }
});

// Swiper를 이용한 슬라이드 이벤트1
document.addEventListener('DOMContentLoaded', function () {
    let initialSlides = 3;
    if (window.innerWidth <= 768) {
        initialSlides = 2;
    }
    if (window.innerWidth <= 480) {
        initialSlides = 1;
    }
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: initialSlides,
        freeMode: true,
        navigation: {
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button"
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
        }
    });
    // 화면 크기 변경 시 Swiper 갱신
    window.addEventListener('resize', function () {
        let updatedSlides = 3;
        if (window.innerWidth <= 768) {
            updatedSlides = 2;
        }
        if (window.innerWidth <= 480) {
            updatedSlides = 1;
        }
        swiper.params.slidesPerView = updatedSlides;
        swiper.update();
    });
});

// Swiper를 이용한 슬라이드 이벤트2
document.addEventListener('DOMContentLoaded', function () {
    let initialSlides = 3;
    if (window.innerWidth <= 768) {
        initialSlides = 2;
    }
    if (window.innerWidth <= 480) {
        initialSlides = 1;
    }
    const swiper = new Swiper('.swiper-container2', {
        slidesPerView: initialSlides,
        freeMode: true,
        navigation: {
            nextEl: ".custom-next-button2",
            prevEl: ".custom-prev-button2"
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
        }
    });
    // 화면 크기 변경 시 Swiper 갱신
    window.addEventListener('resize', function () {
        let updatedSlides = 3;
        if (window.innerWidth <= 768) {
            updatedSlides = 2;
        }
        if (window.innerWidth <= 480) {
            updatedSlides = 1;
        }
        swiper.params.slidesPerView = updatedSlides;
        swiper.update();
    });
});


// #item-lists 의 이벤트
document.addEventListener("DOMContentLoaded", function () {
    const itemlists = document.getElementById("item-lists");

    itemlists.addEventListener("mouseover", () => {
        if (window.innerWidth > 468) {
            itemlists.style.height = "500px";
        }
    });

    itemlists.addEventListener("mouseout", () => {
        if (window.innerWidth > 468) {
            itemlists.style.height = "250px";
        }
    });

    // 미디어 쿼리 추가
    const mediaQuery = window.matchMedia("(max-width: 468px)");

    function handleMediaQueryChange() {
        if (mediaQuery.matches) {
            // 뷰포트 폭이 468px 이하일 때
            itemlists.style.display = "none";
        } else {
            // 뷰포트 폭이 468px 초과일 때
            itemlists.style.display = "flex";
        }
    }

    // 페이지 로드 시 초기 체크
    handleMediaQueryChange();

    // 미디어 쿼리 변화 감지
    mediaQuery.addEventListener("change", handleMediaQueryChange);
});
