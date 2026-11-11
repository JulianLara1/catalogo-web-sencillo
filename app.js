// Datos de ejemplo (ficticios)
const productos = [
  { nombre: "Teclado", categoria: "Accesorios", precio: 45000 },
  { nombre: "Mouse inalámbrico", categoria: "Accesorios", precio: 25000 },
  { nombre: "Monitor 24\"", categoria: "Pantallas", precio: 520000 },
  { nombre: "Disco SSD 480GB", categoria: "Almacenamiento", precio: 160000 },
  { nombre: "Memoria RAM 8GB", categoria: "Componentes", precio: 120000 },
  { nombre: "Fuente de poder 500W", categoria: "Componentes", precio: 180000 },
];

const lista = document.getElementById("lista");
const buscar = document.getElementById("buscar");
const categoria = document.getElementById("categoria");
const contador = document.getElementById("contador");

const pesos = (v) => "$" + v.toLocaleString("es-CO");

// Llenar el selector con las categorías sin repetir
[...new Set(productos.map((p) => p.categoria))].forEach((c) => {
  categoria.add(new Option(c, c));
});

function mostrar() {
  const texto = buscar.value.trim().toLowerCase();
  const filtrados = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(texto) &&
      (!categoria.value || p.categoria === categoria.value)
  );
  lista.innerHTML = "";
  filtrados.forEach((p) => {
    const div = document.createElement("article");
    div.className = "tarjeta";
    div.innerHTML = `<h3></h3><div class="cat"></div><div class="precio"></div>`;
    div.querySelector("h3").textContent = p.nombre;
    div.querySelector(".cat").textContent = p.categoria;
    div.querySelector(".precio").textContent = pesos(p.precio);
    lista.appendChild(div);
  });
  contador.textContent = `${filtrados.length} producto(s)`;
}

buscar.addEventListener("input", mostrar);
categoria.addEventListener("change", mostrar);
mostrar();
