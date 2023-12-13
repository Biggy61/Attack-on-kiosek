

export class Background {
    
    constructor() {
        this.img = new Image();
        this.path = "./res/img/background.png";
        this.img.src = this.path;
        this.size = {
            width: 1280,
            height: 720
        };
        this.position = {
            x:0,
            y:0
        };
    }

    draw(ctx) {
      ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
    }
    
}