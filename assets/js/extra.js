// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("gotoTop").style.display = "block";
	} else {
		document.getElementById("gotoTop").style.display = "none";
	}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	$('html, body').animate({scrollTop:0}, 'slow');
}
var timeOnEachText1 = 2000; // Milliseconds to spend on each before moving to next
var text1 = [' Azimjon ', ' Problem ', 'Web'];
var counter1 = 0;
var elem1 = document.getElementById("fadeOne");
function changeOne() {
  jQuery(elem1).delay(timeOnEachText1).fadeTo(2000, 0, function() {
	this.innerHTML = text1[counter1];
	counter1 = ++counter1 % text1.length;
	jQuery(this).fadeTo(2000, 1, changeOne)
  })
}
changeOne();

var timeOnEachText2 = 2000; // Milliseconds to spend on each before moving to next
var text2 = ['Kamolov', ' Solver ', 'Developer'];
var counter2 = 0;
var elem2 = document.getElementById("fadeTwo");
function changeTwo() {
  jQuery(elem2).delay(timeOnEachText2).fadeTo(2000, 0, function() {
	this.innerHTML = text2[counter2];
	counter2 = ++counter2 % text2.length;
	jQuery(this).fadeTo(2000, 1, changeTwo)
  })
}
changeTwo();



(function($) {

    "use strict";

    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* Preloader
    * -------------------------------------------------- */
    var clPreloader = function() {

        $("html").addClass('cl-preload');

        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');

        });
    };


   /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var clMenuOnScrolldown = function() {

        var menuTrigger = $('.header-menu-toggle');

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            }
            else {
                menuTrigger.removeClass('opaque');
            }

        });
    };


   /* OffCanvas Menu
    * ------------------------------------------------------ */
    var clOffCanvas = function() {

        var menuTrigger     = $('.header-menu-toggle'),
            nav             = $('.header-nav'),
            closeButton     = nav.find('.header-nav__close'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            // menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e){
            if( !$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span') ) {
                // menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });

    };


   /* photoswipe
    * ----------------------------------------------------- */
    var clPhotoswipe = function() {
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.item-folio');

            // get items
            $folioItems.each( function(i) {

                var $folio = $(this),
                    $thumbLink =  $folio.find('.thumb-link'),
                    $title = $folio.find('.item-folio__title'),
                    $caption = $folio.find('.item-folio__caption'),
                    $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                    $captionText = $.trim($caption.html()),
                    $href = $thumbLink.attr('href'),
                    $size = $thumbLink.data('size').split('x'),
                    $width  = $size[0],
                    $height = $size[1];

                var item = {
                    src  : $href,
                    w    : $width,
                    h    : $height
                }

                if ($caption.length > 0) {
                    item.title = $.trim($titleText + $captionText);
                }

                items.push(item);
            });

            // bind click event
            $folioItems.each(function(i) {

                $(this).on('click', function(e) {
                    e.preventDefault();
                    var options = {
                        index: i,
                        showHideOpacity: true
                    }

                    // initialize PhotoSwipe
                    var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                    lightBox.init();
                });

            });

    };


   /* Stat Counter
    * ------------------------------------------------------ */
    var clStatCount = function() {

        var statSection = $(".about-stats"),
            stats = $(".stats__count");

        statSection.waypoint({

            handler: function(direction) {

                if (direction === "down") {

                    stats.each(function () {
                        var $this = $(this);

                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });

                }

                // trigger once only
                this.destroy();

            },

            offset: "90%"

        });
    };


   /* Masonry
    * ---------------------------------------------------- */
    var clMasonryFolio = function () {

        var containerBricks = $('.masonry');

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                resize: true
            });
        });
    };


   /* slick slider
    * ------------------------------------------------------ */
    var clSlickSlider = function() {

        $('.clients').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            //autoplay: true,
            pauseOnFocus: false,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }

            ]
        });

        $('.testimonials').slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });

    };

   /* Smooth Scrolling
    * ------------------------------------------------------ */
    var clSmoothScroll = function() {

        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);

                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };


   /* Placeholder Plugin Settings
    * ------------------------------------------------------ */
    var clPlaceholder = function() {
        $('input, textarea, select').placeholder();
    };


   /* Alert Boxes
    * ------------------------------------------------------ */
    var clAlertBoxes = function() {

        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        });

    };


   /* Contact Form
    * ------------------------------------------------------ */
    var clContactForm = function() {

        /* local validation */
        $('#contactForm').validate({

            /* submit via ajax */
            submitHandler: function(form) {

                var sLoader = $('.submit-loader');

                $.ajax({

                    type: "POST",
                    url: "inc/sendEmail.php",
                    data: $(form).serialize(),
                    beforeSend: function() {

                        sLoader.slideDown("slow");

                    },
                    success: function(msg) {

                        // Message was sent
                        if (msg == 'OK') {
                            sLoader.slideUp("slow");
                            $('.message-warning').fadeOut();
                            $('#contactForm').fadeOut();
                            $('.message-success').fadeIn();
                        }
                        // There was an error
                        else {
                            sLoader.slideUp("slow");
                            $('.message-warning').html(msg);
                            $('.message-warning').slideDown("slow");
                        }

                    },
                    error: function() {

                        sLoader.slideUp("slow");
                        $('.message-warning').html("Something went wrong. Please try again.");
                        $('.message-warning').slideDown("slow");

                    }

                });
            }

        });
    };


   /* Animate On Scroll
    * ------------------------------------------------------ */
    var clAOS = function() {

        AOS.init( {
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };


   /* AjaxChimp
    * ------------------------------------------------------ */
    var clAjaxChimp = function() {

        $('#mc-form').ajaxChimp({
            language: 'es',
            url: cfg.mailChimpURL
        });

        // Mailchimp translation
        //
        //  Defaults:
        //	 'submit': 'Submitting...',
        //  0: 'We have sent you a confirmation email',
        //  1: 'Please enter a value',
        //  2: 'An email address must contain a single @',
        //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
        //  4: 'The username portion of the email address is invalid (the portion before the @: )',
        //  5: 'This email address looks fake or invalid. Please enter a real email address'

        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
            1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
            2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
        }

    };


   /* Back to Top
    * ------------------------------------------------------ */
    var clBackToTop = function() {

        var pxShow  = 500,         // height on which the button will show
        fadeInTime  = 400,         // how slow/fast you want the button to show
        fadeOutTime = 400,         // how slow/fast you want the button to hide
        scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
        goTopButton = $(".go-top")

        // Show or hide the sticky footer button
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };


   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        clPreloader();
        clMenuOnScrolldown();
        clOffCanvas();
        clPhotoswipe();
        clStatCount();
        clMasonryFolio();
        clSlickSlider();
        clSmoothScroll();
        clPlaceholder();
        clAlertBoxes();
        clContactForm();
        clAOS();
        clAjaxChimp();
        clBackToTop();

    })();


})(jQuery);





