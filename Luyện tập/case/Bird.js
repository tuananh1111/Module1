function Bird(width, height,color, x,y, type) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.type = function () {
        if (type == "image") {
            this.context = new Image();
            this.context.src = color;
        }
    }
    this.update = function () {
        let ctx = GameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.crashWith = function (otherobject) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobject.x;
        let otherright = otherobject.x + (otherobject.width);
        let othertop = otherobject.y;
        let otherbottom = otherobject.y + (otherobject.height);
        let crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
    this.crashCanvas = function () {
        let myleft = this.x;
        let myright = this.x + this.width;
        let mytop = this.y;
        let mybottom = this.y + this.height;
        if (myleft < 0) {
            this.x = 0
        }
        if (mytop < 0) {
            this.y = 0
        }
        if (mybottom > GameArea.canvas.height) {
            mybottom = GameArea.canvas.height
        }
        if (myright > GameArea.canvas.width) {
            myright = GameArea.canvas.width
        }
    }
    this.moveBird= function (){

        if (GameArea.keys && GameArea.keys[37]) {
            bird.speedX = -5;
        }
        if (GameArea.keys && GameArea.keys[39]) {
            bird.speedX = 5;
        }
        if (GameArea.keys && GameArea.keys[38]) {
            bird.speedY = -5;
        }
        if (GameArea.keys && GameArea.keys[40]) {
            bird.speedY = 5;
        }

    }
}