let i = 1;
let carrito = [];
let datos = []
let carrito2 = []
let preciosAdicionales = [];

class Hamburguesas {
    constructor(id, nombre,precio,tamaño, cantidad, descripcion, foto){
        this.id = id
        this.nombre = nombre,
        this.precio = precio,
        this.tamaño = tamaño,
        this.cantidad = cantidad,
        this.descripcion = descripcion
        this.foto = foto
    }
    
    incrementar(){
        this.cantidad++
    }

    sacar(){
        if (this.cantidad == 0) {
            this.cantidad = 0
        } else {
            this.cantidad--
        }
    }

}

const gustos = [

    // BURGUERS SIMPLES
    new Hamburguesas(1, "Classic Cheese", 2300, "simple", 0, "Pan de papa, cheddar x2, medallon de carne, queso cheese, salsa de la casa.", "./img/productoC/c1.jpg"),
    new Hamburguesas(2, "Amerikan Onion", 2300, "simple", 0, "Pan de papa, medallon de carne, cebolla smasheada, cheddar x2.", "./img/productoC/c2.jpg"),
    new Hamburguesas(3, "Big fat", 2300, "simple", 0, "Pan de papa, medallon de carne, doble cheddar, beacon, salsa de la casa", "./img/productoC/c3.jpg"),
    new Hamburguesas(4, "Cheese", 2500, "simple", 0, " Pan parmesano, doble cheddar, medallon de carne, salsa de la casa", "./img/productoC/c4.jpg"),
    new Hamburguesas(5, "Cheese & Cebolla", 2700, "simple", 0, "Pan de papa, medallon de carne, doble cheddar, beacon, salsa de la casa, doble aro de cebolla", "./img/productoC/c5.jpg"),
    new Hamburguesas(6, "Americana ", 2650, "simple", 0, " Pan de papa, medallon de carne, cheddar x2, lechuga, tomate, salsa de la casa.", "./img/productoC/c6.jpg"),
    new Hamburguesas(7, "Ruculin Simple", 2400, "simple", 0, "Pan de papa, cheddar x2, medallon de carne, rucula, cebolla morada, salsa de la casa.", "./img/productoC/c7.jpg"),
    
    // BURGUERS DOBLES
    new Hamburguesas(8, "Classic Cheese", 3100, "doble", 0, "Pan de papa, cheddar x2, doble medallon de carne, queso cheese, salsa de la casa.", "./img/productoC/c8.jpg"),
    new Hamburguesas(9, "Big fat", 3100, "doble", 0, "Pan de papa, doble medallon de carne, doble cheddar, beacon, salsa de la casa", "./img/productoC/c9.jpg"),
    new Hamburguesas(10, "Cheese & Cebolla", 3500, "doble", 0, "Pan de papa, doble medallon de carne, doble cheddar, beacon, salsa de la casa", "./img/productoC/c10.jpg"),
    new Hamburguesas(11, "Kemirabobo ", 3500, "doble", 0, "Pan de papa, doble medallones de carne de, cuadrado de muzzarella rebozado, salsa napolitana, cheddar x2", "./img/productoC/c11.jpg"),
    new Hamburguesas(12, "Baby Boomer ", 3600, "doble", 0, "Pan de papa, cheddar x 2, doble medallon de carne, panceta crocante, salsa de la casa, huevo a la plancha.", "./img/productoC/c12.jpg"),
    new Hamburguesas(13, "Chiken Burguer ", 2900, "doble", 0, "Pan de papa, pepinillos, lechuga, doble medallon de carne, salsa de la casa.", "./img/productoC/c13.jpg"),
    
    // BURGUERS TRIPLES
    new Hamburguesas(14, "Thousands of cheeses", 4300, "triple", 0, "Pan de papa, pepino, lechuga, tomate, cebolla, triple medallon de carne, cuadruple cheddar, salsa de la casa.", "./img/productoC/c14.jpg"),
    new Hamburguesas(15, "KI-FAT", 4600, "triple", 0, "Pan de papa - sextuple cheddar- triple medallon de carne, lechuga, tomate, cebolla, beacon, salsa especial", "./img/productoC/c15.jpg"),
    new Hamburguesas(16, "Ruculin triple", 4400, "triple", 0, "Pan de papa, cheddar x2, triple medallon de carne, rucula, cebolla morada, salsa de la casa.",
    "./img/productoC/c16.jpg"),
    new Hamburguesas(17, "Cheese & Cebolla", 4000, "triple", 0, "Pan parmesano, doble cheddar, triple medallon de carne, salsa de la casa", "./img/productoC/c17.jpg"),
    
    // BURGUERS CUADRUPLES
    new Hamburguesas(18, "La 420 BLANCA", 5400, "cuadruple", 0, "Pan parmesano, cuadruple medallon de carne, chedar en fetas x8, huevo frito, beacon, salsa de la casa.", "./img/productoC/c18.jpg"),
];

