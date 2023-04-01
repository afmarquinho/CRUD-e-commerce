const aleatorio = () => {
    const key = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return key + random;
  };
  aleatorio();


let inventarioBBDD = [
  {
    nombre: "Pastel 1",
    descripcion: "Pastel de Chocolate con mayonesa",
    precio: 300,
    img:'assets/pastel1.webp',
    key: aleatorio()
  }
];
