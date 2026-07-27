

const CLAVE_PRESUPUESTOS =
"solarpatagonia_presupuestos";


document.addEventListener(
"DOMContentLoaded",
()=>{

cargarClientesPresupuesto();

mostrarPresupuestos();

});




function cargarClientesPresupuesto(){

let select =
document.getElementById(
"clientePresupuesto"
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






function guardarPresupuesto(){


let presupuesto={


id:Date.now(),


cliente:
document.getElementById(
"clientePresupuesto"
).value,


descripcion:
document.getElementById(
"descripcion"
).value,


paneles:
document.getElementById(
"paneles"
).value,


inversor:
document.getElementById(
"inversor"
).value,


baterias:
document.getElementById(
"baterias"
).value,


materiales:
Number(
document.getElementById(
"materiales"
).value
),


manoObra:
Number(
document.getElementById(
"manoObra"
).value
),


fecha:
new Date().toLocaleDateString()


};



presupuesto.total =
presupuesto.materiales +
presupuesto.manoObra;



let lista =
JSON.parse(
localStorage.getItem(
CLAVE_PRESUPUESTOS
)
||
"[]"
);



lista.push(presupuesto);



localStorage.setItem(
CLAVE_PRESUPUESTOS,
JSON.stringify(lista)
);



alert(
"Presupuesto guardado"
);



mostrarPresupuestos();


}







function mostrarPresupuestos(){


let contenedor =
document.getElementById(
"listaPresupuestos"
);


if(!contenedor)
return;



let lista =
JSON.parse(
localStorage.getItem(
CLAVE_PRESUPUESTOS
)
||
"[]"
);



contenedor.innerHTML="";



lista.forEach(p=>{


let div =
document.createElement("div");


div.className="tarjeta";


div.innerHTML=`

<h3>
Presupuesto ${p.fecha}
</h3>

<p>
☀️ ${p.descripcion}
</p>

<p>
🔋 ${p.baterias}
</p>

<p>
💰 Total:
$ ${p.total.toLocaleString()}
</p>


`;



contenedor.appendChild(div);



});


}