

/* Carta */

const carta = document.getElementById("cartaC");

const botonesCarta = document.querySelectorAll(".carta__titulo");
const botonCarta1 = document.getElementById("pizzas");
const botonCarta2 = document.getElementById("hamburguesas");
const botonCarta3 = document.getElementById("desayunos");

const botonCartaS = document.getElementById("cartaSiguiente");
const botonCartaA = document.getElementById("cartaAnterior");

const carta1A =`<div class="carta carta1">
				<div class="carta__item">
					<h4 class="carta__subtitulo">Pizza N°1</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">Pizza N°2</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">Pizza N°3</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">Pizza N°4</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
			</div>
			<div class="carta carta2" >
				<div class="carta__item">
					<h4 class="carta__subtitulo">Pizza N°5</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">Pizza N°6</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">Pizza N°7</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">Pizza N°8</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
			</div>`;

const carta1B = `
	<div class="carta carta1" >
		<div class="carta__item">
			<h4 class="carta__subtitulo">Pizza N°5</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">Pizza N°6</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">Pizza N°7</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">Pizza N°8</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
	</div>
	<div class="carta carta2">
		<div class="carta__item">
			<h4 class="carta__subtitulo">Pizza N°9</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">Pizza N°10</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">Pizza N°11</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">Pizza N°12</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
	</div>`;

const carta1C = `<div class="carta carta1">
	<div class="carta__item">
		<h4 class="carta__subtitulo">Pizza N°9</h4>
		<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
		<span class="carta__span">$100</span>
	</div>
	<div class="carta__item">
		<h4 class="carta__subtitulo">Pizza N°10</h4>
		<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
		<span class="carta__span">$100</span>
	</div>
	<div class="carta__item">
		<h4 class="carta__subtitulo">Pizza N°11</h4>
		<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
		<span class="carta__span">$100</span>
	</div>
	<div class="carta__item">
		<h4 class="carta__subtitulo">Pizza N°12</h4>
		<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
		<span class="carta__span">$100</span>
	</div>
</div>
<div class="carta carta2" >
	<div class="carta__item">
		<h4 class="carta__subtitulo">Pizza N°13</h4>
		<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
		<span class="carta__span">$100</span>
	</div>
	<div class="carta__item">
		<h4 class="carta__subtitulo">Pizza N°14</h4>
		<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
		<span class="carta__span">$100</span>
	</div>
	<div class="carta__item">
		<h4 class="carta__subtitulo">Pizza N°15</h4>
		<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
		<span class="carta__span">$100</span>
	</div>
	<div class="carta__item">
		<h4 class="carta__subtitulo">Pizza N°16</h4>
		<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
		<span class="carta__span">$100</span>
	</div>
</div>`;


const carta2A =`<div class="carta carta1" >
				<div class="carta__item">
					<h4 class="carta__subtitulo">hamburguesa N°1</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">hamburguesa N°2</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">hamburguesa N°3</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">hamburguesa N°4</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
			</div>
			<div class="carta carta2">
				<div class="carta__item">
					<h4 class="carta__subtitulo">hamburguesa N°5</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">hamburguesa N°6</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">hamburguesa N°7</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">hamburguesa N°8</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
			</div>`;

const carta2B =`<div class="carta carta1" >
		<div class="carta__item">
			<h4 class="carta__subtitulo">hamburguesa N°5</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">hamburguesa N°6</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">hamburguesa N°7</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">hamburguesa N°8</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
	</div>
	<div class="carta carta2">
		<div class="carta__item">
			<h4 class="carta__subtitulo">hamburguesa N°9</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">hamburguesa N°10</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">hamburguesa N°11</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">hamburguesa N°12</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
	</div>`;

const carta2C = `<div class="carta carta1">
<div class="carta__item">
	<h4 class="carta__subtitulo">hamburguesa N°9</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">hamburguesa N°10</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">hamburguesa N°11</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">hamburguesa N°12</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>
<div class="carta carta2">
<div class="carta__item">
	<h4 class="carta__subtitulo">hamburguesa N°13</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">hamburguesa N°14</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">hamburguesa N°15</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">hamburguesa N°16</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>`;


