function Rectangle(x, y){
    this.x =x;
    this.y =y;
    this.getX= function (){
        return x;
    };
    this.getY= function (){
        return y;
    };

    this.getArea= function (){
        return x*y;
    };
    this.getCover= function (){
        return (x+y)*2;
    };
}

function TinhToan(){
    let a=+prompt("Nhập chiều dài vào đây:");
    let b=+prompt("Nhập chiều rộng vào đây:");
    let rectangle= new Rectangle(a,b);
    let area= rectangle.getArea();
    let cover= rectangle.getCover();
    document.getElementById("chuvi").innerHTML=cover;
    document.getElementById("dientich").innerHTML=area;
}
function CreatRetangle(){
    let ctx= document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#FF0000";
    ctx.fillRect(0,0,Rectangle.getX(),Rectangle.getY());

}
let check=new CreatRetangle();
let cal= new TinhToan();
document.write(cal);
document.write(check);