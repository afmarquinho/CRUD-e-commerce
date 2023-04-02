const aleatorio = () => {
  const key = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);
  return key + random;
};
let local = JSON.parse(localStorage.getItem('inventarioBBDD'))
let inventarioBBDD = local;