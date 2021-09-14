    "use strict";

    /* TYPING ANIMATION SCRIPT */
    var typed = new Typed(".typing_preloader",{
        strings: ["Cargado por favor espere...", "No tomara mucho tiempo.."],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    var loader = document.getElementById("preloader");
    var header = document.getElementById("header");
    var nav = document.getElementById("nav");

    window.addEventListener("load", function(){
        loader.style.display = "none";
        header.classList.remove("hidden");
    });