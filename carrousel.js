/* CARROUSEL */
var imagenes = ['carrousel/frase.jpg','carrousel/zapas.jpg','carrousel/sumergido.jpg'],
    cont = 0;

function carrouselweb(carrousel){
    carrousel.addEventListener('click', e => {
        let atras = carrousel.querySelector('.atras');
        let adelante =  carrousel.querySelector('.adelante');
        let img = carrousel.querySelector('img');
        let activador = e.target;

        if(activador == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            } else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if(activador == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            } else{ 
                img.src = imagenes[0];
                cont = 0;
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let carrousel = document.querySelector('.carrousel');
    carrouselweb(carrousel);
})
