document.addEventListener(
"DOMContentLoaded",
mostrarClientes
);

async function guardarCliente(){


const cliente = {

    nombre: document.getElementById("nombre").value,

    telefono: document.getElementById("telefono").value,

    email: document.getElementById("email").value,

    localidad: document.getElementById("localidad").value,

    direccion: document.getElementById("direccion").value,

    observaciones: document.getElementById("observaciones").value

};



try {


const respuesta = await fetch(

"https://calculadora-voltaje.onrender.com/clientes"
{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(cliente)

}

);



const resultado = await respuesta.json();



if(respuesta.ok){


alert(
"Cliente guardado correctamente"
);


limpiarFormulario();


cargarClientes();


}else{


alert(
"Error: "+resultado.error
);


}



}

catch(error){


console.error(error);


alert(
"No se pudo conectar con el servidor"
);


}


}

function guardarCliente2(){


let cliente={

id:Date.now(),

nombre:
document.getElementById("nombre").value,


telefono:
document.getElementById("telefono").value,


email:
document.getElementById("email").value,


localidad:
document.getElementById("localidad").value,


direccion:
document.getElementById("direccion").value,


observaciones:
document.getElementById("observaciones").value,


fecha:
new Date().toLocaleDateString()

};



let clientes =
obtenerClientes();



clientes.push(cliente);



guardarClientes(clientes);



alert(
"Cliente guardado correctamente"
);



limpiarFormulario();



mostrarClientes();


}




function mostrarClientes(){


let contenedor =
document.getElementById(
"listaClientes"
);



if(!contenedor)
return;



let clientes =
obtenerClientes();



if(clientes.length===0){

contenedor.innerHTML=
"No hay clientes registrados";

return;

}



contenedor.innerHTML="";



clientes.forEach(cliente=>{


let tarjeta =
document.createElement("div");


tarjeta.className="tarjeta";



tarjeta.innerHTML=`

<h3>
${cliente.nombre}
</h3>


<p>
📞 ${cliente.telefono}
</p>


<p>
📍 ${cliente.localidad}
</p>


<p>
🏠 ${cliente.direccion}
</p>


<p>
${cliente.observaciones}
</p>


<button onclick="eliminarCliente(${cliente.id})">

🗑 Eliminar

</button>


`;



contenedor.appendChild(tarjeta);



});



}





function eliminarCliente(id){


let clientes =
obtenerClientes();


clientes =
clientes.filter(
c=>c.id!==id
);



guardarClientes(clientes);



mostrarClientes();


}




function limpiarFormulario(){


document.querySelectorAll(
"input, textarea"
)
.forEach(
e=>e.value=""
);


}
