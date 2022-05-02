let something; // something이라는 변수를 만들었지만 값을 주지 않았다. => undefined (즉, value가 정의되지 않음)
// 메모리 안에 공간은 있지만 값이 들어가있지 않은 상태

const x = null; // 기억해야 할 것은 null은 절대 자연적으로 발생하지 않는다.
// null은 우리가 변수 안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것임
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
  // const로 정의된 값은 변경 불가지만,
  // player 객체 내부의 프로퍼티는 삽입,수정,삭제 가능하다 !
  // 즉, player 자체를 변경하진 못한다.
  name: "nico",
  points: 121212,
  handsome: true,
  fat: "little bit",
};
console.log(player);
player.lastName = "potato"; // 프로퍼티 추가
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

const age = parseInt(prompt("how old are you?"));

if (isNaN(age)) {
  console.log("Please write a number.");
} else if (age < 18) {
  console.log("you are too young.");
} else {
  console.log("you can drink");
}
