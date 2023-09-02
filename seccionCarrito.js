const pantallaDeCarro = document.querySelector("#logo__carro-blanco");
const divCarrito = document.querySelector(".divCarrito");

pantallaDeCarro.addEventListener("click", funcionAparecer);

function funcionAparecer(){
    divCarrito.classList.remove('seccionCarrito');
}
