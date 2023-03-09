class Ground {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true
    };

    this.w = w;
    this.h = h;
    //crear un cuerpo rectangular y agregarlo al mundo
    
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(148, 127, 146);
    //mostrar el cuerpo rectangular usando la función rect

    pop();
  }
}
