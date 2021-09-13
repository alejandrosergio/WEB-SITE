    "use strict";

    /* TYPING ANIMATION SCRIPT */
    var typed = new Typed(".typing_preloader",{
        strings: ["Cargado por favor espere...", "No tomara mucho tiempo.."],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    var loader = document.getElementById("preloader");

    window.addEventListener("load", function(){
        loader.style.display = "none";
    });