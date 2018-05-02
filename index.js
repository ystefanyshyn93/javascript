
var a;
a = prompt('Введіть значення а', '');
var b;
b = prompt('Введіть значення b', '');
var c;
c = prompt('Введіть значення c', '');

function solution (a, b, c) {
    var d = b*b - 4*a*c;
    var x1 =  (-b + Math.sqrt(d))/(2*a);
    var x2 = (-b - Math.sqrt(d))/(2*a);
    
    if (d < 0) {
        return  'Рівняння дійсних коренів немає.';
    }
    if (d == 0) {
        return   ((-b)/(2*a));
    }
    if (d > 0) {
       return 'x1=' + x1 + '<br>' + 'x2='+ x2;
    }
}

document.write(solution (a,b,c));
