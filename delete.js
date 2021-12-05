document.getElementById('name').innerHTML = 'hi';




//1부터 100까지의 합
let sum = 0;
for (let i = 1; i < 101; i++) {
  sum += i;
};
console.log(sum);

//1부터 100까지의 짝수의 합

let sum = 0;
for (let i = 2; i < 101; i += 2) {
  sum += i;
};
console.log(sum);


//구구단 출력하기
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++){
    console.log(`${i} x ${j} = ${i*j}`);
  };
};

//1부터 10000까지 8이라는 숫자게 총 몇번 나오는지 세보기
let count = '';
let result = 0;

for (let i = 1; i < 10001; i++) {
  count += i.toString();
};
count.split('');
for(let j = 0; j < count.length; j++) {
  if (count[j] == '8') {
    result += 1;
  }
}
console.log(result);

//엄청 긴 숫자가 나옵니다 그러면 그걸 하나씩
// 짤라가지구 배열을 만든담에 하나씩 8이 맞으면
//카운트에다가 더해주는 걸로 합시다.


//배열의 최대값 구하기
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let start = sample[0];

for (let i = 0; i < sample.length; i++) {
  if(start > sample[i]) {
    start = sample[i];
  };
}
console.log(start);

//문자 추출하기

//javascript에서 두글자씩 추출하기

let text = 'javascript';

for(let i = 0; i < text.length-1; i++) {
  console.log(text[i], text[i+1]);
}


const sum = function(a, b) {
  return a + b
}

const sum = (a, b) => {a, b}


//연습문제 2번
let arr = '5, 4, 10, 2, 5';
let sum = 0;
let splitA = arr.split(',');

for (let i of splitA) {
  sum += arr[i];
}
console.log(sum/arr.length);



