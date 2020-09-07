function Background(width, height,color, x,y, type) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.type = function () {
        if (type == "background") {
            this.context = new Image();
            this.context.src = color;
        }
    }
    this.update = function () {
        let ctx = GameArea.context;
        if (type == "background") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
    this.newPos=function (){
            this.x+=this.speedX;
            this.y+=this.speedY;
    }
}