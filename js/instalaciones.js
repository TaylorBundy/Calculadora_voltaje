
const CLAVE_INSTALACIONES =
"solarpatagonia_instalaciones";


document.addEventListener(
"DOMContentLoaded",
()=>{

cargarClientesInstalacion();

mostrarInstalaciones();

});



function cargarClientesInstalacion(){

let select =
document.getElementById(
"clienteInstalacion"
);


let clientes =
obtenerClientes();


clientes.forEach(c=>{


let op =
document.createElement("option");


op.value=c.id;

op.textContent=c.nombre;


select.appendChild(op);


});

}



function guardarInstalacion(){


let instalacion={


id:Date.now(),

cliente:
document.getElementById(
"clienteInstalacion"
).value,


estado:
document.getElementById(
"estado"
).value,


potencia:
document.getElementById(
"potencia"
).value,


observaciones:
document.getElementById(
"obsInstalacion"
).value,


fecha:
new Date().toLocaleDateString()


};



let lista =
JSON.parse(
localStorage.getItem(
CLAVE_INSTALACIONES
)
||
"[]"
);


lista.push(instalacion);



localStorage.setItem(
CLAVE_INSTALACIONES,
JSON.stringify(lista)
);



mostrarInstalaciones();


}



function mostrarInstalaciones(){


let contenedor =
document.getElementById(
"listaInstalaciones"
);


if(!contenedor)return;



let lista =
JSON.parse(
localStorage.getItem(
CLAVE_INSTALACIONES
)
||
"[]"
);



contenedor.innerHTML="";



lista.forEach(i=>{


contenedor.innerHTML += `

<div class="tarjeta">

<h3>
Instalación ${i.fecha}
</h3>

<p>
Estado:
${i.estado}
</p>

<p>
Potencia:
${i.potencia} kW
</p>

<p>
${i.observaciones}
</p>


</div>

`;

});


}
