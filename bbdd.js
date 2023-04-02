const aleatorio = () => {
  const key = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);
  return key + random;
};
let inventarioBBDD = [
  {
    nombre: "Pastel 1",
    descripcion: "Un pastel rico y chocolatoso",
    precio: 300,
    img: "assets/pastel1.webp",
    key: aleatorio(),
  },
  {
    nombre: "Pastel 2",
    descripcion: "Tarta de manzada y uvas",
    precio: 300,
    img: "assets/pastel2.webp",
    key: aleatorio(),
  },
  {
    nombre: "Pastel 3",
    descripcion: "Pastel de queso suizo dulce",
    precio: 300,
    img: "assets/pastel3.webp",
    key: aleatorio(),
  },
]
