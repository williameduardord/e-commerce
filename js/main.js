const productos = [
    //tintos
    {
        id: "tinto-01",
        titulo: "Tinto 01",
        imagen: "./img/tintos/01.JPG",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 1000
    },
    {
        id: "tinto-02",
        titulo: "Tinto 02",
        imagen: "./img/tintos/02.JPG",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 1000
    },
    {
        id: "tinto-03",
        titulo: "Tinto 03",
        imagen: "./img/tintos/03.JPG",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 1000
    },
    //blancos
    {
        id: "blanco-01",
        titulo: "Blanco 01",
        imagen: "./img/blancos/01.JPG",
        categoria: {
            nombre: "Blanco",
            id: "blanco"
        },
        precio: 1000
    },
    {
        id: "blanco-02",
        titulo: "Blanco 02",
        imagen: "./img/blancos/02.JPG",
        categoria: {
            nombre: "Blanco",
            id: "blanco"
        },
        precio: 1000
    },
    {
        id: "blanco-03",
        titulo: "Blanco 03",
        imagen: "./img/blancos/03.JPG",
        categoria: {
            nombre: "Blanco",
            id: "blanco"
        },
        precio: 1000
    },
    //rosado
    {
        id: "rosado-01",
        titulo: "Rosado 01",
        imagen: "./img/rosados/01.JPG",
        categoria: {
            nombre: "Rosado",
            id: "rosado"
        },
        precio: 1000
    },
    {
        id: "rosado-02",
        titulo: "Rosado 02",
        imagen: "./img/rosados/02.JPG",
        categoria: {
            nombre: "Rosado",
            id: "rosado"
        },
        precio: 1000
    },
    {
        id: "rosado-03",
        titulo: "Rosado 03",
        imagen: "./img/rosados/03.JPG",
        categoria: {
            nombre: "Rosado",
            id: "rosado"
        },
        precio: 1000
    },

];
//crea el div y toma los datos del array de productos
const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
       <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
       <div class="producto-detalles">
           <h3 class="producto-titulo">${producto.titulo}</h3>
           <p class="producto-precio">${producto.precio}}</p>
           <button class="producto-agregar" id="${producto.id}">Agregar</button>
       </div>
       `;
       contenedorProductos.append(div);
    })
}
cargarProductos();