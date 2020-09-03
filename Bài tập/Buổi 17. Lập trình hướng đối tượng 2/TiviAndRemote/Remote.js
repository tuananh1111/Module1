function Remote(code){
    this.code=code;
    this.controlChanel=function (){
       Remote.upChanel= document.write(" +1 kênh ");
        Remote.dowChanel=document.write(" -1 kênh ");
    };
    this.controlVolume=function (){
      Remote.upVolume= document.write("Tăng 1 âm lượng");
      Remote.dowVolume= document.write("Giảm 1 âm lượng");
    };
    this.turnOff=true;
}