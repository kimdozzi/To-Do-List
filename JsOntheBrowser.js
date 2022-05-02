function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!!!!!!!!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS");
}
function handleWindowOnline() {
  alert("ALL GOOOOOOOD");
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// getElementByTagName에서 Tag는 anchor, div, section, button 같은 것들을 의미한다.
// querySelector는 CSS selector를 사용하여 검색할 수 있음
const title = document.getElementsByClassName("hello");
const title = document.querySelectorAll(".hello h1");
const title = document.querySelector("div.hello:first-child h1");
console.log(title);

// 이벤트를 다루는 예시(3가지 방법)
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // 1번
  // JS에 css를 직접 추가하는 방식은 좋지 않음!
  // const currentColor = h1.style.color;
  // let newColor;
  // if (currentColor === "blue") {
  //   newColor = "yellowgreen";
  // } else {
  //   newColor = "blue";
  // }
  // h1.style.color = newColor;

  //2번
  //   const clickedClass = "active";
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }

  //3번
  // toggle은 h1의 classList에 active class가 이미 있는지 확인해서
  // 만약 있다면, toggle이 active를 제거한다.
  // 없다면, toggle이 active를 classList에 추가해준다.
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
