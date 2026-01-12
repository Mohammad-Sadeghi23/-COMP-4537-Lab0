import { STRINGS } from "../lang/messages/en/strings.js";

export class UserInterface {


    constructor() {

        document.title = STRINGS.TITLE;

        document.getElementById("numberLabel").innerText = STRINGS.BUTTON_LABEL;
        document.getElementById("submitButton").innerText = STRINGS.BTN_START;
    }

    // scramble the buttons on the UI
    static scrambleUIButtons(container){

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.position = "absolute";
            container.children[i].style.left = Math.floor(Math.random() * (viewportWidth - container.children[i].offsetWidth)) + "px";
            container.children[i].style.top = Math.floor(Math.random() * (viewportHeight - container.children[i].offsetHeight)) + "px";
        }


    }
    
    // enable all buttons
    static enableButtons(){
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].disabled = false;
        }
    }

    // wait time interval
    static wait(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}