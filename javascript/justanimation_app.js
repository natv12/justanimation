//No se modifica
var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');

var ASSET_MANAGER = new AssetManager();

var justanimation;
var animacion;
//No se modifica


//DATOS DE LA IMAGEN
//Cambiar los siguientes parametros para la definición de la animación
var imagen = './imagenes/vaca_disparo.png'; //CAMBIAR POR LA DIRECCIÓN DE TU IMAGEN

var ancho = 200; //Cambiar por el ancho de cada frame
var duracion = 200; //Cambiar por la duracion de cada frame en milisegundos
var loop = true; //Especifica si debe loopear la animación
//DATOS DE LA IMAGEN

//PARÁMETROS DE POSICIÓN
//Cambiar los parámetros de donde se dibujara
var x = 400; //Posición X del canvas en la cual se dibujará la animación. Default 400
var y = 225; //Posición Y del canvas en la cual se dibujará la animación. Default 225
var scale = 1; //Scaling de la animacion
//PARÁMETROS DE POSICIÓN

//No se modifica
ASSET_MANAGER.queueDownload(imagen); //Añade imágenes al queue
	
ASSET_MANAGER.downloadAll(function() {
	justanimation = new Juego(ctx);	
	animacion = new Animation(ASSET_MANAGER.getAsset(imagen), ancho, duracion, loop);
	justanimation.addAnimacion(animacion, x, y, scale);
	justanimation.iniciar();
});
//No se modifica
