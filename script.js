// script.js
document.addEventListener("DOMContentLoaded", () => {
    const note = document.querySelector(".note");

    let isDragging = false;  // 드래그 중인지 여부를 확인하는 플래그
    let shiftX, shiftY;      // 클릭된 위치 저장용

    // mousedown: 메모장을 클릭하면 드래그를 시작
    note.addEventListener("mousedown", (e) => {
        isDragging = true;  // 드래그 시작
        shiftX = e.clientX - note.getBoundingClientRect().left;
        shiftY = e.clientY - note.getBoundingClientRect().top;

        // mousemove: 드래그 중일 때 메모장 위치 이동
        function moveAt(pageX, pageY) {
            note.style.left = pageX - shiftX + "px";
            note.style.top = pageY - shiftY + "px";
        }

        // 마우스를 움직일 때마다 메모장이 따라가도록
        function onMouseMove(event) {
            if (isDragging) {
                moveAt(event.pageX, event.pageY);
            }
        }

        // mousemove 이벤트 리스너 등록
        document.addEventListener("mousemove", onMouseMove);

        // mouseup: 마우스를 떼면 드래그 종료
        document.addEventListener("mouseup", () => {
            isDragging = false;  // 드래그 종료
            document.removeEventListener("mousemove", onMouseMove);  // 더 이상 move 이벤트를 받지 않음
        }, { once: true });
    });

    // 드래그를 방지하는 기본 드래그 이벤트 차단
    note.ondragstart = () => false;
});

function openPopup() {
    document.getElementById("popup").style.display = "block"; // 팝업 열기
}

function closePopup() {
    document.getElementById("popup").style.display = "none"; // 팝업 닫기
}

let lastScrollTop = 0;
const banner = document.querySelector('.bannerup');

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // 아래로 스크롤 시 배너 나타남
        banner.classList.add("active");
    } else if (scrollTop === 0) {
        // 맨 위로 가면 다시 숨김
        banner.classList.remove("active");
    }

    lastScrollTop = scrollTop;
});
