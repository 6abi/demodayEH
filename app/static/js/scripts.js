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
        else{
            element.classList.remove(animationClass);
        }
    })
}
animeScroll();
if(target2.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}

// function slide1(){
//     document.getElementById('header').src="/images/banner/img4";
//     setTimeout("slide2()", 2000)
// }
      
// function slide2(){
//     document.getElementById('header').src="/images/banner/img5.jpg";
//     setTimeout("slide3()", 2000)
// }
      
// function slide3(){
//     document.getElementById('header').src="/images/banner/img6.jpg";
//     setTimeout("slide1()", 2000)
// }
