const target = document.querySelectorAll('#nav-principal');
const fixar = 'menu-fixo';

function menuFixo(){
    const windowTop = window.pageYOffset;
    target.forEach(function(element){
        if((windowTop)> (element.offsetTop)){
            element.classList.add(fixar);
        }
        else{
            element.classList.remove(fixar);
        }
    })
}
menuFixo();
if(target.length){
    window.addEventListener('scroll', function(){
        menuFixo();
    })
}

