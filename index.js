
const a = parseFloat(prompt('Введіть значення а', ''));
const b = parseFloat(prompt('Введіть значення b', ''));
const c = parseFloat(prompt('Введіть значення c', ''));

function quadraticEquation (a, b, c) {
    const d = b*b - 4*a*c;
    const x1 =  (-b + Math.sqrt(d))/(2*a);
    const x2 = (-b - Math.sqrt(d))/(2*a);
    
    if (d < 0) {
        return  'Рівняння дійсних коренів немає.';
    }
     else if (d == 0) {
        return   (-b)/(2*a);
    }
       return 'x1=' + x1 + '<br>' + 'x2='+ x2;
}

document.write(quadraticEquation(a,b,c));
