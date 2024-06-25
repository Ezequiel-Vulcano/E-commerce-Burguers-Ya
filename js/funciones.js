//? NOTA: TODO LO QUE TENGA LA CLASE SHOW EN EL HTML ES CODIGO VIEJO QUE SE ESTA OCULTANDO PARA NO GENERAR FALLAS.


//! #traerproductos: Funcion que se encarga de traer todos los productos de mi JSON productos
/*
    * Return: Retorna todos los productos filtrados a corde al tamaño de la hamburguesa.
*/
async function traerproductos(){
    try {
        const response = await fetch("./js/productos.json");
        const productosData = await response.json();
        return productosData;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}


//! #generarCatalogo: Funcion que se encarga de generar el catalogo en la vista principal tomando los datos que retorna el JSON
/*
    * Parametro "tamaño": se va a tomar de referencia al cargar la pagina el 1 (lo cual hace que se muestren las buguers simples)
    1 = simple
    2 = doble
    3 = triple
    4 = cuadruple
*/
async function generarCatalogo(tamaño){
    
    // TRAIGO EL JSON PARA COMPARAR Y PASAR LAS HAMBURGUESAS CON LAS CANTIDADES ACTUALIZADAS

    const recupero_json = localStorage.getItem("carrito_burguers");
    const objeto_recuperado = JSON.parse(recupero_json);
    console.log(objeto_recuperado)

    let articulo = await traerproductos();

    if(objeto_recuperado) {
        articulo.forEach(el => {
        
            const itemLocalStorage = objeto_recuperado.find(item => item.id === el.id);
            if(itemLocalStorage) {
                el.cantidad = itemLocalStorage.cantidad;
            }
    
        })
    }
    

    console.log(articulo)

    // Filtrar productos por tamaño
    let producto_filtrado = articulo.filter(el => el.tamaño == tamaño)

    // Convierto los productos obtenidos en clases para poder trabajar con POO
    const hamburguesa = producto_filtrado.map(el => new Hamburguesas(
        el.id,
        el.nombre,
        el.precio,
        el.tamaño,
        el.cantidad,
        el.descripcion,
        el.foto
    ))

    hamburguesa.forEach(el => {
        el.generar_tarjeta()
    });
}


//! #verificarJson: Funcion que se encarga de revisar si mi json hay algo guardado apenas cargo la pagina, si lo hay actualiza mi objeto carrito para que sea igual a esto.
function verificarJson(){
    if(localStorage.getItem("carrito_burguers")){
        const recupero_json = localStorage.getItem("carrito_burguers");
        const objeto_recuperado = JSON.parse(recupero_json);
        carrito_productos = objeto_recuperado
    }
}