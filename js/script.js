import { UserInterface } from "./userInterface.js";
import { Button } from "./button.js";
import { STRINGS } from "../lang/messages/en/strings.js";

new UserInterface();

export class Script {

  constructor() {
    // Add event listener to the button
    this.submitBtn = document.getElementById("submitButton");
    this.submitBtn.addEventListener("click", () => this.startGame());
  }

  // Static method to start the game
  async startGame() {

    // Clear previous messages
    const msg = document.getElementById("msg");
    msg.innerText = "";

    const n = Number(document.getElementById("numberInput").value);

    // Validate input
    if (Number.isNaN(n)) {
      msg.innerText = STRINGS.ERROR_NOT_NUMBER;
      return;
    }
    if (n < 3 || n > 7) {
      msg.innerText = STRINGS.ERROR_RANGE;
      return;
    }

    const width = "10em";
    const height = "5em";

    // Create buttons
    const buttons = [];
    for (let i = 1; i <= n; i++) {
      const color = Button.randomRgb();
      buttons.push(new Button(i, color, width, height));
    }

    // Mount buttons to UI
    const container = UserInterface.mountButtons(buttons);

    // Not clickable until scrambling finishes
    UserInterface.disableButtons(container);

    // Pause n seconds
    await UserInterface.wait(n * 1000);

    // Scramble n times, 2 seconds apart
    for (let i = 0; i < n; i++) {
      UserInterface.scrambleUIButtons(container);
      await UserInterface.wait(2000);
    }

    // Hide numbers, enable clicking
    UserInterface.hideNumbers(container);
    UserInterface.enableButtons(container);

    // (Next step) add memory checking here
  }
}

new Script();
