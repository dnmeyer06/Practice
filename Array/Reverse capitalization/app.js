str = 'The Quick Brown Fox';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for(var x=0; x<str.length; x++) {
    if(upper.indexOf(str[x]) !== -1) {
      result.push(str[x].toLowerCase());
    }
    else if (lower.indexOf(str[x]) !== -1) {
      result.push(str[x].toUpperCase());
    }
    else {
      result.push(str[x]);
    }
  }

console.log(result.join(''));
