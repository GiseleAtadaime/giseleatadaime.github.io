
var head = document.querySelector(".header");
var elemento = document.getElementById("ul_menu");
var esp = document.querySelector(".espaco");


function parallax(){
	var scrollPos = window.scrollY;
	var texto = document.querySelector(".conteudo");

	if(scrollPos <=600){
		texto.style.transform = "translateY(" + (-scrollPos/3) + "px)";

	}

}

window.addEventListener("scroll", parallax);