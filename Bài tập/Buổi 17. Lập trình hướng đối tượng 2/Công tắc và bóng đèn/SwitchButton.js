function SwitchButton(status){
    this.status=status;
    this.connectToLamp= function (ElectricLamp){
        return ElectricLamp.status = document.write("Đã kết nối với bóng đèn"+"<br>");
    };
    this.switchOff= function (ElectricLamp){
        return ElectricLamp.turnOff();
    }
    this.switchOn= function (ElectricLamp){
        return ElectricLamp.turnOn();
    }
}