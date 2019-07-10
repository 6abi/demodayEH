const target = document.querySelectorAll('#nav-principal');
const target2 = document.querySelectorAll('[data-anime]');

const fixar = 'menu-fixo';
const animationClass = 'animate';

function menuFixo(){
    const windowTop = window.pageYOffset;
    target.forEach(function(element) {
        if((windowTop)> (element.offsetTop)){
            element.classList.add(fixar);
        }
        else{
            element.classList.remove(fixar);
        }
    })
}
window.addEventListener('scroll', function(){
    menuFixo();
})

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight*3)/4);
    target2.forEach(function(element){
        if((windowTop)> (element.offsetTop)){
            element.classList.add(animationClass);
        }
        // else{
        //     element.classList.remove(animationClass);
        // }
    })
}
animeScroll();
if(target2.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}
else if(target2.length){
    window.addEventListener('click', function(){
        animeScroll();
    })
}






