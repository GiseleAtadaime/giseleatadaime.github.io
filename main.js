var header_logo = document.querySelector(".header--logo");

window.addEventListener('scroll', function(){
	if(window.scrollY > 10){
		header_logo.style.opacity = 0;
	}
	else if(window.scrollY < 10 ){
		header_logo.style.opacity = 1;
	}
});

function smoothScroll(element){
	var elemento = document.querySelector(element);
	var posicao = elemento.offsetTop;

	window.scroll({
		top: posicao,
		left: 0,
		behavior:'smooth'
	})
	var menu = document.querySelector(".header--botao");
	menu.checked  = false;
}

