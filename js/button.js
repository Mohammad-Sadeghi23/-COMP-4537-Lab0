export class Button{

    constructor(){

        // Add event listener to the button
        this.button = document.getElementById("submitButton")
        this.button.addEventListener("click", Button.startGame);
    }

    // Static method to start the game
    static startGame(){
        console.log("Game Started");

        let buttons = [];

        const numberOfButtons = parseInt(document.getElementById("numberInput").value);

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

        Button.placeButtonsInRow(buttons);
    }

    // create a button with a random color
    static createButton(id){
        const btn = document.createElement("button");
        btn.id = `btn-${id}`;
        btn.innerText = `${id}`;
        btn.disabled = true;
        btn.style.width = "10em";
        btn.style.height = "5em";
        btn.style.margin = "0.2em";
        btn.style.backgroundColor = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;

        return btn;
    }

    // place buttons next to each other in same row
    static placeButtonsInRow(buttons){
        const container = document.createElement("div");
        container.id = "buttonContainer";
        buttons.forEach(button => {
            container.appendChild(button);
        }
        );
        document.body.appendChild(container);
    }

    // Static method to get a random color value
    static getRandomColor(){
        return Math.floor(Math.random() * 255)
    }

    // scramble the position of the buttons
    static scrambleButtons(){
        const container = document.getElementById("buttonContainer");
        for (let i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0]);
        }
    }

    // enable all buttons
    static enableButtons(){
        const container = document.getElementById("buttonContainer");
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].disabled = false;
        }
    }

    // wait time interval
    static wait(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}