// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 사용하는 경우
const seho: User = { name: 'hi', age: 100 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user);
}
getUser(seho);

// 함수의 전체 타입에 사용하는 경우
interface SumFunction {
  (a: number, b: number): number;
}
let sums: SumFunction;
sums = function (num1: number, num2: number): number {
  return num1 + num2;
};

// 배열의 인덱싱에 사용하는 경우
interface StringArray {
  [index: number]: string;
}
let arrs: StringArray;
arrs[0] = 'hi';
arrs[1] = '10';

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let objs: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/m,
};

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
interface Persons {
  name: string;
  age: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}

//Persons 상속받아 사용
interface Develop extends Persons {
  language: string;
}
const joo: Develop = { name: 'joo', age: 20, language: 'ts' };
