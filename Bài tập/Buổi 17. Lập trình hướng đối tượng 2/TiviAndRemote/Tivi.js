function Tivi(remote){
    this.remote=remote;
    this.status=false;
    this.nowChanel= function (){
        Tivi.status=true;
        document.write(" Kênh đang phát là kênh 0 ");
    };
    this.nowVolume=function (){
        Tivi.status=true;
        document.write(" Âm lượng đang là 1 ");
    };

    this.changeChanel=function (Remote){
        Tivi.status=true;
        Remote.controlChanel();
    };
    this.changVolume= function (Remote){
        Tivi.status=true;
        Remote.controlVolume();
    }
}