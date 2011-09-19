var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');

var ASSET_MANAGER = new AssetManager();

var justanimation;
var animacion;

//Cambiar los siguientes parametros para la definicion de la animacion
var imagen = './imagenes/vaca_disparo.png'; //Esta es tu imagen
var ancho = 200; //Cambiar por el ancho de cada frame
var duracion = 200; //Cambiar por la duracion de cada frame en milisegundos
var loop = true; //Especifica si debe loopear la animacion

//Cambiar los parametros de donde se dibujara
var x = 400; //Posicion X del canvas en la cual se dibujara la animacion
var y = 225; //Posicion Y del canvas en la cual se dibujara la animacion
var scale = 1; //Scaling de la animacion

ASSET_MANAGER.queueDownload(imagen); //Añade imagenes al queue
	
ASSET_MANAGER.downloadAll(function() {
	justanimation = new Juego(ctx);	
	animacion = new Animation(ASSET_MANAGER.getAsset(imagen), ancho, duracion, loop);
	justanimation.addAnimacion(animacion, x, y, scale);
	justanimation.iniciar();
});
