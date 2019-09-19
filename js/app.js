/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



document.getElementById('btn__reset').addEventListener('click', () => {
    const game = new Game();
    const keys = document.getElementsByClassName('key');
    
    game.startGame();
    
    for (let key of keys){
        key.addEventListener('click', function(event){
            game.handleInteraction(event);
        });
    

});




 