// 

window.onload = function () {
    //functions definition
  
    //class definition
    class segm {
      constructor(x, y, l) {
        this.b = Math.random()*1.9+0.1;
        this.x0 = x;
        this.y0 = y;
        this.a = Math.random() * 2 * Math.PI;
        this.x1 = this.x0 + l * Math.cos(this.a);
        this.y1 = this.y0 + l * Math.sin(this.a);
        this.l = l;
      }
      update(x, y) {
        this.x0 = x;
        this.y0 = y;
        this.a = Math.atan2(this.y1 - this.y0, this.x1 - this.x0);
        this.x1 = this.x0 + this.l * Math.cos(this.a);
        this.y1 = this.y0 + this.l * Math.sin(this.a);
      }
    }
    class rope {
      constructor(tx, ty, l, b, slq, typ) {
        if(typ == "l"){
          this.res = l / 2;
        }else{
          this.res = l / slq;
        }
        this.type = typ;
        this.l = l;
        this.segm = [];
        this.segm.push(new segm(tx, ty, this.l / this.res));
        for (let i = 1; i < this.res; i++) {
          this.segm.push(
            new segm(this.segm[i - 1].x1, this.segm[i - 1].y1, this.l / this.res)
          );
        }
        this.b = b;
      }
      update(t) {
        this.segm[0].update(t.x, t.y);
        for (let i = 1; i < this.res; i++) {
          this.segm[i].update(this.segm[i - 1].x1, this.segm[i - 1].y1);
        }
      }
      show() {
        if(this.type == "l"){
        c.beginPath();
        for (let i = 0; i < this.segm.length; i++) {
          c.lineTo(this.segm[i].x0, this.segm[i].y0);
        }
        c.lineTo(
          this.segm[this.segm.length - 1].x1,
          this.segm[this.segm.length - 1].y1
        );
        c.strokeStyle = "white";
        c.lineWidth = this.b;
        c.stroke();
  
        c.beginPath();
        c.arc(this.segm[0].x0, this.segm[0].y0, 1, 0, 2 * Math.PI);
        c.fillStyle = "white";
        c.fill();
  
        c.beginPath();
        c.arc(
          this.segm[this.segm.length - 1].x1,
          this.segm[this.segm.length - 1].y1,
          2,
          0,
          2 * Math.PI
        );
        c.fillStyle = "white";
        c.fill();
        }else{
        for (let i = 0; i < this.segm.length; i++) {
          c.beginPath();
          c.arc(this.segm[i].x0, this.segm[i].y0, this.segm[i].b, 0, 2*Math.PI);
          c.fillStyle = "white";
        c.fill();
        }
          c.beginPath();
        c.arc(
          this.segm[this.segm.length - 1].x1,
          this.segm[this.segm.length - 1].y1,
          2, 0, 2*Math.PI
        );
        c.fillStyle = "white";
        c.fill();
        }
      }
    }
  
    //setting up canvas
    let c = init("canvas").c,
      canvas = init("canvas").canvas,
      w = (canvas.width = window.innerWidth),
      h = (canvas.height = window.innerHeight),
      ropes = [];
  
    //variables definition
    let nameOfVariable = "value",
      mouse = {},
      last_mouse = {},
      rl = 50,
      randl = [],
      target = { x: w/2, y: h/2 },
      last_target = {},
      t = 0,
      q = 10,
      da = [],
      type = "l";
  
    for (let i = 0; i < 100; i++) {
      if(Math.random() > 0.25){
          type = "l";
        }else{
          type = "o";
        }
      ropes.push(
        new rope(
          w / 2,
          h / 2,
          (Math.random() * 1 + 0.5) * 500,
          Math.random() * 0.4 + 0.1,
          Math.random()*15+5,
          type
        )
      );
      randl.push(Math.random() * 2 - 1);
      da.push(0);
    }
  
    //place for objects in animation
    function draw() {
      
      if (mouse.x) {
        target.errx = mouse.x - target.x;
        target.erry = mouse.y - target.y;
      } else {
        target.errx =
          w / 2 +
          (h / 2 - q) *
            Math.sqrt(2) *
            Math.cos(t) /
            (Math.pow(Math.sin(t), 2) + 1) -
          target.x;
        target.erry =
          h / 2 +
          (h / 2 - q) *
            Math.sqrt(2) *
            Math.cos(t) *
            Math.sin(t) /
            (Math.pow(Math.sin(t), 2) + 1) -
          target.y;
      }
  
      target.x += target.errx / 10;
      target.y += target.erry / 10;
  
      t += 0.01;
      
      for (let i = 0; i < ropes.length; i++) {
        if (randl[i] > 0) {
          da[i] += (1 - randl[i]) / 10;
        } else {
          da[i] += (-1 - randl[i]) / 10;
        }
        ropes[i].update({
          x:
            target.x +
            randl[i] * rl * Math.cos((i * 2 * Math.PI) / ropes.length + da[i]),
          y:
            target.y +
            randl[i] * rl * Math.sin((i * 2 * Math.PI) / ropes.length + da[i])
        });
        ropes[i].show();
      }
      last_target.x = target.x;
      last_target.y = target.y;
    }
  
    //mouse position
    // canvas.addEventListener(
    //   "mousemove",
    //   function (e) {
    //     last_mouse.x = mouse.x;
    //     last_mouse.y = mouse.y;
  
    //     mouse.x = e.pageX - this.offsetLeft;
    //     mouse.y = e.pageY - this.offsetTop;
    //   },
    //   false
    // );
    
    // canvas.addEventListener("mouseleave", function(e) {
    //   mouse.x = false;
    //   mouse.y = false;
    // });
  
    //animation frame
    function loop() {
      window.requestAnimFrame(loop);
      c.clearRect(0, 0, w, h);
      draw();
    }
  
    //window resize
    window.addEventListener("resize", function () {
      (w = canvas.width = window.innerWidth),
        (h = canvas.height = window.innerHeight);
      loop();
    });
  
    //animation runner
    loop();
    setInterval(loop, 1000 / 60);
  };