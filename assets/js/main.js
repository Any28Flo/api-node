
var arregloPlanetas = [];

var	contador = 1;
function getJSON(url){
	return new Promise (function(resolve, error){
		
		var ajax = new XMLHttpRequest();
		ajax.open("GET", url);
		ajax.send();
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4){
				var response = JSON.parse(ajax.responseText);
				resolve(response);
				
			}
		}
	})
}

getJSON ("data/earth-like-results.json")
	.then(function(arreglo){
		arreglo.results.forEach(function(elemento){
			// console.log(elemento);
			arregloPlanetas.push( getJSON(elemento))			
			})
		arregloPlanetas.forEach(function(elemento){
			// console.log(elemento);
			elemento.then(function(planeta){
				imprimir(planeta);
				contador++;
				console.log(planeta);
			})
		})

		})
var imprimir = function(elemento){
	var nombre = elemento.pl_name;
	var descubrimiento = elemento.pl_disc;
	var telescopio = elemento.pl_telescope;
	creaTarjeta(nombre,descubrimiento,telescopio);


}
var creaTarjeta = function(nombre,descubrimiento,telescopio){
	 var contenedorPlanetas = document.getElementById("contenedor");
 	
	  var row = document.createElement("div");
	  var col_s12 = document.createElement("div");
	  var card=document.createElement("div");
	  var card_image= document.createElement("div");
	  var card__image_imagen = document.createElement("img");
	  var card__image_title = document.createElement("span");
	  var card_content= document.createElement("div");
	  var card_content_parrafo= document.createElement("p");

	  row.setAttribute("class","row");
	  col_s12.setAttribute("class","col s12 m6");
	  card.setAttribute("class","card");
	  card_image.setAttribute("class","card-image");
	  card__image_imagen.setAttribute("src","static/img/planeta"+contador+".jpg");
	  card__image_title.setAttribute("class","card-title");
	  card_content.setAttribute("class","card-content");

	  card__image_title.innerText = nombre ;
	  card_content_parrafo.innerText = ("Descubierto en : "+descubrimiento+" con el "+telescopio);
	  card_image.appendChild(card__image_imagen);
	  card_image.appendChild(card__image_title);
	  card_content.appendChild(card_content_parrafo)
	  card.appendChild(card_content);
	  card.appendChild(card_image);
	  card.appendChild(card_content);
	  col_s12.appendChild(card);
	  row.appendChild(col_s12);
	  contenedorPlanetas.appendChild(row);



}
		
	// 	return getJSON(mensaje.results[0])})
	// .then(function(resultado) {console.log(resultado.pl_name)})