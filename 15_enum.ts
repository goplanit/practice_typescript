// enum은 목록이 정해져있을 때 사용하면 좋은 형태의 타입

//숫자형 이넘
// enum Shoes {
//   Nike,
//   Adidas,
// }

// let myShoes = Shoes.Nike;
// console.log(myShoes);

// 문자형 이넘
enum Shoes {
  Nike = '나이키',
  Adidas = ' 아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes);

//예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}
askQuestion(Answer.Yes);
