var n

lastn = function(array, n) {
  if (array == null)
    return void 0;
  if (n == null)
    return array[array.length - 1];
  return array.slice(0, n);
};

console.log(lastn([7, 9, 0, -2]));
console.log(lastn([7, 9, 0, -2],0));
console.log(lastn([7, 9, 0, -2],1));
console.log(lastn([7, 9, 0, -2],2));
console.log(lastn([7, 9, 0, -2],3));
console.log(lastn([7, 9, 0, -2],4));
console.log(lastn([7, 9, 0, -2],5));
console.log(lastn([7, 9, 0, -2],6));
