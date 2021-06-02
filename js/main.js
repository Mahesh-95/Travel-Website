var menuBar = document.getElementById('menu-bar');
var menuClose = document.getElementById('menu-close');
var menu = document.getElementById('menu');
var aboutImg1 = document.querySelector('.about-img1');
var aboutImg2 = document.querySelector('.about-img2');  

menuBar.addEventListener('click', ()=>{
    menu.style.transform = "translateX(0)";
});

menuClose.addEventListener('click', ()=>{
    menu.style.transform = "translateX(100%)";
});

if(aboutImg1 != null){
window.onscroll = function()  {
    scrollFunction();
};
}
function scrollFunction(){
    if((document.body.scrollTop > 500 && document.body.scrollTop < 1000) || (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1000)){
        aboutImg1.style.transform = "translateY(0)";
        aboutImg2.style.transform = "translateY(0)";
        aboutImg1.style.borderRadius = "10px 0 0 10px";
        aboutImg2.style.borderRadius = "0 10px 10px 0";
    }else{
        aboutImg1.style.transform = "translateY(-50px)";
        aboutImg2.style.transform = "translateY(50px)";
        aboutImg1.style.borderRadius = "0";
        aboutImg2.style.borderRadius = "0";
    }
}
/* Owl Carousel */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    borderRadius: 10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: true
        },
        500:{
            items:2,
            nav: false
        },
        1024:{
            items:3,
            nav:true,
        }
    }
})