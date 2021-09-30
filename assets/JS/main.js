!(function($) {
    "use strict";


    // SCROLL DESING

    $(window).scroll(function(){
      var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();

      var scrollPercent = (scroll / (dh-wh)) * 100;
      $('#progressbar').css('height', scrollPercent + '%');

    });

    // SCROLL DESING

    // LEER MAS
    const mas = document.getElementById('mas');
    const desplegar = document.getElementById('desplegar');
    var ancho = screen.width;

    mas.addEventListener('click', (e) => {
      e.preventDefault();
      desplegar.style.display = 'inline';
      mas.style.display = 'none';
    });

    desplegar.addEventListener('click', (e) => {
      e.preventDefault();
      desplegar.style.display = 'none';
      mas.style.display = 'inline';
      if ( ancho < 800) {
        window.scroll({
          top: 1050,
          behavior: 'smooth'
        });
      }
    });
    // LEER MAS


    // BUTTON MUSIC
    const player = document.querySelector('.btn-music');
    const audio = document.querySelector('audio');

    var sound = false;

    player.addEventListener('click', () => {
        if( sound == false ){
            reproducir();
        }else{
            pausar();
        }
    });

    function reproducir(){
        player.classList.add('active');
        player.innerHTML = 
        `
        <div class="popout-messag">Detener</div>
        <i class="icofont-ui-pause"></i>
        `;
        audio.play();
        sound = true;
    }

    function pausar(){
        player.classList.remove('active');
        player.innerHTML = `
        <div class="popout-messag">Reproducir</div>
        <i class="icofont-ui-play"></i>
        `;
        audio.pause();
        sound = false;
    }
    // BUTTON MUSIC

    //Disable cut copy paste
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
  
    //Disable mouse right click
    $("body").on("contextmenu",function(e){
        return false;
    });

    // Nav Menu
    $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var hash = this.hash;
        var target = $(hash);
        if (target.length) {
          e.preventDefault();
  
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if (hash == '#header') {
            $('#header').removeClass('header-top');
            $("section").removeClass('section-show');
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
              $('.mobile-nav-overly').fadeOut();
            }
            return;
          }
  
          if (!$('#header').hasClass('header-top')) {
            $('#header').addClass('header-top');
            setTimeout(function() {
              $("section").removeClass('section-show');
              $(hash).addClass('section-show');
  
            }, 350);
          } else {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }
  
          $('html, body').animate({
            scrollTop: 0
          }, 350);
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
  
          return false;
  
        }
      }
    });

    /* TYPING ANIMATION SCRIPT */
    var typed = new Typed(".typing",{
      strings: [" Diseño Web", " Programación", " Informatica", " Desarrollo web", " Marketing digital", " Sistemas"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    // Activate/show sections on load with hash links
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        $('#header').addClass('header-top');
        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
        setTimeout(function() {
          $("section").removeClass('section-show');
          $(initial_nav).addClass('section-show');
        }, 350);
      }
    }
  
    // Mobile Navigation
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none animate__animated animate__fadeInUpBig"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
  
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
      });
  
      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
  
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
  
    // Skills section
    $('.skills-content').waypoint(function() {
      $('.progress .progress-bar').each(function() {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
    }, {
      offset: '80%'
    });
  
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        900: {
          items: 3
        }
      }
    });
  
    // Porfolio isotope and filter
    $(window).on('load', function() {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
  
      $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
  
        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });
  
    });
  
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  
    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  
  })(jQuery);