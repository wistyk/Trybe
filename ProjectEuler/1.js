let numbers = [1000];
let result = 0
for(let i = 0; i < 1000; i++) {
  numbers -= 1
  if(numbers %3 === 0 || numbers %5 === 0) {
    result += numbers
  }
}

console.log(result)