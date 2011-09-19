//Shim que se encarga de solicitar el animationFrame del browser que estemos utilizando
//para optimizar la animacion del juego
window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
})();

function Juego(ctx) { //El controlador principal del juego
    this.ctx = ctx;
    this.ancho = ctx.canvas.width;
    this.alto = ctx.canvas.height;
    this.animaciones = []; //Arreglo de animaciones
    this.animacionesX = []; //Posicion X de las animaciones
    this.animacionesY = []; //Posicion Y de las animaciones
    this.animacionesScale = []; //Scale de las animaciones
	
    this.clock = new Clock();
    this.clockTick;
}

Juego.prototype.iniciar = function() { //Inicia el juego y el loop principal
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
};

Juego.prototype.addAnimacion = function(animacion, x, y, scale) {
	this.animaciones.push(animacion);
	this.animacionesX.push(x);
	this.animacionesY.push(y);
	this.animacionesScale.push(scale);
};

Juego.prototype.dibujar = function() {
    this.ctx.clearRect(0, 0, this.ancho, this.alto);
    this.ctx.save(); 
    for (var i = 0; i < this.animaciones.length; i++) {
        this.animaciones[i].drawFrame(this.clockTick, this.ctx, this.animacionesX[i],
										this.animacionesY[i], this.animacionesScale[i]);
    }
    this.ctx.restore();
};

Juego.prototype.loop = function() { //loop del juego que llama a los actualizar y dibujar de las entidades
    this.clockTick = this.clock.tick();
    this.dibujar();
};
