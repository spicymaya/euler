fib_array = [1, 2, 3, 5, 8, 13, 21];
even_fib = [];
for (i = 7; i < 60; i++) {
  fib_array[i] = fib_array[i - 2] + fib_array[i - 1];
  if (fib_array[i] >= 4000000) {
    break;
  }
  fib_array.push(fib_array[i]);
}
// console.log(fib_array);
fib_array.splice(-1, 1);
// console.log(fib_array);

for (j = 0; j < fib_array.length; j++) {
  if (fib_array[j] % 2 == 0) {
    // console.log(fib_array[j]);
    even_fib.push(fib_array[j]);
  }
}

function myReduce(array) {
  let sum;
  for (var k = 0; k < array.length; k++) {
    sum += array[k];
  }
  console.log(sum);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(even_fib.reduce(reducer));
myReduce(even_fib);
