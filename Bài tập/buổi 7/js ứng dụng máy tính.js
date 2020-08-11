function add() {
    let one = Number(document.getElementById('num1').value);
    let two = Number(document.getElementById('num2').value);
    let a = one + two ;

    document.getElementById('result').innerHTML= "Result Division" + a;

}
function sub() {
    let one = Number(document.getElementById('num1').value);
    let two = Number(document.getElementById('num2').value);
    let b = one - two ;

    document.getElementById('result').innerHTML= "Result Division" +b ;

}
function mul() {
    let one = Number(document.getElementById('num1').value);
    let two = Number(document.getElementById('num2').value);
    let c = one * two ;

    document.getElementById('result').innerHTML= "Result Division" + c;

}
function divi() {
    let one = Number(document.getElementById('num1').value);
    let two = Number(document.getElementById('num2').value);
    let d = one / two ;

    document.getElementById('result').innerHTML= "Result Division" + d;

}