const carta3A = `<div class="carta carta1">
				<div class="carta__item">
					<h4 class="carta__subtitulo">desayuno N°1</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">desayuno N°2</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">desayuno N°3</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">desayuno N°4</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
			</div>
			<div class="carta carta2">
				<div class="carta__item">
					<h4 class="carta__subtitulo">desayuno N°5</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">desayuno N°6</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">desayuno N°7</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
				<div class="carta__item">
					<h4 class="carta__subtitulo">desayuno N°8</h4>
					<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
					<span class="carta__span">$100</span>
				</div>
			</div>`;

const carta3B = `<div class="carta carta1" >
		<div class="carta__item">
			<h4 class="carta__subtitulo">desayuno N°5</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">desayuno N°6</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">desayuno N°7</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">desayuno N°8</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
	</div>
	<div class="carta carta2">
		<div class="carta__item">
			<h4 class="carta__subtitulo">desayuno N°9</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">desayuno N°10</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">desayuno N°11</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
		<div class="carta__item">
			<h4 class="carta__subtitulo">desayuno N°12</h4>
			<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
			<span class="carta__span">$100</span>
		</div>
	</div>`;

const carta3C = `<div class="carta carta1">
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°9</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°10</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°11</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°12</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>
<div class="carta carta2">
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°13</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°14</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°15</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°16</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>`;

const cartas1 = [carta1A,carta1B,carta1C];
const cartas2 = [carta2A,carta2B,carta2C];
const cartas3 = [carta3A,carta3B,carta3C];

let contadorP = 0;
let contadorH = 0;
let contadorD = 0;

function cambiarCarta(){
	if(carta.classList.contains("pizzas")){
		carta.innerHTML = cartas1[contadorP];
	}
	else if(carta.classList.contains("hamburguesas")){
		carta.innerHTML = cartas2[contadorH];
	}
	else if(carta.classList.contains("desayunos")){
		carta.innerHTML = cartas3[contadorD];
	}
};

botonCarta1.addEventListener("click",(e)=>{;
	carta.setAttribute("class","cartaC pizzas");
	cambiarCarta();
	for(boton of botonesCarta){
		boton.classList.remove("activo");
	}
	e.target.classList.toggle("activo");
});

botonCarta2.addEventListener("click",(e)=>{
	carta.setAttribute("class","cartaC hamburguesas");
	cambiarCarta();
	
	for(boton of botonesCarta){
		boton.classList.remove("activo");
	};
	e.target.classList.toggle("activo");
});

botonCarta3.addEventListener("click",(e)=>{
	carta.setAttribute("class","cartaC desayunos");
	cambiarCarta();
	
	for(boton of botonesCarta){
		boton.classList.remove("activo");
	};
	e.target.classList.toggle("activo");
});



const ocultar = elemento => elemento.style.opacity = "0";
const mostrar = elemento =>{
	elemento.style.opacity = "1";
	elemento.style.transition = "opacity 0.5s";
}
const mover = (elemento,movimiento) =>{
	elemento.style.transform = "translate" + movimiento;
	elemento.style.transition = "transform 1s";
}

/* paso 2: cambiando los parametros y modificando transicionPagina y
transicionPaginaAnt eliminé las funciones transicionPaginaF y transicionPaginaAntF */

function transicionPagina(pagina,contador){

	const cartaDerecha = carta.querySelector(".carta2");
	const cartaIzquierda = carta.querySelector(".carta1");
	if (contador != 0){
		mover(cartaDerecha,"X(-100%)");
			setTimeout(()=>{
				carta.innerHTML = pagina[contador];
				const nuevaDerecha = carta.querySelector(".carta2");
				ocultar(nuevaDerecha);
				setTimeout(()=>{
					mostrar(nuevaDerecha);
				},100)
			},1000);
	} else{
		mover(cartaDerecha,"x(-200%)");
		mover(cartaIzquierda,"x(-200%)");
			setTimeout(()=>{
				carta.innerHTML = pagina[contador];
				const cartaDerecha = carta.querySelector(".carta2");
				const cartaIzquierda = carta.querySelector(".carta1");
				ocultar(cartaDerecha);
				ocultar(cartaIzquierda);
				setTimeout(()=>{
					mostrar(cartaDerecha);
					mostrar(cartaIzquierda);
				},100)
			},1000);
	}
}


