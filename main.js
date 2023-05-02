
/* Event listner par aver se o DOM carregou antes do JavaScript
 - Um dos problemas enfrentados.
*/
document.addEventListener("DOMContentLoaded", function() {
    // your JavaScript code here
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");
    const texts = document.querySelectorAll(".text");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    
    contents.forEach((content) => {
        content.classList.remove("active");
    });

    texts.forEach((text) => {
        text.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
    texts[manual].classList.add("active");

}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});
  });


    