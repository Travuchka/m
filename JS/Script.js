$(document).ready(function() {
    function ToggleClass_ALL(ClassEl,AddClass) {
        $(ClassEl).toggleClass(AddClass);
    };
    $('.burger-menu').click(function () {
        ToggleClass_ALL('.burger-menu, .menu', 'active');
        ToggleClass_ALL('body', 'lock');
    });
    $('.dr-1').click(function() {
        ToggleClass_ALL('.box-1-hover', 'active');
    });
    $('.dr-2').click(function() {
        ToggleClass_ALL('.box-2-hover', 'active');
    });
    $('.dr-3').click(function() {
        ToggleClass_ALL('.box-3-hover', 'active');
    });
    $('.dr-4').click(function() {
        ToggleClass_ALL('.box-4-hover', 'active');
    });
    $('.dr-5').click(function() {
        ToggleClass_ALL('.box-5-hover', 'active');
    });
    $('.dr-6').click(function() {
        ToggleClass_ALL('.box-6-hover', 'active');
    });
    $('.box-1-t').hover(function() {
        ToggleClass_ALL('.tooltip-1', 'active');
    });
    $('.box-2-t').hover(function() {
        ToggleClass_ALL('.tooltip-2', 'active');
    });
    $('.box-3-t').hover(function() {
        ToggleClass_ALL('.tooltip-3', 'active');
    });
    $('.box-4-t').hover(function() {
        ToggleClass_ALL('.tooltip-4', 'active');
    });
    $('.box-5-t').hover(function() {
        ToggleClass_ALL('.tooltip-5', 'active');
    });
    $('.box-6-t').hover(function() {
        ToggleClass_ALL('.tooltip-6', 'active');
    });
    $('.icon-pinterest').hover(function() {
        ToggleClass_ALL('.icon-pinterest,.icon-pr','active');
    });
    $('.icon-twitter').hover(function() {
        ToggleClass_ALL('.icon-twitter,.icon-tw','active');
    });
    $('.icon-facebook').hover(function() {
        ToggleClass_ALL('.icon-facebook,.icon-fb','active');
    });
    $('.icon-dribbble').hover(function() {
        ToggleClass_ALL('.icon-dribbble,.icon-dl','active');
    });

    $('.home,.about,.works,.services,.team,.testimonial,.contact-us').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        },{
            duration: 1000,
            easing: "swing"
        });
        return false;
    });

    $('.slider-careers').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        swipe:false,
        autoplay:true,
        autoplaySpeed:1250,
        pauseOnFocus:false,
        pauseOnHover:false
    });
    $('.sl-info').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        swipe:false,
        autoplay:true,
        autoplaySpeed:3000,
        infinite:false,
        pauseOnFocus:false,
        pauseOnHover:true
    });
});
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
};

const animItems_1 = document.querySelectorAll('.anim-items-home');
if(animItems_1.length > 0){
    window.addEventListener('scroll', animtoscroll_1);
    function animtoscroll_1() {
        for(let index = 0; index < animItems_1.length; index++){
            const animItem = animItems_1[index];
            const elanim = document.getElementById('link-home');
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            };
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                elanim.classList.add('active');
            }else{
                elanim.classList.remove('active');
            };
        };
    };
    animtoscroll_1();
};
const animItems_2 = document.querySelectorAll('.anim-items-about');
if(animItems_2.length > 0){
    window.addEventListener('scroll', animtoscroll_2);
    function animtoscroll_2() {
        for(let index = 0; index < animItems_2.length; index++){
            const animItem = animItems_2[index];
            const elanim = document.getElementById('link-about');
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            };
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                elanim.classList.add('active');
                // animItem.classList.add('active');
            }else{
                elanim.classList.remove('active');
            };
        };
    };
    animtoscroll_2();
};
const animItems_3 = document.querySelectorAll('.anim-items-work');
if(animItems_3.length > 0){
    window.addEventListener('scroll', animtoscroll_3);
    function animtoscroll_3() {
        for(let index = 0; index < animItems_3.length; index++){
            const animItem = animItems_3[index];
            const elanim = document.getElementById('link-work');
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            };
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                elanim.classList.add('active');
            }else{
                elanim.classList.remove('active');
            };
        };
    };
  animtoscroll_3();
};
const animItems_4 = document.querySelectorAll('.anim-items-services');
if(animItems_4.length > 0){
    window.addEventListener('scroll', animtoscroll_4);
    function animtoscroll_4() {
        for(let index = 0; index < animItems_4.length; index++){
            const animItem = animItems_4[index];
            const elanim = document.getElementById('link-services');
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            };
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                elanim.classList.add('active');
            }else{
                elanim.classList.remove('active');
            };
        };
    };
  animtoscroll_4();
};
const animItems_5 = document.querySelectorAll('.anim-items-team');
if(animItems_5.length > 0){
    window.addEventListener('scroll', animtoscroll_5);
    function animtoscroll_5() {
        for(let index = 0; index < animItems_5.length; index++){
            const animItem = animItems_5[index];
            const elanim = document.getElementById('link-team');
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            };
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                elanim.classList.add('active');
            }else{
                elanim.classList.remove('active');
            };
        };
    };
  animtoscroll_5();
};
const animItems_6 = document.querySelectorAll('.anim-items-testimonial');
if(animItems_6.length > 0){
    window.addEventListener('scroll', animtoscroll_6);
    function animtoscroll_6() {
        for(let index = 0; index < animItems_6.length; index++){
            const animItem = animItems_6[index];
            const elanim = document.getElementById('link-testimonial');
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            };
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                elanim.classList.add('active');
            }else{
                elanim.classList.remove('active');
            };
        };
    };
  animtoscroll_6();
};
const animItems_7 = document.querySelectorAll('.anim-items-contact-us');
if(animItems_7.length > 0){
    window.addEventListener('scroll', animtoscroll_7);
    function animtoscroll_7() {
        for(let index = 0; index < animItems_7.length; index++){
            const animItem = animItems_7[index];
            const elanim = document.getElementById('link-contact-us');
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            };
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                elanim.classList.add('active');
            }else{
                elanim.classList.remove('active');
            };
        };
    };
  animtoscroll_7();
};