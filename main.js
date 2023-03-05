/*

// const liUno = document.getElementById("liUno")

const liUno = document.querySelector("#liUno");
liUno.textContent = "Nuevo menu";

//para agregar una clase css es add

const cambiarColores = () => {
    const liUno = document.getElementById("liUno");
    const liDos = document.getElementById("liUno");
    const liTres = document.getElementById("liUno");
    liUno.classList.add("colorVerde");
    
} 


// para quitar una clase css es remove
    const quitarColores = () => {
    const liUno = document.getElementById("liUno");
    const liDos = document.getElementById("liUno");
    const liTres = document.getElementById("liUno");
    liUno.classList.remove("colorVerde");
    }

// se crea una variable para almacenar la etiqueta html se llama la funcion
const agregar = document.querySelector("#agregar")
agregar.addEventListener('click', cambiarColores)

const quitar = document.querySelector("#quitar")
quitar.addEventListener('click', quitarColores)

*/


const agregar = document.querySelector("#agregar")



const body = document.querySelector('body') //con este se selecciona todo el body

const crearMenu = ()=>{
    const nav = document.createElement('nav')
    const ul = document.createElement('ul') //create para crear un elemento
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')

    li1.textContent = 'Menu'
    li2.textContent = 'Servicios'
    li3.textContent = 'Contacto'

    ul.append(li1, li2,li3) //append es una funcion que agrega una etiqueta dentro de otra
    nav.append(ul)
    body.append(nav)

}

agregar.addEventListener('click', crearMenu) 


// BORRAR pero no me funciona
const borrar = document.querySelector("#borrar")

const borrarMenu = () =>{
    const li1 = document.querySelector("li1")
    li1.textContent = ''
    li2.textContent = ''
    li3.textContent = ''
    li1.remove("li1","li2","li3")
}
borrar.addEventListener('click', borrarMenu)

