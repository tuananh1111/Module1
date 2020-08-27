function Cat(name, weight, maxSpeed){
    this.name= name;
    this.weight= weight;
    this.maxSpeed= maxSpeed;
    this.makeNoise= function (){
        document.write("Mèo méo meo mèo meo");
    }
    this.catchMouse= function (mouse){
        if(this.maxSpeed>mouse.speed){
            document.write("Bắt được em rồi");
            this.eatMouse(mouse);
        }
    }
    this.eatMouse=function (mouse){
        if (mouse.status){
            this.weight+=mouse.weight;
            mouse.status=false;
            mouse.weight= 0;
        }
    }
}