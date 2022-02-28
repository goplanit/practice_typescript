//타입 가드

interface Job {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Job | Person {
  return { name: 'leny', age: 33, skill: 'Iron Making' };
}

var leny = introduce();
// console.log(leny.skill); // skill에 대한 Job, Person interface에 모두 없어서 오류가 남

// 타입 단언
if ((leny as Job).skill) {
  var skill = (leny as Job).skill;
  console.log(skill);
} else if ((leny as Person).age) {
  var age = (leny as Person).age;
  console.log(age);
}

//타입 가드 정의
function isJob(target: Job | Person): target is Job {
  return (target as Job).skill !== undefined;
}

if (isJob(leny)) {
  console.log(leny.skill);
} else {
  console.log(leny.age);
}