let ofertas = [
    {
        // titulo: "Aprovecha el Happy Burguer 50% OFF",
        imagen: "./img/promo1.png"
    },
    {
        // titulo: "Celebra con nosotros",
        imagen: "./img/promo2.jpg"
    },
    {
        // titulo: "Solo aca la encontras !!!",
        imagen: "./img/promo3.jpg"
    }
];


// CODIGO FUNCIONAL !!!!!!!


document.addEventListener("DOMContentLoaded", () => {

    let temporizador;
    let modalCompleta = document.querySelector(".modal__propia")
    let fotoModal = document.querySelector(".foto__modal")

    function mostrarOferta() {
        clearTimeout(temporizador)
        let indiceAleatorio = Math.floor(Math.random() * ofertas.length);

        modalCompleta.classList.add("mostrar");
        fotoModal.src = ofertas[indiceAleatorio].imagen

        temporizador = setTimeout(function() {
            modalCompleta.classList.remove("mostrar");
        }, 6000);
        
    }

    mostrarOferta()

    function arreglo(){
        modalCompleta.classList.remove("mostrar")
        mostrarOferta();
    }

    let carritoRecupero = localStorage.getItem("carrito");
    let fondoNaranja = localStorage.getItem("naranja");

    if(carritoRecupero !== null){
        contador.innerText = fondoNaranja
        carrito = JSON.parse(carritoRecupero)
        
        carrito.forEach((productoCarrito) => {
    
            const productoEnLista = gustos.find((el) => {
                return el.id === productoCarrito.id;
            });
    
            if (productoEnLista) {
                productoEnLista.cantidad = productoCarrito.cantidad;
            }
        });
    }
    
    gustos.forEach((hamburguesa, index) => {
        
        let contenedorFinal = document.querySelector(".content-burguer")
        
        let contenedor = document.createElement("div");
        contenedor.setAttribute("class", "content-producto col-12 col-xl-6")

        let container1 = document.createElement("div")
        container1.setAttribute("class", "container-fluid")
        
        let row1 = document.createElement("div")
        row1.setAttribute("class", "producto row")
        
        // MODAL (FUNCIONALIDAD)
        // segun boostrap deberia de ser un elemento buttom el "imagen fondo", pero aunque lo haga un buttom en vez de un div sigue presentando el mismo error
        let imagenFondo = document.createElement("div") //Era un div esto y lo cambie por un buttom
        imagenFondo.setAttribute("class", `hamburguesas--productos producto${i} col-3`)
        imagenFondo.setAttribute("data-bs-toggle", "modal")
        imagenFondo.setAttribute("data-bs-target", "#staticBackdrop")
        
        let contenido = document.createElement("div")
        contenido.setAttribute("class", "contenido col-9")
        
        let container2 = document.createElement("div")
        container2.setAttribute("class", "container-fluid")
        
        //** separacion

        let row2 = document.createElement("div")
        row2.setAttribute("class", "row")

        let titulo3 = document.createElement("h3")
        titulo3.setAttribute("class", "col-xl-12")
        titulo3.innerText = hamburguesa.nombre
        
        let span1 = document.createElement("span")
        span1.setAttribute("class", "col-xl-12 descripcion")
        span1.innerText = hamburguesa.descripcion
        
        let contenido2 = document.createElement("div")
        contenido2.setAttribute("class", "contenido2 d-flex justify-content-center")
        
        //** separacion
        
        let hijo1 = document.createElement("div")
        hijo1.setAttribute("class", "d-flex align-items-center")
        
        let span2 = document.createElement("span")
        span2.setAttribute("class", "precio")
        span2.innerText = hamburguesa.precio
        
        let comprar = document.createElement("div")
        comprar.setAttribute("class", "comprar m-2")
        
        let div1 = document.createElement("div")
        div1.setAttribute("class", "quitar")

        let quitar = document.createElement("span")
        quitar.innerText = "-"
        
        let div2 = document.createElement("div")

        let cantidad = document.createElement("span")
        cantidad.setAttribute("class", "cantidad")
        cantidad.innerText = hamburguesa.cantidad
        
        let div3 = document.createElement("div")
        div3.setAttribute("class", "agregar")
        
        let agregar = document.createElement("span")
        agregar.innerText = "+"

        //*** AGREGO ELEMENTOS A LAS ETIQUETAS

        div3.append(agregar)
        div2.append(cantidad)
        div1.append(quitar)
        comprar.append(div3, div2, div1)

        hijo1.append(comprar, span2)
        contenido2.append(hijo1)

        row2.append(titulo3, span1, contenido2 )
        container2.append(row2)
        contenido.append(container2)
        
        row1.append(imagenFondo, contenido)
        container1.append(row1)
        contenedor.append(container1)
        
        contenedorFinal.append(contenedor)
        i++;

        //*** MODAL DEL PRODUCTO

        imagenFondo.addEventListener("click", function() {

            let titulo = document.querySelector(".cambio")
            let fondoModal = document.getElementById("modal__img")
            let descripcion = document.querySelector(".descripcion")
            let precio = document.querySelector(".precio")
            let tamaño = document.querySelector(".tamaño")

            fondoModal.style.backgroundImage = `url(${hamburguesa.foto})`
            tamaño.innerText = "Hamburguesa " + hamburguesa.tamaño
            titulo.innerText = hamburguesa.nombre + " + PAPAS"
            descripcion.innerText = hamburguesa.descripcion
            precio.innerText = hamburguesa.precio

            // ADICIONALES
            let content_final = document.querySelector(".content__extras")

            let footer = document.querySelector(".modal-footer")

            content_final.innerHTML = ""
            footer.innerHTML = ""

            // 1ª Div
            let content1 = document.createElement("div")
            content1.setAttribute("class", "d-flex justify-content-between")

            let contentn1_div1 = document.createElement("div")

            let contentn1_input = document.createElement("input")
            contentn1_input.setAttribute("type", "checkbox")
            contentn1_input.setAttribute("id", "papas")
            contentn1_input.setAttribute("name", "papas")
            contentn1_input.setAttribute("value", "papas")
            contentn1_input.setAttribute("class", "cheddar__papas me-2")

            let contentn1_label = document.createElement("label")
            contentn1_label.setAttribute("for", "papas")
            contentn1_label.innerText = "Cheddar (papas)"
            
            let contentn1_div2 = document.createElement("div")

            let contentn1_span = document.createElement("span")
            contentn1_span.setAttribute("class", "adicional")
            contentn1_span.innerText = "500"

            contentn1_div2.append(contentn1_span)
            contentn1_div1.append(contentn1_input, contentn1_label)
            content1.append(contentn1_div1, contentn1_div2)

            // 2ª Div
            let content2 = document.createElement("div")
            content2.setAttribute("class", "d-flex justify-content-between")

            let contentn2_div1 = document.createElement("div")

            let contentn2_input = document.createElement("input")
            contentn2_input.setAttribute("type", "checkbox")
            contentn2_input.setAttribute("id", "bacon")
            contentn2_input.setAttribute("name", "bacon")
            contentn2_input.setAttribute("value", "bacon")
            contentn2_input.setAttribute("class", "bacon__papas me-2")

            let contentn2_label = document.createElement("label")
            contentn2_label.setAttribute("for", "bacon")
            contentn2_label.innerText = "Bacon (papas)"

            let contentn2_div2 = document.createElement("div")

            let contentn2_span = document.createElement("span")
            contentn2_span.setAttribute("class", "adicional")
            contentn2_span.innerText = "250"

            contentn2_div2.append(contentn2_span)
            contentn2_div1.append(contentn2_input, contentn2_label)
            content2.append(contentn2_div1, contentn2_div2)

            // 3ª Div
            let content3 = document.createElement("div")
            content3.setAttribute("class", "d-flex justify-content-between")

            let contentn3_div1 = document.createElement("div")

            let contentn3_input = document.createElement("input")
            contentn3_input.setAttribute("type", "checkbox")
            contentn3_input.setAttribute("id", "baconPapas")
            contentn3_input.setAttribute("name", "baconPapas")
            contentn3_input.setAttribute("value", "baconPapas")
            contentn3_input.setAttribute("class", "baconPapas me-2")

            let contentn3_label = document.createElement("label")
            contentn3_label.setAttribute("for", "baconPapas")
            contentn3_label.innerText = "Bacon y Cheddar(papas)"

            let contentn3_div2 = document.createElement("div")

            let contentn3_span = document.createElement("span")
            contentn3_span.setAttribute("class", "adicional")
            contentn3_span.innerText = "650"

            contentn3_div2.append(contentn3_span)
            contentn3_div1.append(contentn3_input, contentn3_label)
            content3.append(contentn3_div1, contentn3_div2)

            // 4ª Div
            let content4 = document.createElement("div")
            content4.setAttribute("class", "d-flex justify-content-between")

            let contentn4_div1 = document.createElement("div")

            let contentn4_input = document.createElement("input")
            contentn4_input.setAttribute("type", "checkbox")
            contentn4_input.setAttribute("id", "papasextras")
            contentn4_input.setAttribute("name", "papasextras")
            contentn4_input.setAttribute("value", "papasextras")
            contentn4_input.setAttribute("class", "papasextras me-2")

            let contentn4_label = document.createElement("label")
            contentn4_label.setAttribute("for", "papasextras")
            contentn4_label.innerText = "Papas extras"

            let contentn4_div2 = document.createElement("div")

            let contentn4_span = document.createElement("span")
            contentn4_span.setAttribute("class", "adicional")
            contentn4_span.innerText = "600"

            contentn4_div2.append(contentn4_span)
            contentn4_div1.append(contentn4_input, contentn4_label)
            content4.append(contentn4_div1, contentn4_div2)

            content_final.append(content1, content2, content3, content4)

            let agrego = document.createElement("button")
            agrego.setAttribute("data-id", hamburguesa.id)
            agrego.setAttribute("type", "button")
            agrego.setAttribute("class", "btn boton__modal agregar2 w-100")
            agrego.innerText = "Agregar al carrito"

            footer.append(agrego)

            //*** EVENTO QUE AGREGA ADICIONALES AL PEDIDO

            let papas = document.querySelector(".cheddar__papas")
            let bacon = document.querySelector(".bacon__papas")
            let bacon2 = document.querySelector(".baconPapas")
            let papasExtras = document.querySelector(".papasextras ")

            let precioCambio = document.querySelector(".precio")

            // Resetea los checkboxes a su estado original
            let cheabox = document.querySelectorAll('input[type="checkbox"]')

            function cambiarAdicional(x, y){
                x.addEventListener("click", function(){
                    let index = preciosAdicionales.indexOf(y)
    
                    if (index === -1) {
                        preciosAdicionales.push(y);
                    } else {
                        preciosAdicionales.splice(index, 1);
                    }
    
                    let totalAdicionales = preciosAdicionales.reduce((total, precio) => total + precio, 0);
                    let resultado = hamburguesa.precio + totalAdicionales;
                    
                    precioCambio.innerText = resultado;
                })
            }

            cambiarAdicional(papas, 500)
            cambiarAdicional(bacon, 250)
            cambiarAdicional(bacon2, 650)
            cambiarAdicional(papasExtras, 600)

            // FUNCION PARA CAMBIAR EL PRECIO DE MI PRODUCTO AL VALOR POR DEFECTO

            function precioNormal(){
                let sumatotal = 0
                let precioFinal;
                for(let i = 0; i < preciosAdicionales.length; i++){
                    sumatotal += preciosAdicionales[i]
                }

                precioFinal = precioCambio.innerText - sumatotal

                // hay que hacer que gustos en la posicion "i". precio valga precio final
                return precioFinal
            }

            // FUNCION PARA AGREGAR ELEMENTOS AL ARREGLO
            let agregar2 = document.querySelector(".agregar2")
            agregar2.addEventListener("click", function(){
                let producto2 = {}
                let producto = hamburguesa
                let id = (hamburguesa.id) - 1
                let precio = parseInt(precioCambio.innerText)
                let productoEnCarrito = carrito.find((el) => el.id === producto.id);

                if(precio !== hamburguesa.precio){
                    producto.precio = precio
                    // Resetea los checkboxes a su estado original
                    cheabox.forEach((el) => {
                        el.checked = false;
                    });

                    producto2 = {
                        ide: hamburguesa.id,
                        nombre: hamburguesa.nombre,
                        precio: hamburguesa.precio,
                        tamaño: hamburguesa.tamaño,
                        cantidad: 1,
                        descripcion: hamburguesa.descripcion,
                        foto: hamburguesa.foto
                    }

                    carrito.push(producto2)
                    producto.precio = precioNormal(id)
                    precioCambio.innerText = producto.precio
                    preciosAdicionales = []

                    // producto.incrementar()

                } else if(productoEnCarrito){
                    producto.incrementar()
                } else {
                    carrito.push(producto)
                    producto.incrementar()
                }

                localStorage.setItem("carrito", JSON.stringify(carrito));
                cambiarCantidad()
    
                iterar[index].innerText = producto.cantidad;
            })

            let añadir = document.createElement("div")
            añadir.setAttribute("class", "añadido")
            añadir.innerText = "Producto añadido al carrito correctamente."
            añadir.style.display = "none"

            
            footer.append(añadir)

            agrego.addEventListener("click", function(){
                setTimeout(function() {
                    añadir.style.display = "block"
                    setTimeout(function() {
                        añadir.style.display = "none"
                    },3000)
                },1000)
            })
        })    
    })

    //______________________ AGREGO Y QUITO ELEMENTOS EN MI CARRITO

    let agregar = document.querySelectorAll(".agregar");
    let quitar = document.querySelectorAll(".quitar");
    let iterar = document.querySelectorAll(".cantidad");
    let final = document.getElementById("contador")

    function cambiarCantidad(){

        let total = 0

        for (let i = 0; i < carrito.length; i++){
            total += carrito[i].cantidad
        }
        localStorage.setItem("naranja", total)
        return final.innerText = total
    }

    agregar.forEach((elemento, index) => {
        elemento.addEventListener("click", function(){

            let producto = gustos[index]
            let productoEnCarrito = carrito.find((el) => el.id === producto.id);

            if(productoEnCarrito){
                producto.incrementar()
            } else {
                carrito.push(producto)
                producto.incrementar()
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));
            cambiarCantidad()

            iterar[index].innerText = producto.cantidad;
        })
    })

    quitar.forEach((elemento, index) => {
        elemento.addEventListener("click", function() {
            
            let producto = gustos[index]

            if (producto.cantidad > 0){
                producto.cantidad--

                if (producto.cantidad === 0) {
                    carrito = carrito.filter(item => item.id !== producto.id);
                }
            } 

            cambiarCantidad()
            localStorage.setItem("carrito", JSON.stringify(carrito));
            iterar[index].innerText = producto.cantidad;
        })
    })

    //______________________ Efectos -- MODO OSCURO

    let inputs = document.querySelectorAll(".formulario input")
    let form = document.querySelector(".formulario")
    let boton2 = document.getElementById("cerrar_compra")
    let botonOscuro = document.querySelector(".boton_oscuro")
    let navPedidos = document.querySelector(".offcanvas ")
    let nav = document.querySelector(".navbar")
    let nav2 = document.querySelector(".contenedor__2")
    let body = document.querySelector("body")
    let descripcion = document.querySelector(".contenedor_descripcion ")
    let parrafos = document.querySelectorAll(".texto__oscuro")
    let carritoIcon = document.getElementById("carrito")
    let descripcionProducto = document.querySelectorAll(".descripcion")
    let modal = document.querySelector(".modal-content")
    let btnOscuro = document.querySelector(".fi-bs-cross")
    let botonModal = document.querySelector(".btn-close-modal")

    let accionar = document.querySelector(".modo-oscuro")

    accionar.addEventListener("click", function(){
        accionar.classList.toggle("modo-oscuro")
        nav.classList.toggle("oscuro3")
        nav2.classList.toggle("oscuro3")
        carritoIcon.classList.toggle("carrito__blanco")

        body.classList.toggle("oscuro")
        descripcion.classList.toggle("oscuro2")
        simple.classList.toggle("textoprimario")
        doble.classList.toggle("textoprimario")
        triple.classList.toggle("textoprimario")
        cuadruple.classList.toggle("textoprimario")
        modal.classList.toggle("carrito__blanco")
        btnOscuro.classList.toggle("btn__oscuro")
        botonModal.classList.toggle("d-none")
        navPedidos.classList.toggle("carrito__blanco")
        botonOscuro.classList.toggle("estado__alterado")
        boton2.classList.toggle("d-none")
        form.classList.toggle("formulario_oscuro")

        inputs.forEach((el) => {
            el.classList.toggle("inputs")
        })

        parrafos.forEach((el) => {
            el.classList.toggle("textosecundario")
        })

        descripcionProducto.forEach((el) => {
            el.classList.toggle("textosecundario")
        })

    })

    //______________________ COMPRAR CARRITO

    let carritoCompra = document.getElementById("carrito");
    let barraComprar = document.querySelector(".contenido_carrito");
    let cambioCero = document.querySelectorAll(".cantidad")
    
    function mensajeVacio (){
        barraComprar.innerHTML = ""  
        let mensaje = document.createElement("h3")
        mensaje.setAttribute("class", "ps-3 texto")
        mensaje.innerText = "Carrito vacio"

        return barraComprar.append(mensaje)
    }

    function vaciar(){
        localStorage.removeItem("carrito")
        barraComprar.innerHTML = ""
        carrito = []
        final.innerText = 0
        gustos.forEach((cambio) => {
            cambio.cantidad = 0
        })

        cambioCero.forEach((cambio) => {
            cambio.innerText = 0
        })

        mensajeVacio ()
    }

    carritoCompra.addEventListener("click", function(){
        
        if (carrito.length < 1) {
            mensajeVacio()
        } else {
            barraComprar.innerHTML = ""  
            carrito.forEach((hamburguesa) => {

                let contenedor_carrito = document.createElement("div")
                contenedor_carrito.setAttribute("class", "container-fluid ps-4 pe-4 mb-4")

                let articulo = document.createElement("div")
                articulo.setAttribute("class", "articulo row")

                let foto = document.createElement("img")
                foto.setAttribute("src", hamburguesa.foto)

                let img = document.createElement("div")
                img.setAttribute("class", `col-5 hamburguesas--productos producto${hamburguesa.id} producto${hamburguesa.ide}`)
                // img.setAttribute("src", hamburguesa.foto) // aca arrlegar el numero
                
                let articulo_info = document.createElement("div")
                articulo_info.setAttribute("class", "articulo_info col-7 container-fluid")
                
                let descripcion = document.createElement("div")
                descripcion.setAttribute("class", "row")
                
                let nombre = document.createElement("h3")
                nombre.setAttribute("class", "col-12")
                nombre.innerText = hamburguesa.nombre + " + PAPAS"// agregar nombre del articulo
            
                let descripcion_articulo = document.createElement("span")
                descripcion_articulo.setAttribute("class", "col-12")
                descripcion_articulo.innerText =  "Burguer " + hamburguesa.tamaño //agregar la descripcion del articulo
            
                let cantidad = document.createElement("span")
                cantidad.setAttribute("class", "col-12 fw-bold")
                cantidad.innerText = "Cantidad: " + hamburguesa.cantidad //agregar la cantidad de productos seleccionados
                
                let total = document.createElement("span")
                total.setAttribute("class", "col-12 fw-bold total")
                total.innerText =  "Total: " + "$" + hamburguesa.precio * hamburguesa.cantidad

                // ARMADO

                descripcion.append(nombre, descripcion_articulo, cantidad, total)
                articulo_info.append(descripcion)
                
                // REVISA EL FOTO.APPEND !!!!!!!!
                articulo.append(img, articulo_info)
                contenedor_carrito.append(articulo)
                barraComprar.append(contenedor_carrito)
                
            })

            let contenedorVaciarComprar = document.createElement("div")
            contenedorVaciarComprar.setAttribute("class", "contenedorVaciarComprar col-12 d-flex justify-content-center")

            let vaciarCarrito = document.createElement("div")
            vaciarCarrito.setAttribute("class", "vaciar col-5")
            vaciarCarrito.setAttribute("id", "vaciar")
            vaciarCarrito.innerText = "Vaciar carrito"
            
            vaciarCarrito.addEventListener("click", function() {
                vaciar()
            });

            //______________________ Vaciar Carrito

            let comprarCarrito = document.createElement("div")
            comprarCarrito.setAttribute("class", "comprarCarrito col-5")
            comprarCarrito.setAttribute("data-bs-toggle", "modal")
            comprarCarrito.setAttribute("data-bs-target", "#finalizar")
            comprarCarrito.innerText = "Comprar"

            // Ventana modal de compra realizada cn exito y su fondo

            let capaRoja = document.querySelector('.capa-roja');
            let segundaVentana = document.querySelector(".modal__espera2");

            comprarCarrito.addEventListener("click", function(){
                let modalBoostrap2 = document.querySelector(".modal-backdrop")
                capaRoja.style.display = 'none';
                segundaVentana.style.display = 'none'; 

                if ((modalBoostrap2.style.display == "none") && (finalizar.style.display == "none")){
                    modalBoostrap2.style.display = "block"
                    finalizar.style.display = "block"
                }

            })
            
            let totalPagar = document.createElement("div")
            totalPagar.setAttribute("class", "total__pagar col-12")
            totalPagar.innerText = "total a pagar es de: $" + sumarTotalPagar() 

            contenedorVaciarComprar.append(comprarCarrito,vaciarCarrito)
            barraComprar.append(totalPagar, contenedorVaciarComprar)

        }
    });

    function sumarTotalPagar(){
        let total = 0 
            
        for (let i = 0; i < carrito.length; i++){
            total += carrito[i].precio * carrito[i].cantidad
        }

        return total
    }

    //______________________ FILTRADO POR TAMAÑO / PRODUCTO

    let simple = document.getElementById("simple");
    let doble = document.getElementById("doble");
    let triple = document.getElementById("triple");
    let cuadruple = document.getElementById("cuadruple");
    let burguers = document.querySelectorAll(".content-producto");

    function mostrar(tamaño) {
        for (let i = 0; i < gustos.length; i++) {
            if (gustos[i].tamaño !== tamaño) {
                burguers[i].style.display = "none";
            } else {
                burguers[i].style.display = "block";
            }
        }
    };

    function filtrar(tamaño, tamaño2){
        tamaño.addEventListener("click", function(){
            mostrar(tamaño2);
            cambiarFondo(tamaño)
            arreglo()
        });
    };

    function cambiarFondo(x){
        simple.classList.remove("fondo_naranja");
        simple.classList.remove("comienzo");
        doble.classList.remove("fondo_naranja");
        triple.classList.remove("fondo_naranja");
        cuadruple.classList.remove("fondo_naranja");
        
        x.classList.add("fondo_naranja");
    };

    mostrar("simple");

    filtrar(cuadruple, "cuadruple");
    filtrar(triple, "triple");
    filtrar(doble, "doble");
    filtrar(simple, "simple");
    
    //______________________ FORMULARIO

    let botones = document.querySelectorAll(".completar")
    let formulario = document.querySelector("#miFormulario")

    // Elementos de la modal de boostrap
    let finalizar = document.getElementById("finalizar")

    botones.forEach((el) => {
        el.addEventListener("mouseover", function(){
            el.classList.add("cambio__borde")
        })
        el.addEventListener("mouseout", function(){
            el.classList.remove("cambio__borde")
        })
    })

    function mostrarCapaRoja(x, y) {
        let capaRoja = document.querySelector('.capa-roja');
        let primeraVentana = document.querySelector(".modal__espera");
        let segundaVentana = document.querySelector(".modal__espera2");
        
        capaRoja.style.display = 'block';
        primeraVentana.style.display = 'block'; 

        setTimeout(function() {
            primeraVentana.style.display = 'none'; 
            setTimeout(function() {
                segundaVentana.style.display = 'block'; 
                setTimeout(function() {
                    //segundaVentana.style.display = 'none'; 
                    //capaRoja.style.display = 'none';
                    // x.style.display = "none"
                    // y.style.display = "none"
                    vaciar(); // Ejecuta la función vaciar()
                }, 1000)
            }, 0)
        },3000)
    }

    formulario.addEventListener("submit", (el) => {

        el.preventDefault(); //Evento que evita que se relogee la pagina despues de enviar algo al formulario
        let modalBoostrap2 = document.querySelector(".modal-backdrop")

        let nombreInput = document.getElementById("nombre");
        let nombre = validarString(nombreInput.value);

        let apellidoInput = document.getElementById("apellido");
        let apellido = validarString(apellidoInput.value);

        let correoInput = document.getElementById("correo");
        let correo = validarString(correoInput.value);

        let direccionInput = document.getElementById("direccion");
        let direccion = validarString(direccionInput.value);

        let alturaInput = document.getElementById("altura");
        let altura = parseInt(validarNumber(alturaInput.value));

        let localidadInput = document.getElementById("localidad");
        let localidad = validarString(localidadInput.value);

        let observacionInput = document.getElementById("observacion");
        let observacion = validarString(observacionInput.value);

        let pagoInput = document.getElementById("pago");
        pago = pagoInput.value

        if(nombre !== null && apellido !== null && correo !== null && direccion !== null && altura !== null && localidad !== null && pago !== null){

            let envio = {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                direccion: direccion,
                altura: altura,
                localidad: localidad,
                observacion: observacion,
                pago: pago,
                compras: carrito
            }

            datos.push(envio)

            correoInput.value = ""
            nombreInput.value = ""
            apellidoInput.value = ""
            direccionInput.value = ""
            alturaInput.value = ""
            localidadInput.value = ""
            observacionInput.value = ""
            pagoInput.value = ""
 
        }
        mostrarCapaRoja(finalizar, modalBoostrap2)

    });
    
    function validarString(x) {
        if (x !== null && x !== undefined && isNaN(x)) {
            return x;
        } else {
            return null;
        }
    }

    function validarNumber(x) {
        if (x !== null && x !== undefined && !isNaN(x)) {
            return x;
        } else {
            return null;
        }
    }
});
