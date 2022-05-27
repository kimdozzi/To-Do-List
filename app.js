const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
// 아주 중요한 정보는 아님.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본적으로 브라우저에서 작동하는 것을 막아줌.
  loginForm.classList.add(HIDDEN_CLASSNAME); // classList의 이름이 hidden인 것을 loginForm 변수가 갖고있는 #login-form에 적용시킨다.
  const username = loginInput.value; // loginInput.value 즉, input에 적힌 text값을 username에 저장한다.
  localStorage.setItem(USERNAME_KEY, username); // localStorage라는 api를 통해 USERNAME_KEY변수에 있는 username 즉, db의 username이라는 key에  username의 value를 넣는다. (데이터삽입)
  paintGreetings(username); // paintGreetings함수에 parameter 전달.
}

function paintGreetings(username) {
  greeting.innerText = `hello ${username}`; // greeting이라는 id를 갖고있는 h1태그에 다음과 같은 text를 표시한다.
  greeting.classList.remove(HIDDEN_CLASSNAME); // greeting id에 적용된 hidden 클래스를 지운다.
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage에서 받아온 값을 savedUsername에 저장.

// savedUsername에 값의 유무에 따라 form 숨기거나 표시하거나 greetings 보여주거나 하는 작업 !!
if (savedUsername === null) {
  // show form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
