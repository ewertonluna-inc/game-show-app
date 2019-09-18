/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Renders and displays HTML phrase placeholders */
    addPhraseToDisplay(){
        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.firstElementChild;
        
        for (let character of this.phrase){
            const li = document.createElement('li');
            
            if (character === ' '){
                li.className = "space";
            } else{
                li.className = "hide letter " + character;
            }
            li.textContent = character;
            phraseUl.appendChild(li);
        }
    }

    /**
     * Checks if player selected letter matches the phrase
     * @param {String} letter - letter selected by the player */
     checkLetter(letter){
        return this.phrase.includes(letter.toLowerCase());
    }

    /**
     * Displays HTML matched letter(s) if there's at least one.
     * @param {String} letter - letter selected by the player */
    showMatchedLetter(letter){
        const matchedElements = document.getElementsByClassName(letter);
        
        for (let element of matchedElements){
            element.className.replace(/hide/, 'show');
        }
    }

 }