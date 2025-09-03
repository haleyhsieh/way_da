// index.html mobile menu

function openNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");


    sidenav.classList.add("open");
    overlay.classList.remove("hidden");

}

function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");

    sidenav.classList.remove("open");
    overlay.classList.add("hidden");
}

// 蒐藏公車路線愛心 

// const area = document.querySelector(".bus-line");

// area.addEventListener('click', filllove, false);

// function filllove(e) {
//     const target = e.target;

//     if (target.classList.contains("heart")) {
//         target.classList.toggle("fa-solid");         // 變成實心愛心
//         target.classList.toggle("fa-regular");       // 去除空心愛心
//         target.classList.toggle("text-red-400");     // 加紅色
//     }
// }


const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  // 使用 window.scrollY 檢查滾動距離
  if (window.scrollY > window.innerHeight) { 
    scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
    scrollBtn.classList.add('opacity-100');
  } else {
    scrollBtn.classList.add('opacity-0', 'pointer-events-none');
    scrollBtn.classList.remove('opacity-100');
  }
});

// 滾動到頂端
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 計算高度占滿一個螢幕

// function setFullHeight() {
//     const screenHeight = window.innerHeight;
//     document.getElementById("login").style.height = screenHeight + "px";
//     document.getElementById("consult").style.height = screenHeight + "px";
//   }

  // 頁面載入時設定
  // window.addEventListener("load", setFullHeight);
  // 視窗大小變動時重新計算
  // window.addEventListener("resize", setFullHeight);


  function setFullHeight() {
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;

  const login = document.getElementById("login");
  const consult = document.getElementById("consult");

  if (screenWidth >= 768) {
    // 桌面版才撐滿螢幕高度
    if (login) login.style.height = screenHeight + "px";
    if (consult) consult.style.height = screenHeight + "px";
  } else {
    // 手機版高度自適應
    if (login) login.style.height = "auto";
    if (consult) consult.style.height = "auto";
  }
}

window.addEventListener("load", setFullHeight);
window.addEventListener("resize", setFullHeight);
