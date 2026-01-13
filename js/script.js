import { UserInterface } from "./userInterface.js";
import { GameManager } from "./gameManager.js";

// initialize UI and GameManager
const ui = new UserInterface();
new GameManager(ui);
