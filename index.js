const añadirCarritoVolta = document.querySelector(".carrito__volta");
const añadirCarritoScott = document.querySelector(".carrito__scott");
const añadirCarritoVenzo = document.querySelector(".carrito__venzo");
const añadirCarritoMoove = document.querySelector(".carrito__moove");
const añadirCarritoRaleigh = document.querySelector(".carrito__raleigh");
const añadirCarritoTeknial = document.querySelector(".carrito__teknial");
const añadirCarritoTopmega = document.querySelector(".carrito__topmega");

const h2Carrito = document.querySelector(".h2carrito2");
const h2Carrito3 = document.querySelector(".h2carrito3");
const h2Carrito4 = document.querySelector(".h2carrito4");
const h2Carrito5 = document.querySelector(".h2carrito5");
const h2Carrito6 = document.querySelector(".h2carrito6");
const h2Carrito7 = document.querySelector(".h2carrito7");
const h2Carrito8 = document.querySelector(".h2carrito8");

const h2Cantidad2 = document.querySelector(".h2Cantidad2");
const h2Cantidad3 = document.querySelector(".h2Cantidad3");
const h2Cantidad4 = document.querySelector(".h2Cantidad4");
const h2Cantidad5 = document.querySelector(".h2Cantidad5");
const h2Cantidad6 = document.querySelector(".h2Cantidad6");
const h2Cantidad7 = document.querySelector(".h2Cantidad7");
const h2Cantidad8 = document.querySelector(".h2Cantidad8");
const h2Cantidad9 = document.querySelector(".h2Cantidad9");
const h4CantidadTotal = document.querySelector(".h4CantidadTotal");

const divFoto = document.querySelector(".foto");
const divFoto3 = document.querySelector(".foto3");
const divFoto4 = document.querySelector(".foto4");
const divFoto5 = document.querySelector(".foto5");
const divFoto6 = document.querySelector(".foto6");
const divFoto7 = document.querySelector(".foto7");
const divFoto8 = document.querySelector(".foto8");


const divCarrito = document.querySelector("#divCarrito");


const productos = [
    {
        producto: "bicicleta Volta",
        precio: 150000,
    },
    {
        producto: "bicicleta Scott",
        precio: 300000,
    },
    {
        producto: "bicicleta Venzo",
        precio: 350000,
    },
    {
        producto: "bicicleta Moove",
        precio: 100000,
    },
    {
        producto: "bicicleta Raleigh",
        precio: 170000,
    },
    {
        producto: "bicicleta Teknial",
        precio: 90000,
    },
    {
        producto: "bicicleta Topmega",
        precio: 75000,
    }
]

const carrito = [

]

let numero = 0;

añadirCarritoVolta.addEventListener("click", funcionAgregar1);
function funcionAgregar1(){
    carrito.push(productos[0]);
    const buscarBici = carrito.filter((el) => el.producto === "bicicleta Volta");
    const sumaBicis = buscarBici.map((e) => e.precio);
    const totalBicis = sumaBicis.reduce((acc, el) => acc + el, 0);
    divFoto.innerHTML= "<img src='../img/bici volta bimax.png' class='medida'></img>" ;
    h2Carrito.innerHTML = "Precio: " + "$" + totalBicis ;

    numero ++;
    añadirCarritoVolta.value = numero;
    h2Cantidad2.innerHTML= "Cantidad: " + numero ;

    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Cantidad9.innerHTML = "Precio total: $" + precioTotal ;

    const sumaDeCantidad = numero + numero1 + numero2 + numero3 + numero4 + numero5 + numero6 ;
    h4CantidadTotal.innerHTML = sumaDeCantidad ;

    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: true,
        timer: 1000
      })
}


let numero1 = 0;

añadirCarritoScott.addEventListener("click", funcionAgregar2);
function funcionAgregar2(){
    carrito.push(productos[1]);
    const buscarBici = carrito.filter((el) => el.producto === "bicicleta Scott");
    const sumaBicis = buscarBici.map((e) => e.precio);
    const totalBicis = sumaBicis.reduce((acc, el) => acc + el, 0);
    divFoto3.innerHTML= "<img src='../img/bici scott bimax.png' class='medida'></img>" ;
    h2Carrito3.innerHTML = "Precio: " + "$" + totalBicis ;

    numero1 ++;
    añadirCarritoScott.value = numero1;
    h2Cantidad3.innerHTML= "Cantidad: " + numero1 ;

    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Cantidad9.innerHTML = "Precio total: $" + precioTotal ;

    const sumaDeCantidad = numero + numero1 + numero2 + numero3 + numero4 + numero5 + numero6 ;
    h4CantidadTotal.innerHTML = sumaDeCantidad ;

    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: true,
        timer: 1000
      })
}


let numero2 = 0;

añadirCarritoVenzo.addEventListener("click", funcionAgregar3);
function funcionAgregar3(){
    carrito.push(productos[2]);
    const buscarBici = carrito.filter((el) => el.producto === "bicicleta Venzo");
    const sumaBicis = buscarBici.map((e) => e.precio);
    const totalBicis = sumaBicis.reduce((acc, el) => acc + el, 0);
    divFoto4.innerHTML= "<img src='../img/bici venzo bimax.png' class='medida'></img>" ;
    h2Carrito4.innerHTML = "Precio: " + "$" + totalBicis ;

    numero2 ++;
    añadirCarritoVenzo.value = numero2;
    h2Cantidad4.innerHTML= "Cantidad: " + numero2 ;

    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Cantidad9.innerHTML = "Precio total: $" + precioTotal ;

    const sumaDeCantidad = numero + numero1 + numero2 + numero3 + numero4 + numero5 + numero6 ;
    h4CantidadTotal.innerHTML = sumaDeCantidad ;

    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: true,
        timer: 1000
      })
}

