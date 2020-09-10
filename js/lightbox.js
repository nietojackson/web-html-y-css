const images = document.querySelectorAll('.img-gallery');
const imagesLight = document.querySelector('.add-image');
const containerLight = document.querySelector('.image-light');
const botonMenu1 = document.querySelector('.menu'); 


images.forEach(image => {
    image.addEventListener('click', ()=>{
        
        showImage(image.getAttribute('src'))
    })
})

containerLight.addEventListener('click', (e)=>{
    if (e.target != imagesLight)
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('show-image')
    botonMenu1.style.opacity = '1'
})

const showImage = (image)=> {
    imagesLight.src = image;
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('show-image')
    botonMenu1.style.opacity = '0'

}
