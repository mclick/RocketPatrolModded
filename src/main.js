let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyD, keyA, keyW;

//highScore Tracker
let highScore = 0;

/* 
Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20) --> Finished (1 Hour)
    ->Display Time Remaining (10) -> Finished

Implement a simultaneous two-player mode (30) --> Finished (2 Hours)

Track a high score that persists across scenes and display it in the UI (5) -->Finished (10 Minutes)

Create a new scrolling tile sprite for the background (5) -->Finished (45 Minutes)

Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20) --> Finished (1.5 Hours)

Allow the player to control the Rocket after it's fired (5) --> Finished (5 Minutes)

Implement the 'FIRE' UI text from the original game (5) -->Finished (10 Minutes)

Create 4 new explosion SFX and randomize which one plays on impact (10)-->Finished (45 Minutes)

Total Planned: 100
Total Finished: 100


Total Time: 6.5 Hours

*/
