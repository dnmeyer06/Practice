var arr = [1,2,4,0];

isarray = function(input) {
  if (toString.call(input) === '[arr]')
    return true;
  return false;
};

console.log(isarray('w3resource'));
console.log(isarray([1,2,4,0]));
