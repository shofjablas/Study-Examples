// 출력 : 37 + 56 = 110 홀수 입니다.
// 두 숫자간 덧셈이 홀수라면 _ + _ = _는 홀수 입니다. 출력
// 두 숫자간 덧셈이 짝수라면 _ + _ = _는 짝수 입니다. 출력 ㅠㅏ

function case1() {
  let number1 = 3;
  let number2 = 5;
  let numberSum = number1 + number2;

  if (numberSum % 2 == 1) {
    console.log(`${number1} + ${number2} = ${numberSum}는 홀수입니다.`);
  } else {
    console.log(`${number1} + ${number2} = ${numberSum}는 짝수입니다.`);
  }

  // 함수는 호출할 때 괄호를 이용한다. ex함수명()
  // 변순는 변수 이름만 쓴다.

  let number3 = 51;
  let number4 = 83;
  let numberSum1 = number3 + number4;

  if (numberSum1 % 2 == 1) {
    console.log(`${number3} + ${number4} = ${numberSum1}는 홀수입니다.`);
  } else {
    console.log(`${number3} + ${number4} = ${numberSum1}는 짝수입니다.`);
  }
}

function case2() {
  let number5 = 2875689;
  let number6 = 36789426;
  let numberSum2 = number5 + number6;

  if (numberSum2 % 2 == 1) {
    console.log(`${number5} + ${number6} = ${numberSum2}는 홀수입니다.`);
  } else {
    console.log(`${number5} + ${number6} = ${numberSum2}는 짝수입니다.`);
  }
}

/* 함수를 상용하는 이유: 
  반복되는 기능들 편리하게 사용하기 위해서 공통되는 부분들을 함수로 묶는다.*/
