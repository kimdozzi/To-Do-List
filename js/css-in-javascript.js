// const h1 = document.querySelector("div.hello:first-child h1");

// // 방법4. 최고의 방법 -> toggle
// function handleTitleClick() {
//   // toggle은 h1의 classList에 clicked class가 이미 있는지
//   // 확인해서 만약 있다면 toggle이 clicked를 제거해준다.
//   // 없다면 clicked를 추가해준다.
//   h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);

// // 방법3. className 대신 classList를 쓰자.
// function handleTitleClick() {
//   const clickedClass = "clicked";

//   if (h1.classList(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// // 방법2. JS스러운 방법
// function handleTitleClick() {
//   const clickedClass = "clicked sexy-font";

//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }

// h1.addEventListener("click", handleTitleClick);

// // 방법 1. css를 사용한 방법
// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   h1.style.color = "blue";
// }

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here";
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// title.onclick = handleTitleClick;
// h1.addEventListener("click", handleTitleClick);

// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
