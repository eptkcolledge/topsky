 AOS.init({
     duration: 800,
     easing: 'slide',
     once: false
 });

 jQuery(document).ready(function($) {

     "use strict";



     var siteMenuClone = function() {

         $('.js-clone-nav').each(function() {
             var $this = $(this);
             $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
         });


         setTimeout(function() {

             var counter = 0;
             $('.site-mobile-menu .has-children').each(function() {
                 var $this = $(this);

                 $this.prepend('<span class="arrow-collapse collapsed">');

                 $this.find('.arrow-collapse').attr({
                     'data-toggle': 'collapse',
                     'data-target': '#collapseItem' + counter,
                 });

                 $this.find('> ul').attr({
                     'class': 'collapse',
                     'id': 'collapseItem' + counter,
                 });

                 counter++;

             });

         }, 1000);

         $('body').on('click', '.arrow-collapse', function(e) {
             var $this = $(this);
             if ($this.closest('li').find('.collapse').hasClass('show')) {
                 $this.removeClass('active');
             } else {
                 $this.addClass('active');
             }
             e.preventDefault();

         });

         $(window).resize(function() {
             var $this = $(this),
                 w = $this.width();

             if (w > 768) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         })

         $('body').on('click', '.js-menu-toggle', function(e) {
             var $this = $(this);
             e.preventDefault();

             if ($('body').hasClass('offcanvas-menu')) {
                 $('body').removeClass('offcanvas-menu');
                 $this.removeClass('active');
             } else {
                 $('body').addClass('offcanvas-menu');
                 $this.addClass('active');
             }
         })

         // click outisde offcanvas
         $(document).mouseup(function(e) {
             var container = $(".site-mobile-menu");
             if (!container.is(e.target) && container.has(e.target).length === 0) {
                 if ($('body').hasClass('offcanvas-menu')) {
                     $('body').removeClass('offcanvas-menu');
                 }
             }
         });
     };
     siteMenuClone();


     var sitePlusMinus = function() {
         $('.js-btn-minus').on('click', function(e) {
             e.preventDefault();
             if ($(this).closest('.input-group').find('.form-control').val() != 0) {
                 $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
             } else {
                 $(this).closest('.input-group').find('.form-control').val(parseInt(0));
             }
         });
         $('.js-btn-plus').on('click', function(e) {
             e.preventDefault();
             $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
         });
     };
     // sitePlusMinus();


     var siteSliderRange = function() {
         $("#slider-range").slider({
             range: true,
             min: 0,
             max: 500,
             values: [75, 300],
             slide: function(event, ui) {
                 $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
             }
         });
         $("#amount").val("$" + $("#slider-range").slider("values", 0) +
             " - $" + $("#slider-range").slider("values", 1));
     };
     // siteSliderRange();


     var siteMagnificPopup = function() {
         $('.image-popup').magnificPopup({
             type: 'image',
             closeOnContentClick: true,
             closeBtnInside: false,
             fixedContentPos: true,
             mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
             gallery: {
                 enabled: true,
                 navigateByImgClick: true,
                 preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
             },
             image: {
                 verticalFit: true
             },
             zoom: {
                 enabled: true,
                 duration: 300 // don't foget to change the duration also in CSS
             }
         });

         $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
             disableOn: 700,
             type: 'iframe',
             mainClass: 'mfp-fade',
             removalDelay: 160,
             preloader: false,

             fixedContentPos: false
         });
     };
     siteMagnificPopup();


     var siteCarousel = function() {
         if ($('.nonloop-block-13').length > 0) {
             $('.nonloop-block-13').owlCarousel({
                 center: false,
                 items: 1,
                 loop: true,
                 stagePadding: 0,
                 autoplay: true,
                 margin: 20,
                 nav: true,
                 dots: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                 responsive: {
                     600: {
                         margin: 20,
                         stagePadding: 0,
                         items: 1
                     },
                     1000: {
                         margin: 20,
                         stagePadding: 0,
                         items: 2
                     },
                     1200: {
                         margin: 20,
                         stagePadding: 0,
                         items: 3
                     }
                 }
             });
         }



         if ($('.nonloop-block-14').length > 0) {
             $('.nonloop-block-14').owlCarousel({
                 center: false,
                 items: 1,
                 loop: true,
                 stagePadding: 0,
                 autoplay: true,
                 margin: 20,
                 nav: true,
                 dots: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                 responsive: {
                     600: {
                         margin: 20,
                         stagePadding: 0,
                         items: 1
                     },
                     1000: {
                         margin: 20,
                         stagePadding: 0,
                         items: 2
                     }

                 }
             });
         }

         if ($('.nonloop-block-15').length > 0) {
             $('.nonloop-block-15').owlCarousel({
                 center: false,
                 items: 1,
                 loop: true,
                 stagePadding: 0,
                 autoplay: true,
                 margin: 20,
                 nav: true,
                 dots: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                 responsive: {
                     600: {
                         margin: 20,
                         stagePadding: 0,
                         items: 1,
                         nav: false,
                         dots: true
                     },
                     1000: {
                         margin: 20,
                         stagePadding: 0,
                         items: 2,
                         nav: true,
                         dots: true
                     },
                     1200: {
                         margin: 20,
                         stagePadding: 0,
                         items: 3,
                         nav: true,
                         dots: true
                     }
                 }
             });
         }

         if ($('.slide-one-item').length > 0) {
             $('.slide-one-item').owlCarousel({
                 center: false,
                 items: 1,
                 loop: true,
                 stagePadding: 0,
                 margin: 0,
                 autoplay: true,
                 pauseOnHover: false,
                 animateOut: 'fadeOut',
                 animateIn: 'fadeIn',
                 nav: true,
                 navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
             });
         }
     };
     siteCarousel();

     var siteStellar = function() {
         $(window).stellar({
             responsive: false,
             parallaxBackgrounds: true,
             parallaxElements: true,
             horizontalScrolling: false,
             hideDistantElements: false,
             scrollProperty: 'scroll'
         });
     };
     siteStellar();

     var siteCountDown = function() {

         if ($('#date-countdown').length > 0) {
             $('#date-countdown').countdown('2022/06/01', function(event) {
                 var $this = $(this).html(event.strftime('' +
                     '<span class="countdown-block"><span class="label">%w</span> недель </span>' +
                     '<span class="countdown-block"><span class="label">%d</span> дней </span>' +
                     '<span class="countdown-block"><span class="label">%H</span> часов </span>' +
                     '<span class="countdown-block"><span class="label">%M</span> минут </span>' +
                     '<span class="countdown-block"><span class="label">%S</span> секунд</span>'));
             });
         }

     };
     siteCountDown();

     var siteDatePicker = function() {

         if ($('.datepicker').length > 0) {
             $('.datepicker').datepicker();
         }

     };
     siteDatePicker();


     var windowScrolled = function() {


         $(window).scroll(function() {

             var $w = $(this),
                 st = $w.scrollTop(),
                 navbar = $('.js-site-navbar');

             if (st > 100) {
                 navbar.addClass('scrolled');
             } else {
                 navbar.removeClass('scrolled');
             }

         })

     }
     windowScrolled();

 });




 //  ПОП-АП ОКНА ДЛЯ КОМНАТ


 const popupLinks = document.querySelectorAll('.popup-link');
 const body = document.querySelector('body');
 const lockPadding = document.querySelectorAll('.lock-padding');

 let unlock = true;

 const timeout = 300;

 if (popupLinks.length > 0) {
     for (let index = 0; index < popupLinks.length; index++) {
         const popupLink = popupLinks[index];
         popupLink.addEventListener("click", function(e) {
             if (popupLink.classList.contains('standart')) {
                 const curentPopup = document.querySelector('.popup__standart');
                 popupOpen(curentPopup);
             } else if (popupLink.classList.contains('family')) {
                 const curentPopup = document.querySelector('.popup__family');
                 popupOpen(curentPopup);
             } else if (popupLink.classList.contains('solo')) {
                 const curentPopup = document.querySelector('.popup__solo');
                 popupOpen(curentPopup);
             } else if (popupLink.classList.contains('delux')) {
                 const curentPopup = document.querySelector('.popup__delux');
                 popupOpen(curentPopup);
             } else if (popupLink.classList.contains('lux')) {
                 const curentPopup = document.querySelector('.popup__lux');
                 popupOpen(curentPopup);
             } else if (popupLink.classList.contains('luxplus')) {
                 const curentPopup = document.querySelector('.popup__luxplus');
                 popupOpen(curentPopup);
             }
             e.preventDefault();
         });
     }
 }

 const popupCloseIcon = document.querySelectorAll('.close-popup');
 if (popupCloseIcon.length > 0) {
     for (let index = 0; index < popupCloseIcon.length; index++) {
         const el = popupCloseIcon[index];
         el.addEventListener("click", function(e) {
             body.classList.remove('lock');
             body.style.paddingRight = '0px';
             if (e.target.closest('.popup')) {
                 const curentPopup = e.target.closest('.popup');
                 curentPopup.classList.remove('open');
             }
             e.preventDefault();
         });
     }
 }

 function popupOpen(curentPopup) {
     if (curentPopup && unlock) {
         const popupActive = document.querySelector('.popup.open');
         if (popupActive) {
             popupClose(popupActive, false);
         } else {
             bodyLock();
         }
         curentPopup.classList.add('open');
         curentPopup.addEventListener("click", function(e) {
             if (!e.target.closest('.popup__content')) {
                 curentPopup.classList.remove('open');
                 body.classList.remove('lock');
                 body.style.paddingRight = '0px';
             }
         });
     }
 }

 function bodyLock() {
     const lockPaddingValue = window.innerWidth - document.querySelector('.site-wrap').offsetWidth + 'px';
     body.style.paddingRight = lockPaddingValue;
     body.classList.add('lock');
     unlock = false;
     setTimeout(function() {
         unlock = true;
     }, timeout);
 }