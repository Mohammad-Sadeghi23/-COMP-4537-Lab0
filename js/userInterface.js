import { STRINGS } from "../lang/messages/en/strings.js";

export class UserInterface {
    constructor(rootElement) {
        this.root = rootElement;

        document.title = STRINGS.TITLE;

        document.getElementById("numberLabel").innerText = STRINGS.BUTTON_LABEL;
        document.getElementById("submitButton").innerText = STRINGS.BTN_START;
    }

}