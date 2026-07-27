const CLAVE_CLIENTES = "solarpatagonia_clientes";



function obtenerClientes(){

let datos =
localStorage.getItem(CLAVE_CLIENTES);


if(datos){

return JSON.parse(datos);

}


return [];

}




function guardarClientes(clientes){

localStorage.setItem(
CLAVE_CLIENTES,
JSON.stringify(clientes)
);

}