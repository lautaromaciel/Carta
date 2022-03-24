
/* Carta */

const carta = document.getElementById("cartaC");
const botonesCarta = document.querySelectorAll(".carta__titulo");
const botonCartaS = document.getElementById("cartaSiguiente");
const botonCartaA = document.getElementById("cartaAnterior");

/* Se creó un array items que contiene 48 objetos que van a distribuirse en las paginas */

const items = [{
	id : 1,
	categoria : "pizza",
	titulo : "Pizza N°1",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 2,
	categoria : "pizza",
	titulo : "Pizza N°2",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 3,
	categoria : "pizza",
	titulo : "Pizza N°3",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 4,
	categoria : "pizza",
	titulo : "Pizza N°4",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 5,
	categoria : "pizza",
	titulo : "Pizza N°5",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 6,
	categoria : "pizza",
	titulo : "Pizza N°6",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 7,
	categoria : "pizza",
	titulo : "Pizza N°7",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 8,
	categoria : "pizza",
	titulo : "Pizza N°8",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 9,
	categoria : "pizza",
	titulo : "Pizza N°9",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 10,
	categoria : "pizza",
	titulo : "Pizza N°10",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 11,
	categoria : "pizza",
	titulo : "Pizza N°11",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
}
,{
	id : 12,
	categoria : "pizza",
	titulo : "Pizza N°12",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
}
,{
	id : 13,
	categoria : "pizza",
	titulo : "Pizza N°13",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 14,
	categoria : "pizza",
	titulo : "Pizza N°14",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 15,
	categoria : "pizza",
	titulo : "Pizza N°15",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 16,
	categoria : "pizza",
	titulo : "Pizza N°16",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 17,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°1",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 18,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°2",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 19,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°3",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 20,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°4",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 21,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°5",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 22,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°6",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 23,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°7",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 24,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°8",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 25,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°9",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 26,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°10",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 27,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°11",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
}
,{
	id : 28,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°12",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
}
,{
	id : 29,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°13",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 30,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°14",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 31,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°15",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 32,
	categoria : "hamburguesa",
	titulo : "Hamburguesa N°16",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 33,
	categoria : "desayuno",
	titulo : "Desayuno N°1",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 34,
	categoria : "desayuno",
	titulo : "Desayuno N°2",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 35,
	categoria : "desayuno",
	titulo : "Desayuno N°3",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 36,
	categoria : "desayuno",
	titulo : "Desayuno N°4",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 37,
	categoria : "desayuno",
	titulo : "Desayuno N°5",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 38,
	categoria : "desayuno",
	titulo : "Desayuno N°6",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 39,
	categoria : "desayuno",
	titulo : "Desayuno N°7",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 40,
	categoria : "desayuno",
	titulo : "Desayuno N°8",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 41,
	categoria : "desayuno",
	titulo : "Desayuno N°9",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 42,
	categoria : "desayuno",
	titulo : "Desayuno N°10",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 43,
	categoria : "desayuno",
	titulo : "Desayuno N°11",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
}
,{
	id : 44,
	categoria : "desayuno",
	titulo : "Desayuno N°12",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
}
,{
	id : 45,
	categoria : "desayuno",
	titulo : "Desayuno N°13",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 46,
	categoria : "desayuno",
	titulo : "Desayuno N°14",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 47,
	categoria : "desayuno",
	titulo : "Desayuno N°15",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
},{
	id : 48,
	categoria : "desayuno",
	titulo : "Desayuno N°16",
	texto : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.`,
	precio : "$10"
}
]






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



const pagina3D = `<div class="carta carta1">
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°17</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°18</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°19</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°20</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>
<div class="carta carta2">
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°21</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°22</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°23</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">desayuno N°24</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>`;


const pagina4A = `<div class="carta carta1">
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°1</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°2</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°3</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°4</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>
<div class="carta carta2">
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°5</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°6</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°7</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°8</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>`;

const pagina4B = `<div class="carta carta1">
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°9</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°10</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°11</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°12</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>
<div class="carta carta2">
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°13</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
<div class="carta__item">
	<h4 class="carta__subtitulo">Postres N°14</h4>
	<p class="carta__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores 
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.</p>
	<span class="carta__span">$100</span>
</div>
</div>`;

/* Final: Añadí una página más y pude comprobar que todo funciona corretamente,
probé hacer una función de creación de páginas pero al menos sin usar POO me resultó más eficiente
remplazar el código Html;
Lo siguiente seria usar archivos txt externos en lugar de escribir el código Html en js*/

const carta1 = [pagina1A,pagina1B,pagina1C];
const carta2 = [pagina2A,pagina2B,pagina2C];
const carta3 = [pagina3A,pagina3B,pagina3C,pagina3D];
const carta4 = [pagina4A,pagina4B];

const contador = [0,0,0,0];
const cartas = [carta1,carta2,carta3,carta4];
const clases = ["pizzas","hamburguesas","desayunos","postres"];


function mostrarCarta(){
	for(i=0;i <= clases.length-1; i++){
		if(carta.classList.contains(clases[i])){
			carta.innerHTML = cartas[i][contador[i]];
		}
	}
};

function cambiarCarta(e,clase){
	carta.setAttribute("class",`cartaC ${clase}`);
		mostrarCarta();
		for(boton of botonesCarta){
			boton.classList.remove("activo");
		}
		e.currentTarget.classList.toggle("activo");
} 


for(i=0;i <= botonesCarta.length-1;i++){
	let n = i;
	botonesCarta[n].addEventListener("click",(e)=>{
		cambiarCarta(e,clases[n]);
	});
}



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
	for(i=0;i <= clases.length-1; i++){
		if(carta.classList.contains(clases[i])){
			cambiarPagina(i,cartas[i],true);
		}
	}
	inhabilitarBotones(botonCartaA,botonCartaS);
}

function anteriorPagina(){
	for(i=0;i <= clases.length-1; i++){
		if(carta.classList.contains(clases[i])){
			cambiarPagina(i,cartas[i],false);
		}
	}
	inhabilitarBotones(botonCartaA,botonCartaS);
}

botonCartaS.addEventListener("click", siguientePagina);
botonCartaA.addEventListener("click", anteriorPagina);















