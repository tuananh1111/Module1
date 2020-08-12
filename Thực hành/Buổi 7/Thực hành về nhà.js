function sum() {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let c = a + b ;
    document.getElementById('result').innerHTML="Add = " + c ;
}
function sub() {
    let a =Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let d = a - b;
    document.getElementById('result').innerHTML= "Subtraction = " + d;
}
function mul() {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let e = a*b;
    document.getElementById('result').innerHTML= "multiple = " + e;
}
function divi() {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let e = a/b;
    document.getElementById('result').innerHTML= "Division = " + e;
}