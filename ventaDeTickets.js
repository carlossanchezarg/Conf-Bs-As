const descuentos = { estudiante: 0.2, trainee: 0.5, junior: 0.85 };

let carrito = {
  estudiante: 0,
  trainee: 0,
  junior: 0,
  total: function (precio) {
    return (
      precio *
      (carrito.estudiante * descuentos.estudiante +
        carrito.trainee * descuentos.trainee +
        carrito.junior * descuentos.junior)
    );
  },
};

function comprarTickets(precio) {
  let categ = document.getElementById("catComprador").value;
  let cant = document.getElementById("cantTickets").value;
  if (categ == 1) {
    carrito.estudiante = cant;
  } else if (categ == 2) {
    carrito.trainee = cant;
  } else if (categ == 3) {
    carrito.junior = cant;
  } else {
    alert("Debe seleccionar una categoria!");
  }
  mostrarCompra(carrito, precio);
}

function mostrarCompra(carrito, precio) {
  let total = carrito.total(precio);
  let items =
    (carrito.estudiante == 0
      ? ""
      : "<h6>" +
        carrito.estudiante.toString() +
        "x Estudiante/s: " +
        " $" +
        (200 * carrito.estudiante * descuentos.estudiante).toString() +
        " <del>($" +
        (200 * carrito.estudiante).toString() +
        ")</del> " +
        (descuentos.estudiante * 100 - 100).toString() +
        " % OFF </h6>") +
    (carrito.trainee == 0
      ? ""
      : "<h6>" +
        carrito.trainee.toString() +
        "x Trainee/s: " +
        "    $" +
        (200 * carrito.trainee * descuentos.trainee).toString() +
        " <del>($" +
        (200 * carrito.trainee).toString() +
        ")</del> " +
        (descuentos.trainee * 100 - 100).toString() +
        " % OFF </h6>") +
    (carrito.junior == 0
      ? ""
      : "<h6>" +
        carrito.junior.toString() +
        "x Junior/s: " +
        "   $" +
        (200 * carrito.junior * descuentos.junior).toString() +
        " <del>($" +
        (200 * carrito.junior).toString() +
        ")</del> " +
        (descuentos.junior * 100 - 100).toString() +
        " % OFF </h6>");

  let resumen =
    items + "<h5>Total a pagar: $ " + total.toFixed(0).toString() + "</h5>";
  document.getElementById("totalApagar").innerHTML = resumen;
}

function reiniciarCarrito() {
  document.getElementById("totalApagar").innerHTML = "Total a pagar: $";
  document.getElementById("cantTickets").value = 1;
  document.getElementById("catComprador").value = 1;
  carrito.estudiante = 0;
  carrito.trainee = 0;
  carrito.junior = 0;
}
