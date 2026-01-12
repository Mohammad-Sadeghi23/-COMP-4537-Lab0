export class Button{

    constructor(){
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

        return container;
    }

    // Static method to get a random color value
    static getRandomColor(){
        return Math.floor(Math.random() * 255)
    }
}