
document.addEventListener(
"DOMContentLoaded",
calcularEstadisticas
);



function calcularEstadisticas(){


let clientes =
JSON.parse(
localStorage.getItem(
"solarpatagonia_clientes"
)
||
"[]"
);



let presupuestos =
JSON.parse(
localStorage.getItem(
"solarpatagonia_presupuestos"
)
||
"[]"
);



let instalaciones =
JSON.parse(
localStorage.getItem(
"solarpatagonia_instalaciones"
)
||
"[]"
);



document.getElementById(
"totalClientes"
).innerHTML =
clientes.length;



document.getElementById(
"totalPresupuestos"
).innerHTML =
presupuestos.length;



document.getElementById(
"totalInstalaciones"
).innerHTML =
instalaciones.length;



let potencia=0;



instalaciones.forEach(i=>{

potencia +=
Number(i.potencia || 0);

});



document.getElementById(
"potenciaTotal"
).innerHTML =
potencia+" kW";


}
