const CLAVE_RELEVAMIENTOS =
"solarpatagonia_relevamientos";



document.addEventListener(
"DOMContentLoaded",
()=>{

cargarClientes();

mostrarRelevamientos();

});





function cargarClientes(){

let select =
document.getElementById("cliente");


let clientes =
obtenerClientes();



select.innerHTML="";


clientes.forEach(c=>{


let opcion =
document.createElement("option");


opcion.value=c.id;

opcion.textContent=
c.nombre;


select.appendChild(opcion);


});


}







function guardarRelevamiento(){


let datos={


id:Date.now(),


cliente:
document.getElementById("cliente").value,


tipo:
document.getElementById("tipoVivienda").value,


personas:
document.getElementById("personas").value,


techo:
document.getElementById("techo").value,


orientacion:
document.getElementById("orientacion").value,


inclinacion:
document.getElementById("inclinacion").value,


sombras:
document.getElementById("sombras").value,


superficie:
document.getElementById("superficie").value,


distancia:
document.getElementById("distancia").value,


observaciones:
document.getElementById("observaciones").value,


fecha:
new Date().toLocaleDateString()


};




let lista =
JSON.parse(
localStorage.getItem(CLAVE_RELEVAMIENTOS)
||
"[]"
);



lista.push(datos);



localStorage.setItem(
CLAVE_RELEVAMIENTOS,
JSON.stringify(lista)
);



alert(
"Relevamiento guardado"
);



mostrarRelevamientos();


}







function mostrarRelevamientos(){


let contenedor =
document.getElementById(
"listaRelevamientos"
);



if(!contenedor)
return;



let lista =
JSON.parse(
localStorage.getItem(CLAVE_RELEVAMIENTOS)
||
"[]"
);



if(lista.length===0){

contenedor.innerHTML=
"No hay relevamientos";

return;

}



contenedor.innerHTML="";



lista.forEach(r=>{


let div =
document.createElement("div");


div.className="tarjeta";


div.innerHTML=`

<h3>
Relevamiento ${r.fecha}
</h3>


<p>
🏠 Techo: ${r.techo}
</p>


<p>
🧭 Orientación: ${r.orientacion}
</p>


<p>
📐 Inclinación: ${r.inclinacion}°
</p>


<p>
🌲 Sombras: ${r.sombras}
</p>


<p>
📝 ${r.observaciones}
</p>


`;



contenedor.appendChild(div);


});


}