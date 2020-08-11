function hienlen() {
    let amount = document.getElementById('Amount').value;
    let from = document.getElementById('form').value;
    let to = document.getElementById('to').value;
    let gt = amount*from/to;
    document.getElementById('result').innerHTML = gt;
}
