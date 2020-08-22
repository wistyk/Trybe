const fibo = (value) => {
  let a = 1;
  let b = 0;
  let i = '';
  let sum = ''
  let result = ''

  while (value >= 0){
    i = a;
    a = a + b;
    b = i;
    sum += b %2 ===0 ? b + ',' : ''
    value--;
  }
  for (let i = 0; i < sum.length; i++) {
    console.log(i)
  }
  return sum;
}

console.log(fibo(33))

//somar os valores retornados para receber o resultado