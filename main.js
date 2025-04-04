const option = document.querySelectorAll('.color-option'),
      product = document.querySelector('.product-image'),
      img = document.querySelector('.product-image img');

window.addEventListener('load',()=>{
    product.style.setProperty('--anim', 'scale')
    removeAn()
})


option.forEach(color =>{
    color.addEventListener('click', ()=>{
        img.src = color.attributes['data-img'].nodeValue
        if (color.attributes['data-color'].nodeValue != 'gradient') {
            product.style.setProperty('--after-bg', color.attributes['data-color'].nodeValue )
        }else{
            product.style.setProperty('--after-bg', '#1a64c5' )
        }
        // animation
        product.style.setProperty('--anim', 'scale')
        img.style.setProperty('--anim', 'scale')
        removeAn()
    })
})


function removeAn(){
    setTimeout(()=>{
        product.style.removeProperty('--anim')
        img.style.removeProperty('--anim')
    },500)
}