function transicionPaginaAnt(pagina,contador){
	
	const cartaDerecha = carta.querySelector(".carta1");
	const cartaIzquierda = carta.querySelector(".carta2");
	if(contador != pagina.length-1){
		if(window.innerWidth > 800){
			mover(cartaDerecha,"X(100%)");
				setTimeout(()=>{
					carta.innerHTML = pagina[contador];
					const nuevaDerecha = carta.querySelector(".carta1");
					ocultar(nuevaDerecha);
					setTimeout(()=>{
						mostrar(nuevaDerecha);
					},100)
				},1000);
		}else{
			mover(cartaIzquierda,"X(100%)");
				setTimeout(()=>{
					carta.innerHTML = pagina[contador];
					const nuevaInferior = carta.querySelector(".carta2");
					ocultar(nuevaInferior);
					setTimeout(()=>{
						mostrar(nuevaInferior);
					},100)
				},1000);
		}
	}else{
		mover(cartaDerecha,"X(200%)");
		mover(cartaIzquierda,"X(200%)");
			setTimeout(()=>{
				carta.innerHTML = pagina[contador];
				const cartaDerecha = carta.querySelector(".carta2");
				const cartaIzquierda = carta.querySelector(".carta1");
				ocultar(cartaDerecha);
				ocultar(cartaIzquierda);
				setTimeout(()=>{
					mostrar(cartaDerecha);
					mostrar(cartaIzquierda);
				},100)
			},1000);
	}
}

/* paso 2: Las funciones siguienteCarta y AnteriorCarta tambien se redujeron*/

function siguienteCarta(){

	if(carta.classList.contains("pizzas")){
		contadorP++;
		if (contadorP > cartas1.length-1) contadorP = 0;
		transicionPagina(cartas1,contadorP);
	}
	else if(carta.classList.contains("hamburguesas")){
		contadorH++;
		if (contadorH > cartas2.length-1) contadorH = 0;
		transicionPagina(cartas2,contadorH);
	}
	else if(carta.classList.contains("desayunos")){
		contadorD++;
		if (contadorD > cartas3.length-1) contadorD = 0;
		transicionPagina(cartas3,contadorD);
	}
	botonCartaS.removeEventListener("click",siguienteCarta);
	botonCartaA.removeEventListener("click",anteriorCarta);
	setTimeout(()=>{
		botonCartaS.addEventListener("click",siguienteCarta);
		botonCartaA.addEventListener("click",anteriorCarta);
	},1500);
}

function anteriorCarta(){
	
	if(carta.classList.contains("pizzas")){
		contadorP--;
		if (contadorP < 0 ) contadorP = cartas1.length-1;
		transicionPaginaAnt(cartas1,contadorP);
	}
	else if(carta.classList.contains("hamburguesas")){
		contadorH--;
		if (contadorH < 0 ) contadorH = cartas2.length-1;
		transicionPaginaAnt(cartas2,contadorH);

	}
	else if(carta.classList.contains("desayunos")){
		contadorD--;
		if (contadorD < 0 ) contadorD = cartas3.length-1;
		transicionPaginaAnt(cartas3,contadorD);
	}

	botonCartaA.removeEventListener("click",anteriorCarta);
	botonCartaS.removeEventListener("click",siguienteCarta);
	setTimeout(()=>{
		botonCartaA.addEventListener("click",anteriorCarta);
		botonCartaS.addEventListener("click",siguienteCarta);
	},1500);
	
}

botonCartaS.addEventListener("click", siguienteCarta);
botonCartaA.addEventListener("click", anteriorCarta);















