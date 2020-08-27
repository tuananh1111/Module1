function Mobile(name){
    this.name=name;
    this.power = 100;
    this.memory= "";
    this.saveSms= "";
    this.saveSmsSent="";
    this.status= false;
    this.checkPower= function (){
        if (this.power<15){
            this.plug;
        }
    }
    this.plug=function (){
        this.power=100;
    }
    this.checkStatus= function (){
        if (!this.status){
            this.status=true;
        }
    }
    this.typingMess= function (){
        this.checkStatus();
        this.memory=prompt("Nhắn tin");
        this.decreasePower();
    }
    this.decreasePower= function (){
        this.power-=15;
    }
    this.receiveSms= function (mobi,saveSms){
        if(this.alert){
            this.checkStatus();
            this.alert=false;
            alert(this.saveSms);
            this.decreasePower();
        }
    }
    this.sendSms=function (mobi, memory){
        this.checkStatus();
        if (this.memory!=""){
            mobi.alert=true;
            mobi.saveSms=this.memory;
            this.sendSms=this.memory;
            this.memory="";
        }
    }
}