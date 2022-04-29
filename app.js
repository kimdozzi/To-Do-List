// boolean => true or false
// When we use boolean ?
// ex: 로그인이 되어있는가? 웹사이트가 로딩되고 있는가?
// true와 false는 값이 존재한다.
const amIFat = false;
console.log(amIFat);

// something이라는 변수를 만들었지만 값을 주지 않았다. => undefined (즉, value가 정의되지 않음)
// 메모리 안에 공간은 있지만 값이 들어가있지 않은 상태
// 기억해야 할 것은 null은 절대 자연적으로 발생하지 않는다.
// null은 우리가 변수 안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것임
let something;
const x = null;
console.log(something);

// Array
const dayOfweek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(dayOfweek);
dayOfweek.push("sun");
console.log(dayOfweek);

const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

const player = {
  name: "nico",
  points: 121212,
  handsome: true,
  fat: "little bit",
};
console.log(player);
player.lastName = "potato";
console.log(player);

const play = {
  name: "dohyung",
  sayHello: function (otherPersonName) {
    console.log("hello, " + otherPersonName);
    console.log(`hello, ${otherPersonName}`);
  },
};

console.log(play.name);
play.sayHello("lynn");
