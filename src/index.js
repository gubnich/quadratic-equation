module.exports = function solveEquation(equation) {
  var a;
  var b;
  var c;
  var flag = 1
  var temp = '';
  var x=[];
  for(var item of equation){
    if((parseFloat(item)+1 || item === '+' || item === '-') && flag){
      temp = temp + item;
    }
    else if(item === 'x'){
      if(a){
        b = temp;
        temp = '';
      }
      else{
        a = temp;
        temp = ''; 
      }
    }
    else if(item === '^'){
      flag = 0;
    }
    else{
      flag = 1;
    }
  }
  c = temp;
  d = b*b - 4*a*c;
  if(d > 0){
    if (a > 0){
      x[1] = Math.round(- b + Math.sqrt(d)) / (2*a);
      x[0] = Math.round(- b - Math.sqrt(d)) / (2*a);
    }
    else{
      x[0] = Math.round(- b + Math.sqrt(d)) / (2*a);
      x[1] = Math.round(- b - Math.sqrt(d)) / (2*a);
    }
  }
  x[0] = parseInt(x[0]);
  x[1] = parseInt(x[1]);

  return x;
}
