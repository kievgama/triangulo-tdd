function Triangulo(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  
  Triangulo.prototype.toString = function () {
    return `Lado A: ${this.a}, Lado B: ${this.b}, Lado C: ${this.c}`
  };
  
  
  module.exports = Triangulo;


  