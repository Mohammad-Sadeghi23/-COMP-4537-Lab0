import { UserInterface } from "./userInterface.js";
import { Button } from "./button.js";

const ui = new UserInterface();
const button = new Button();

export class Script {
  constructor() {

    // Add event listener to the button
    this.button = document.getElementById("submitButton");
    this.button.addEventListener("click", Script.startGame);

  }

  // Static method to start the game
  static startGame() {
    console.log("Game Started");

    let buttons = [];

    const numberOfButtons = parseInt(
      document.getElementById("numberInput").value
    );

    // check if the buttonContainer exists, if so remove it
    const existingContainer = document.getElementById("buttonContainer");

    if (existingContainer) {
      existingContainer.remove();
      console.log("Existing buttons removed");
    }

    for (let i = 1; i <= numberOfButtons; i++) {
      const button = Button.createButton(i);
      buttons.push(button);
    }

    const container = Button.placeButtonsInRow(buttons);

    // Add event listener to the button
    this.buttona = document.getElementById("a");
    this.buttona.addEventListener("click", () => UserInterface.scrambleUIButtons(container));


  }
}

new Script();
