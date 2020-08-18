let inputVatly;
let inputHoa;
let inputSinh;
inputVatly = prompt('Nhập điểm môn Vật Lý');
inputHoa = prompt('Nhập điểm môn Hóa');
inputSinh = prompt('Nhập điểm môn Sinh');
let a = parseInt(inputVatly);
let b = parseInt(inputHoa);
let c = parseInt(inputSinh);
let s = (a + b +c)/3;
let r = (a +b +c);
document.write('Điểm trung bình 3 môn là ' + s);
document.write('<br>');
document.write('Điểm tổng 3 môn là ' + r);

