type SumParameter = number;

function sum(a: SumParameter, b: SumParameter) {
  return a + b;
}

// #2
type Person = {
  name: string;
  age: number;
};

function getPerson(): Person {
  // ...
}

// #3
type Hero = {
  skill: string;
};

const capt: Hero = {
  // skill: 'throwing a shield'
};
