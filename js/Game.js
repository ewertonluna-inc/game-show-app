/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Displays the board and starts the game. */
    startGame(){
        this.resetGame();
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Gets random phrase from phrases
     * @returns {Phrase} phrase object */
    getRandomPhrase(){
        const index = Math.floor(Math.random() * 1);
        return this.phrases[index];
    }

    /**
     * Handles player interaction with onscreen keyboard
     * @param {Object} event event object */
    handleInteraction(event){
        const button = event.target;
        const letter = button.textContent;
        const isMatch = this.activePhrase.checkLetter(letter);
        button.disabled = true;
        
        if (isMatch){
            button.className += " " + "chosen";
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()){
                this.gameOver("You Win!");
            }
        } else {
            button.className += " " + "wrong";
            this.removeLife();
        }
    }

    /**
     * Handles player interaction with phisical keyboard
     * @param {Object} event event object */
    handleKeyboarInteraction(event){
        let button;
        const keys = document.getElementsByClassName("key");
        const letter = event.key;
        const isMatch = this.activePhrase.checkLetter(letter);
        
        // sets button to the .key element related to the key pressed on the keyboard
        for (let key of keys){
            if (key.textContent == event.key){
                button = key;
            }
        }

        // if player presses a valid key button, the modifications on the game happens
        // otherwise button stays undefined and nothing happens to the game
        if (button && !button.disabled){
            button.disabled = true;
            
            if (isMatch){
                button.className += " " + "chosen";
                this.activePhrase.showMatchedLetter(letter);
                
                if(this.checkForWin()){
                    this.gameOver("You Win!");
                }
            } else {
                button.className += " " + "wrong";
                this.removeLife();
            }
        }   
    }

    /**
     * Increases number of missed plays and removes a heart */
    removeLife(){
        const hearts = document.querySelectorAll('#scoreboard img');
        
        for (let img of hearts){
            if (img.src.includes("liveHeart.png")){
                img.src = 'images/lostHeart.png';
                break;
            }
        }
        this.missed += 1;
        
        if (this.missed >= 5){
            this.gameOver('You lost!');
        }
    }

    /**
     * Cheks if player won the game
     * @returns {boolean}  true if all phrase letters are shown and false otherwise. */
    checkForWin(){
        const phraseDiv = document.getElementById('phrase');
        const keys = phraseDiv.querySelectorAll('li');

        for (let key of keys){
            let keyClassName = key.className;
            
            if (keyClassName !== 'space'){
                if (keyClassName.includes('hide')){
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Creates five phrase objects
     * @return {Array}    An array of five phrase objects */
    createPhrases(){
        const result = [];
        const phrases = [
            // "Programming is awesome",
            // "The world is not flat", 
            // "Steph Curry is a sniper",
            // "Neymar falls a lot",
            // "Random phrase",
            "Tatiana",
        ];
        
        for (let phrase of phrases){
            result.push(new Phrase(phrase));
        }
        return result;
    }

    /**
     * Displays game over message overlaying the board 
     * @param {String} message - Message to be displayed when game is over */
    gameOver(message){
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'block';
        document.getElementById('game-over-message').textContent = message;
        
        if (this.missed >= 5){
            // Creating elements to display the phrase that the player didn't guess
            const phrase = this.activePhrase.phrase;
            const losingMessage = document.createElement('h1');
            const span = document.createElement('span');
            
            // Setting properties of those elements
            losingMessage.id = "additional-message";
            losingMessage.textContent = "The phrase was ";
            span.textContent = `"${phrase}"`;
            
            //Placing the elements into the DOM
            losingMessage.appendChild(span);
            document.getElementById('overlay').appendChild(losingMessage);
            
            overlayDiv.className = 'lose';
        } else {
            overlayDiv.className = 'win';
        }
    }

    /**
     * Resets game to initial state.
     * Removes phrase from DOM, resets keyboard styles and liveHeart
     * images.
     */
    resetGame(){
        $('#phrase ul').children().remove();
        $("#additional-message").remove();
        $('.chosen').attr('class', 'key');
        $('.wrong').attr('class', 'key');
        $('.key').prop('disabled', false);
        $('.tries img').attr('src', 'images/liveHeart.png');
    }

 }