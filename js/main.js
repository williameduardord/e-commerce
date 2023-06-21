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
            nombre: "Blancos",
            id: "blancos"
        },
        precio: 1000
    },
    {
        id: "blanco-02",
        titulo: "Blanco 02",
        imagen: "./img/blancos/02.JPG",
        categoria: {
            nombre: "Blancos",
            id: "blancos"
        },
        precio: 1000
    },
    {
        id: "blanco-03",
        titulo: "Blanco 03",
        imagen: "./img/blancos/03.JPG",
        categoria: {
            nombre: "Blancos",
            id: "blancos"
        },
        precio: 1000
    },
    //rosado
    {
        id: "rosado-01",
        titulo: "Rosado 01",
        imagen: "./img/rosados/01.JPG",
        categoria: {
            nombre: "Rosados",
            id: "rosados"
        },
        precio: 1000
    },
    {
        id: "rosado-02",
        titulo: "Rosado 02",
        imagen: "./img/rosados/02.JPG",
        categoria: {
            nombre: "Rosados",
            id: "rosados"
        },
        precio: 1000
    },
    {
        id: "rosado-03",
        titulo: "Rosado 03",
        imagen: "./img/rosados/03.JPG",
        categoria: {
            nombre: "Rosados",
            id: "rosados"
        },
        precio: 1000
    },

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");//crea un array con todos los botones que tengan la clase .boton-categoria ,para agregar la class active y cargar productos deseados
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

//crea el div y toma los datos del array de productos
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");//crea el div
        div.classList.add("producto");//agrega la clase producto al div
        div.innerHTML = `
       <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
       <div class="producto-detalles">
           <h3 class="producto-titulo">${producto.titulo}</h3>
           <p class="producto-precio">${producto.precio}</p>
           <button class="producto-agregar" id="${producto.id}">Agregar</button>
       </div>
       `;
        contenedorProductos.append(div);//devuelve lo que crea la funcion
    })
    actualizarBotonesAgregar();

}
cargarProductos(productos);//llamo a la funcion y le entrego el array de productos

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {//agrega el evento de click

        botonesCategorias.forEach(boton => boton.classList.remove("active"));//primero remueve todas las clases active
        e.currentTarget.classList.add("active");//agrega la clase active al click
        if (e.currentTarget.id != "todos") {//si el id del click es distinto de todos
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id); //crea la const productoCategoria y le asigna el resultado de la busqueda en el array de productos cuando encuentre el id del producto categoria igual al del evnto de click
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;// reemplaza en la constante tituloPrincipal el texto guardado en la constante categoriaProducto, en la busqueda anterior

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);//crea la constante productosBoton filtra el array de productos para encontrar todos los productos con la categoria id del array igual al id del click
            cargarProductos(productosBoton);
        }
        else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});
//
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");//Pera seleccionar todos los botones

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);//para agregar el evento de click y asignarle la funcion agregarAl Carrito
    });
}
let productosEnCarrito;


const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS){
    productosEnCarrito=productosEnCarritoLS;
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;//le asigna la id del boton a la constante idBoton en el evento de click
    const productoAgregado = productos.find(producto => producto.id === idBoton);//del array de productos encuentra el producto cuyo id es igual a la varable idBoton y guarda en productoAgregado

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {//si algun producto del array de productosEnCarrito tiene id igual al idBoton
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);//busca el producto en el array de productsEnCarrito con el id del producto igual al idBton, busca su indice y guardalo en la variable index
        productosEnCarrito[index].cantidad++;//sumale 1 a la variable index
    } else {
        productoAgregado.cantidad = 1;//le asigna la propiedad de cantidad al producto con el valor inicial de 1
        productosEnCarrito.push(productoAgregado);//si no existe el prducto en productosEnCarrito, lo agrega
    }
    actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText=nuevoNumerito;
}