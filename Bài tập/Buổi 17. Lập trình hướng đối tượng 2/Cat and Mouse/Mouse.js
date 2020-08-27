function Mouse(name, weight, speed){
    this.name=name;
    this.weight=weight;
    this.speed=speed;
    this.status=true;
    this.makeNoise= function (){
        document.write("Chút chít chụt chịt");
    }
}