let numero3 = 0;

añadirCarritoMoove.addEventListener("click", funcionAgregar4);
function funcionAgregar4(){
    carrito.push(productos[3]);
    const buscarBici = carrito.filter((el) => el.producto === "bicicleta Moove");
    const sumaBicis = buscarBici.map((e) => e.precio);
    const totalBicis = sumaBicis.reduce((acc, el) => acc + el, 0);
    divFoto5.innerHTML= "<img src='../img/bici moove bimax.png' class='medida'></img>" ;
    h2Carrito5.innerHTML = "Precio: " + "$" + totalBicis ;

    numero3 ++;
    añadirCarritoMoove.value = numero3;
    h2Cantidad5.innerHTML= "Cantidad: " + numero3 ;

    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Cantidad9.innerHTML = "Precio total: $" + precioTotal ;

    const sumaDeCantidad = numero + numero1 + numero2 + numero3 + numero4 + numero5 + numero6 ;
    h4CantidadTotal.innerHTML = sumaDeCantidad ;

    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: true,
        timer: 1000
      })
}

let numero4 = 0;

añadirCarritoRaleigh.addEventListener("click", funcionAgregar5);
function funcionAgregar5(){
    carrito.push(productos[4]);
    const buscarBici = carrito.filter((el) => el.producto === "bicicleta Raleigh");
    const sumaBicis = buscarBici.map((e) => e.precio);
    const totalBicis = sumaBicis.reduce((acc, el) => acc + el, 0);
    divFoto6.innerHTML= "<img src='../img/bici rale bimax.png' class='medida'></img>" ;
    h2Carrito6.innerHTML = "Precio: " + "$" + totalBicis ;

    numero4 ++;
    añadirCarritoRaleigh.value = numero4;
    h2Cantidad6.innerHTML= "Cantidad: " + numero4 ;

    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Cantidad9.innerHTML = "Precio total: $" + precioTotal ;

    const sumaDeCantidad = numero + numero1 + numero2 + numero3 + numero4 + numero5 + numero6 ;
    h4CantidadTotal.innerHTML = sumaDeCantidad ;

    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: true,
        timer: 1000
      })
}

let numero5 = 0;

añadirCarritoTeknial.addEventListener("click", funcionAgregar6);
function funcionAgregar6(){
    carrito.push(productos[5]);
    const buscarBici = carrito.filter((el) => el.producto === "bicicleta Teknial");
    const sumaBicis = buscarBici.map((e) => e.precio);
    const totalBicis = sumaBicis.reduce((acc, el) => acc + el, 0);
    divFoto7.innerHTML= "<img src='../img/bici teknial bimax.png' class='medida'></img>" ;
    h2Carrito7.innerHTML = "Precio: " + "$" + totalBicis ;

    numero5 ++;
    añadirCarritoTeknial.value = numero5;
    h2Cantidad7.innerHTML= "Cantidad: " + numero5 ;

    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Cantidad9.innerHTML = "Precio total: $" + precioTotal ;

    const sumaDeCantidad = numero + numero1 + numero2 + numero3 + numero4 + numero5 + numero6 ;
    h4CantidadTotal.innerHTML = sumaDeCantidad ;

    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: true,
        timer: 1000
      })
}


let numero6 = 0;

añadirCarritoTopmega.addEventListener("click", funcionAgregar7);
function funcionAgregar7(){
    carrito.push(productos[6]);
    const buscarBici = carrito.filter((el) => el.producto === "bicicleta Topmega");
    const sumaBicis = buscarBici.map((e) => e.precio);
    const totalBicis = sumaBicis.reduce((acc, el) => acc + el, 0);
    divFoto8.innerHTML= "<img src='../img/bici topmega bimax.png' class='medida'></img>" ;
    h2Carrito8.innerHTML = "Precio: " + "$" + totalBicis ;

    numero6 ++;
    añadirCarritoTopmega.value = numero6;
    h2Cantidad8.innerHTML= "Cantidad: " + numero6 ;

    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Cantidad9.innerHTML = "Precio total: $" + precioTotal ;

    const sumaDeCantidad = numero + numero1 + numero2 + numero3 + numero4 + numero5 + numero6 ;
    h4CantidadTotal.innerHTML = sumaDeCantidad ;

    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Añadido al carrito',
        showConfirmButton: true,
        timer: 1000
      })
}



const logoCarrito = document.querySelector("#logo__carro-blanco");

const header = document.querySelector("#header");
const seccionMayor = document.querySelector(".seccionCarritoMayor")


logoCarrito.addEventListener("click", funcionAparecer);
function funcionAparecer(){
    if(seccionMayor.classList.contains('displayNone')){
        seccionMayor.classList.remove('displayNone');
    }
    else(
        seccionMayor.classList.add('displayNone')
    );
}




