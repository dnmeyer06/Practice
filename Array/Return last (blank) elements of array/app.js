lastn = function(array, n) {
  if (array == null)
    return void 0;
  if (n == null)
    return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
  // array.slice is a range (start, end)
  // math.max finds where to start, either in the array or at
  // the beggining based on if the input number is
  // more than the array length
  // http://www.w3resource.com/javascript-exercises/javascript-array-exercise-4.php
};

console.log(lastn([7, 9, 0, -2]));
console.log(lastn([7, 9, 0, -2],3));
console.log(lastn([7, 9, 0, -2],4));
console.log(lastn([7, 9, 0, -2],5));
console.log(lastn([7, 9, 0, -2],6));
