$(document).ready(function(){
    $(".menu").click(function(){
        $(".nav-cont").toggleClass("bars");
        // $(".nav-book-hotel").slideToggle();
    })
    $(".arrow").click(function(){

        $(".option-div-nav").slideToggle();
    })
    $(".bars").click(function(){
        
         $(".nav-2-links").toggleClass("menu");
    })
    
   
})
AOS.init();
