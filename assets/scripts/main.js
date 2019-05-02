/*
// Hola Mundo.
console.log("Hola mundo");

// DOM. document.querySelector("a")
let links = document.querySelectorAll("a");
console.log(links);

// Function.
links.forEach(function(links){
  console.log(links);
});

// Eventos.
let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
  td.addEventListener("click", function(){
    console.log(this); // ":D"
  });
});

// Eventos por defecto.
let close = document.querySelectorAll("a");
close.forEach(function(link){
  link.addEventListener("click", function(ev){
    // Modifica el evento por defecto, cambiando su
    // comportamiento. Descomentar para provar.
    //ev.preventDefault();
    //return false;
  });
});

// Quitar y agragar clases a un elemento con JavaScript.
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
  icono.classList.remove("far");
  icono.classList.add("fa");
});
*/

// Alterar las clases.
let close = document.querySelectorAll(".close");
close.forEach(function(link){
  link.addEventListener("click", function(ev){
    ev.preventDefault();
    let animate = document.querySelector(".content");
    // Quitarle las clases de animacion que tiene.
    animate.classList.remove("fadeInDown");
    animate.classList.remove("animated");
    // Agregar clases para animar su salida.
    animate.classList.add("fadeOutUp");
    animate.classList.add("animated");
    // setTimeout: Se ejecuta una vez. setInterval: Se ejecuta varias
    // Veces.
    setTimeout(function(){
      location.href = "/";
    },600);
  });
});
