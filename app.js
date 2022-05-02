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
