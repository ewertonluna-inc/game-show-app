/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;

const keys = document.getElementsByClassName('key');
    
for (let key of keys){
    // Handles onscreen keyboard functionality
    key.addEventListener('click', function(event){
        game.handleInteraction(event);
    });
}

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    
    game.startGame();
});

// Handles phisical keyboard functionality
document.addEventListener('keydown', function(event){
    game.handleKeyboarInteraction(event);
});



 