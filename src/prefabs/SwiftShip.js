class Swiftship extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture,frame,pointvalue){
        super(scene,x,y,texture,frame);
        scene.add.existing(this);
        this.points = pointvalue;
        this.movespeed = game.settings.spaceshipSpeed*2;
    }

    update(){
        this.x -= this.movespeed;
        if(this.x<=0-this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
    }
}