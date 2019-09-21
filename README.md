# techdegree_project_4
Project 4 - OOP Game Show App 

In this project, I created a broswer-based, word guessing game called "Phrase Hunter". 
The game is created using JavaScript and Object Oriented Programming. 

The classes created to complete this project was Phrase and Game.
The app.js file is the bridge between the Javascript objects created and the DOM.

It is important to remember to reset the DOM to its starting state before running the actual game, every time the game starts, so 
duplicates are avoided. The reset() method deals with this. It uses jQuery so the targeting of the elements
becomes easier (jQuery is used ONLY in this method).

 In this project, my goal is to get the "Exceeds Expectations" grade.
 To reach this goal, besides building the basic workings of the game, I aimed
 on adding these 2 extra features:

 - Keyboard functionality
    - The game listens to the player keyboard presses.
    - A new method called handleKeyboarInteraction inside Game.js was created to handle the player phisical keyboard interactions.
    It ignores all invalid keyboard input and acts on the valid ones. It produces the same DOM changes as if the player had used the
    onscreen keyboard.

- Making the project my own
    - When the game is over, if the player loses the game, it will display what the phrase was.
    - This functionality is inside the gameOver method.

