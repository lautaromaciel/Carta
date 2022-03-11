
/* Carta */

const carta = document.getElementById("cartaC");

const botonesCarta = document.querySelectorAll(".carta__titulo");
const botonCarta1 = document.getElementById("pizzas");
const botonCarta2 = document.getElementById("hamburguesas");
const botonCarta3 = document.getElementById("desayunos");

const botonCartaS = document.getElementById("cartaSiguiente");
const botonCartaA = document.getElementById("cartaAnterior");

const pagina1A =`<div class="carta carta1">
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

const pagina1B = `
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

const pagina1C = `<div class="carta carta1">
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


const pagina2A =`<div class="carta carta1" >
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

const pagina2B =`<div class="carta carta1" >
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

const pagina2C = `<div class="carta carta1">
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


const pagina3A = `<div class="carta carta1">
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

const pagina3B = `<div class="carta carta1" >
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

const pagina3C = `<div class="carta carta1">
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

const carta1 = [pagina1A,pagina1B,pagina1C];
const carta2 = [pagina2A,pagina2B,pagina2C];
const carta3 = [pagina3A,pagina3B,pagina3C];

let contador = [0,0,0];
const cartas = [carta1,carta2,carta3];



function mostrarCarta(){
	if(carta.classList.contains("pizzas")){
		carta.innerHTML = cartas[0][contador[0]];
	}
	else if(carta.classList.contains("hamburguesas")){
		carta.innerHTML = cartas[1][contador[1]];
	}
	else if(carta.classList.contains("desayunos")){
		carta.innerHTML = cartas[2][contador[2]];
	}
};

/* Paso 4: Agregué la función CambiarCarta porque se repetiá en cada boton */

function cambiarCarta(e,clase){
	carta.setAttribute("class",`cartaC ${clase}`);
		mostrarCarta();
		for(boton of botonesCarta){
			boton.classList.remove("activo");
		}
		e.target.classList.toggle("activo");
} 



botonCarta1.addEventListener("click",(e)=>{;
	cambiarCarta(e,"pizzas");
});

botonCarta2.addEventListener("click",(e)=>{
	cambiarCarta(e,"hamburguesas");
});

botonCarta3.addEventListener("click",(e)=>{
	cambiarCarta(e,"desayunos");
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




function inhabilitarBotones(btnAtras,btnAdelante){
	btnAdelante.removeEventListener("click",siguientePagina);
	btnAtras.removeEventListener("click",anteriorPagina);
	setTimeout(()=>{
		btnAdelante.addEventListener("click",siguientePagina);
		btnAtras.addEventListener("click",anteriorPagina);
	},1500);	
}



function cambiarPagina(contadorI,cartaActual,boleano){
	if(boleano){
		contador[contadorI]++;
		if(contador[contadorI] > cartaActual.length-1) contador[contadorI] = 0;
		transicionPagina(cartaActual,contador[contadorI]);
	} else{
		contador[contadorI]--;
		if (contador[contadorI] < 0 ) contador[contadorI] = cartaActual.length-1;
		transicionPaginaAnt(cartaActual,contador[contadorI]);
	}	
}


function siguientePagina(){
	
	if(carta.classList.contains("pizzas")){
		cambiarPagina(0,cartas[0],true);
	}
	else if(carta.classList.contains("hamburguesas")){
		cambiarPagina(1,cartas[1],true);
	}
	else if(carta.classList.contains("desayunos")){
		cambiarPagina(2,cartas[2],true);
	}
	inhabilitarBotones(botonCartaA,botonCartaS);
}

function anteriorPagina(){

	if(carta.classList.contains("pizzas")){
		cambiarPagina(0,cartas[0],false);
	}
	else if(carta.classList.contains("hamburguesas")){
		cambiarPagina(1,cartas[1],false);

	}
	else if(carta.classList.contains("desayunos")){
		cambiarPagina(2,cartas[2],false);
	}
	inhabilitarBotones(botonCartaA,botonCartaS);
}

botonCartaS.addEventListener("click", siguientePagina);
botonCartaA.addEventListener("click", anteriorPagina);















