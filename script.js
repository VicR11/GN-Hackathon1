

//Carito de compras
let cantidad = 0;
const botonesAgregar = document.querySelectorAll('.btn-agregar-carrito');
const contador = document.getElementById('cart-count');

botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', () => {
    cantidad++;
    contador.textContent = cantidad;
    
  });
});


// contactenos

document.querySelector('.priority-btn-signup').addEventListener('click', function(event) {
event.preventDefault();
const subscribeModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
subscribeModal.show();
});


document.querySelector('.contacto-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
  });