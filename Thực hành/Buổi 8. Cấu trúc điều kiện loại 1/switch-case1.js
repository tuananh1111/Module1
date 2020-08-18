let browser = prompt('Nhập trình duyệt');
switch (browser){
    case 'Edge':
        alert('You have got the Edge!');
        break;
    case ('Chrome'):
    case ('Safari'):
    case ('Opera'):
    case ('Firefox'):
        alert('Okey we support these browsers too');
        break;
    default:
        alert('We hope that this page looks at!');
}
