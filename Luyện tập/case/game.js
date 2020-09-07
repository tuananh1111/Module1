function GameArea(){
    this.canvas= document.createElement("canvas");
    this.start= function () {
        this.canvas.width = 1000;
        this.canvas.height = 750;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);

        window.addEventListener('keydown', function (e) {
            GameArea.keys = (GameArea.keys || []);
            GameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            GameArea.keys = (GameArea.keys || []);
            GameArea.keys[e.keyCode] = false;
        })
    }
    this.clear=function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.stop=function (){
        clearInterval(this.interval);
    }
}

