function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray<T>(value: T): T {
  value.length; // X
  return value;
}

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

interface LengthType {
  length: number;
}

function logTexctLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTexctLength({ length: 10 });

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getShopingItemOption<T extends keyof ShoppingItems>(itemOption: T): T {
  if (itemOption === 'name' || itemOption === 'address') {
    console.log('itemOption type is string');
    return itemOption;
  }
  if (itemOption === 'price' || itemOption === 'stock') {
    console.log('itemOption type is number');
    return itemOption;
  }
}
getShopingItemOption('address');
getShopingItemOption('price');
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name
