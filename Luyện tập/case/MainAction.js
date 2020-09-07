let bird;

let background;
let  colums=[];
function StartGame(){
    bird=new Bird(60,60,"icon.png",10,400,"image");
    background=new Background(1000,750,"bg.gif",0,0,"background");
    GameArea.start();
}
function updateGameArea(){
    let x,y;
    for(let i=0;i<colums.length;i++){
        if (bird.crashWith(colums[i])){
            GameArea.stop();
            document.getElementById('gameover').innerHTML= "GAME OVER";
            return;
        }
    }
    if (bird.crashCanvas()){
        return true;
    }
    GameArea.clear();
    background.newPos();
    background.update();
    GameArea.frameNo+=1;


    if(GameArea.frameNo == 1 || everyInterval(120)){
        x=GameArea.canvas.width;
        y=GameArea.canvas.height;
        let minHeight =100;
        let maxHeight= 600;
        let height= Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        let gap=150;
        colums.push(new Colums(60,height,"pipe-green-rotator.png" ,x,0,"colums"));
        colums.push(new Colums(60,y-height-gap,"pipe-up.png" ,x,height+gap,"colums"));

    }

    for (let i=0; i<colums.length;i++){
        colums[i].speedX=-5;
        colums[i].newPos();
        colums[i].update();
    }
    bird.speedX = 0;
    bird.speedY = 0;
    bird.moveBird();
    bird.newPos();
    bird.update();

}
function everyInterval(n){
    if((GameArea.frameNo / n) % 1 == 0){
        return true;
    }
    return false;
}