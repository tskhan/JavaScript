var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
//           (2-1)-(1-1)+(0+1)+(1)
// --a; (2-1)=1
// --a - --b; 1-(1-1)=0
// --a - --b + ++b; 0+(0+1)=1
// --a - --b + ++b + b--; 1+1=2
// post decrease b = 1-1 = 0
document.write("a is " + a);
document.write("<br />");
document.write("b is " + b);
document.write("<br />");
document.write("Result is " + result);