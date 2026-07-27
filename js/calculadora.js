function agregarEquipo(){

let tabla=document.getElementById("listaEquipos");


let fila=document.createElement("tr");


fila.innerHTML=`

<td>
Nuevo equipo
</td>

<td>
<input type="number" value="1">
</td>

<td>
<input class="potencia" type="number" value="100">
</td>

<td>
<input class="horas" type="number" value="5">
</td>

<td>
<button onclick="eliminarFila(this)">
❌
</button>
</td>

`;


tabla.appendChild(fila);


}





function eliminarFila(boton){

boton.parentElement.parentElement.remove();

}





function calcularSistema(){


let potencias=document.querySelectorAll(".potencia");
let horas=document.querySelectorAll(".horas");


let consumo=0;


for(let i=0;i<potencias.length;i++){


let p=parseFloat(potencias[i].value);
let h=parseFloat(horas[i].value);


consumo += p*h;


}




let autonomia=
parseInt(
document.getElementById("autonomia").value
);



let bateriaFactor=
parseFloat(
document.getElementById("bateria").value
);



/*
Consumo diario Wh
*/


let consumoDia=consumo;



let paneles=
Math.ceil(
consumoDia /
(585*4)
);



if(paneles<1)
paneles=1;



/*
Batería

Se calcula considerando:
- días autonomía
- profundidad descarga
*/


let bateriaWh=
(consumoDia*autonomia) /
bateriaFactor;



let bateriaKwh=
(bateriaWh/1000).toFixed(2);





/*
Inversor

Se toma potencia simultánea
*/


let potenciaTotal=0;


potencias.forEach(p=>{

potenciaTotal+=
parseFloat(p.value);

});



let inversor=
Math.ceil(
(potenciaTotal*1.3)/500
)*500;





document.getElementById("resultado").innerHTML=`

<h3>
Resultados
</h3>

<p>
⚡ Consumo diario:
<b>${consumoDia.toFixed(0)} Wh</b>
</p>


<p>
📅 Consumo mensual:
<b>${(consumoDia*30/1000).toFixed(2)} kWh</b>
</p>


<p>
☀️ Paneles recomendados:
<b>${paneles} x 585W</b>
</p>


<p>
🔋 Banco de baterías:
<b>${bateriaKwh} kWh</b>
</p>


<p>
🔌 Inversor mínimo recomendado:
<b>${inversor} W</b>
</p>


`;



}
