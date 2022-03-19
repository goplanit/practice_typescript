// 맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미합니다.
// 마치 자바스크립트 map() API 함수를 타입에 적용한 것과 같은 효과를 가집니다.

// mapped types
type Heroes = 'Hulk' | 'Thor' | 'Capt';
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
  Hulk: 33,
  Thor: 100,
  Capt: 1000,
};

type HeroAgesUpdate = {
  [p in keyof Heroes]?: Heroes[p];
};
