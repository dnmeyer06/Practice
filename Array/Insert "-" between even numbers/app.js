var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0)) {
      result.push('-',str[x]);          //push is used to insert object into array (in this case, "result")
    }
    else {
      result.push(str[x]);
    }
  }

console.log(result.join(''));
