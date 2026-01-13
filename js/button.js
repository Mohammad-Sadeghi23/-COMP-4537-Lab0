export class Button {
  constructor(id, color, width, height) {
    this.id = id;
    this.color = color;
    this.width = width;
    this.height = height;

    // DOM element created here
    this.el = document.createElement("button");
    this.el.id = `btn-${id}`;
    this.el.dataset.order = String(id);
    this.el.innerText = String(id);
    this.el.disabled = true;

    // Apply styles from constructor values
    this.el.style.width = width;
    this.el.style.height = height;
    this.el.style.margin = "0.2em";
    this.el.style.backgroundColor = color;
  }

  // methods to manipulate button state
  disable() { this.el.disabled = true; }
  enable() { this.el.disabled = false; }

  // methods to manipulate button display
  hideNumber() { this.el.innerText = ""; }
  showNumber() { this.el.innerText = String(this.id); }

  static getRandomColorValue() {
    return Math.floor(Math.random() * 256);
  }

  static randomRgb() {
    const r = this.getRandomColorValue();
    const g = this.getRandomColorValue();
    const b = this.getRandomColorValue();
    return `rgb(${r}, ${g}, ${b})`;
  }
}
