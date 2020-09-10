const botonMenu = document.querySelector('.menu'); 
const menu = document.querySelector('.menu-navegation');

//console.log(menu)
//console.log(botonMenu)

botonMenu.addEventListener('click', ()=> {
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=> {
    if (menu.classList.contains('spread') && e.target != menu && e.target != botonMenu) {
       
        menu.classList.toggle("spread")
    }
})