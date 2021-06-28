class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload(){
        this.load.audio('sfx_select', './assets/blip_select12.wav');
    }

    create(){

        //menu config
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '26px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(borderUISize + borderPadding, borderUISize,'HIGH SCORE', menuConfig);
        this.add.text(borderUISize + borderPadding, borderUISize*2 + borderPadding*2, highScore, menuConfig);
        //menu text
        this.add.text(game.config.width/2, game.config.height/2-borderUISize-borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'P1: Use <--> arrows to move & (\u2191) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2+borderPadding+borderUISize, 'P2: Use AD to move & (W) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2+ 2* borderUISize+ 2*borderPadding, 'Press <- for Novice and -> for Expert', menuConfig).setOrigin(0.5)

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }
}