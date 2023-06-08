(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

1. Myra Fullscreen Menu
2. Myra Menu Scroll
3. Preloader
4. ISOTOPE FILTERING INIT / #grid
5. Shuffle Letters/Natural Product
6. Instagram Feed Init
7. Pricing Table Init
8. Event Counter
9. Add Class Panel Heading
10. select2 init for custom select style
11. PopUp init
12. Carousel slider init
13. Back to top tnit
14. Pricing 2 Init
15. Rev Slider Init
16. WOW Init
17. Contact Form
18. Newsletter Subscription
-------------------------------------------------------------------*/
jQuery.fn.is_exists = function(){return this.length>0;}



function validateEmail(email) {
    var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return re.test(email);
}


/*--------------------------------------------------------------
1. Myra Fullscreen Menu
--------------------------------------------------------------*/
if ($('#myra-menu-toggle').is_exists()) {
  $('#myra-menu-toggle').on('click', function () {
      $(this).toggleClass('active');
      $('#fullscreen-menu').toggleClass('open');
  });
}


/*--------------------------------------------------------------
2. Myra Menu Scroll
--------------------------------------------------------------*/
if ($('.scroll, nav a').is_exists()) {
  $('.scroll, nav a').on('click', function () {
      
      $('html, body').animate({
         
          scrollTop: $('#' + $(this).data('value')).offset().top
         
      }, 1000);
      
      $('#myra-menu-toggle').removeClass('active');
      
      $('#fullscreen-menu').removeClass('open');
      
  });
}

$(window).on('load', function() {

	/*--------------------------------------------------------------
	3. Preloader
	--------------------------------------------------------------*/
	$('#myra-preloader-body').fadeOut(400);


	/*--------------------------------------------------------------
	 4. ISOTOPE FILTERING INIT
	--------------------------------------------------------------*/
  if($('#portfolio-items').is_exists()) {
	  var $container = $('#portfolio-items'),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 3;
        } else if (w > 900) {
          columnNum  = 3;
        } else if (w > 600) {
          columnNum  = 2;
        } else if (w > 450) {
          columnNum  = 2;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.collection-grid-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
          $item.css({
            width: width,
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.collection-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 3
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.rs-portfolio-nav .option-set'),
        $optionLinks = $optionSets.find('li');
    $optionLinks.click(function(){
    var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // creativewise, apply new options
        $container.isotope( options );
      }
      return false;
    }); 
	} // End is_exists

  if($('#event-portfolio-items').is_exists()) {
	var $container = $('#event-portfolio-items'),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 4;
        } else if (w > 900) {
          columnNum  = 4;
        } else if (w > 600) {
          columnNum  = 2;
        } else if (w > 450) {
          columnNum  = 2;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.event-collection-grid-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/event-collection-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/event-collection-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
          $item.css({
            width: width
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.event-collection-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.rs-portfolio-nav .option-set'),
        $optionLinks = $optionSets.find('li');
    $optionLinks.click(function(){
    var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // creativewise, apply new options
        $container.isotope( options );
      }
      return false;
    }); 
  } // End is_exists


  if($('#myra-watch-gallery-item').is_exists()) {
  var $container = $('#myra-watch-gallery-item'),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 3;
        } else if (w > 900) {
          columnNum  = 3;
        } else if (w > 600) {
          columnNum  = 2;
        } else if (w > 450) {
          columnNum  = 2;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.myra-watch-gallery-grid-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/myra-watch-gallery-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/myra-watch-gallery-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
          $item.css({
            width: width,
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.myra-watch-gallery-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.watch-gallery-nav .option-set'),
        $optionLinks = $optionSets.find('li');
    $optionLinks.click(function(){
    var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // creativewise, apply new options
        $container.isotope( options );
      }
      return false;
    }); 
  } // End is_exists


  /*--------------------------------------------------------------
  5. Shuffle Letters/Natural Product
  --------------------------------------------------------------*/

  if($('.product_main_title').is_exists()) {
      var container = $(".product_main_title"); 
      container.shuffleLetters();
  } // End is_exists

}); // end on.load event

/*--------------------------------------------------------------
	6. Instagram Feed Init
--------------------------------------------------------------*/
$.fn.spectragram.accessData = {
	accessToken: '1764162550.ba4c844.679392a432894982bf6a31ec20d8acb0',
	clientID: '289a98508b934dd49a68144b79209813'
};



$('.userFeed').spectragram('getUserFeed', {
	query: 'natgeo',
	size: 'small',
	max: 6
});


/*--------------------------------------------------------------
  6. Instagram Feed Init
--------------------------------------------------------------*/
$('.field-inputs, .contact-input, .contact-inputs, .fre-trial-input').on('focus', function(){
	$(this).parent().addClass('is-focused');
});

$('.field-inputs, .contact-input, .contact-inputs, .fre-trial-input').on('blur', function(){
	$(this).parent().removeClass('is-focused');
});


/*--------------------------------------------------------------
  7. Pricing Table Init
--------------------------------------------------------------*/
$('.event-page-our-pricing .single-pricing').on('click', function() {
  $('.event-page-our-pricing .single-pricing').removeClass('pricing-active');
});
$('.event-page-our-pricing .single-pricing').on('click', function() {
  $(this).addClass('pricing-active');
});




/*--------------------------------------------------------------
  8. Event Counter
--------------------------------------------------------------*/
$('#main-event-countdown').countdown('2018/07/10').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(' ' 
    + '<span class="timer-count">%-D <span class="timer-text">Days</span></span>  ' 
    + '<span class="timer-count">%H <span class="timer-text">Hours</span></span> ' 
    + '<span class="timer-count">%M <span class="timer-text">Minutes</span></span> ' 
    + '<span class="timer-count">%S <span class="timer-text">Secods</span></span>'));
});



/*--------------------------------------------------------------
  9. Add Class Panel Heading
--------------------------------------------------------------*/
jQuery('.myra-finance-faq .panel-heading a').click(function() {
    $('.myra-finance-faq .panel-heading').removeClass('header-active');
    $(this).parents('.myra-finance-faq .panel-heading').addClass('header-active');
});

jQuery('.myra-finance-faq .panel-heading a').click(function() {
    $('.myra-finance-faq .panel').removeClass('header-active-panel');
    $(this).parents('.myra-finance-faq .panel').addClass('header-active-panel');
});





/*--------------------------------------------------------------
	10. select2 init for custom select style
--------------------------------------------------------------*/
$(window).on('scroll', function(){
	if ($(window).scrollTop() > 50) {
			$('#sticky-menu').addClass('sticky-menu');
	} else {
			$('#sticky-menu').removeClass('sticky-menu');
	}



});


/*--------------------------------------------------------------
	11. PopUp init
--------------------------------------------------------------*/
if($('.magnific-popup-img').is_exists()) {
  $('.magnific-popup-img').magnificPopup({
  	type:'image',
  	mainClass: 'mfp-zoom-in',    
    gallery:{
    enabled:true
    }
  });
} // End is_exists


if($('.pop-up-video').is_exists()) {
  $('.pop-up-video').magnificPopup({
  	disableOn: 700,
  	type: 'iframe',
  	mainClass: 'mfp-fade',
  	removalDelay: 160,
  	preloader: false,
  	fixedContentPos: false
  });
} // End is_exists

if($('.watch-gallery-popup').is_exists()) {
  $('.watch-gallery-popup').magnificPopup({
    type: 'image',
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side  
    gallery:{
    enabled:true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });
} // End is_exists

if($('.register-form').is_exists()) {
  $('.register-form').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
} // End is_exists


/*--------------------------------------------------------------
	12. Carousel slider init
--------------------------------------------------------------*/

if($('#clients-slider').is_exists()) {
  var owl1 = $("#clients-slider");
    owl1.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: false,
      items : 2,
      itemsDesktop: [1199,2],
      itemsDesktopSmall: [1024,2],
      itemsTablet: [991,1],
      itemsMobile: [479,1],
      touchDrag: true,
      mouseDrag: true,
      pagination : true,
      autoHeight : true,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
  });
} // End is_exists

if($('#about-bottom-slider').is_exists()) {
  var owl2 = $("#about-bottom-slider");
    owl2.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
      touchDrag: true,
      mouseDrag: true,
      pagination : false,
      autoHeight : true,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
  });
} // End is_exists

if($('#portfolio-items-slider').is_exists()) {
  var owl3 = $("#portfolio-items-slider");
  	owl3.owlCarousel({
  		navigation : false,
  		slideSpeed : 300,
  		paginationSpeed : 400,
  		singleItem: false,
  		items : 4,
      itemsDesktop: [1199,4],
      itemsDesktopSmall: [1024,3],
      itemsTablet: [991,2],
      itemsMobile: [479,1],
  		touchDrag: true,
  		mouseDrag: true,
  		pagination : false,
  		autoHeight : true,
  		stopOnHover : true,
  		autoPlay : 5000,
  		loop: true,
  		transitionStyle : "fade",
  });

  $(".next").on('click', function(){
  owl3.trigger('owl.next');
  });
  $(".prev").on('click', function(){
    owl3.trigger('owl.prev');
  });
} // End is_exists

if($('#single-about-slider').is_exists()) {
  var owl4 = $("#single-about-slider");
    owl4.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
      touchDrag: true,
      mouseDrag: true,
      pagination : true,
      autoHeight : false,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
  });
} // End is_exists



  if($('.tweet').is_exists()) {
    $('.tweet').twittie({
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} <div class="date">{{date}}</div> <a href="{{url}}" target="_blank">Details</a>',
        count: 10,
        username: 'SimpleeAloe',
        loadingText: 'Loading!'
    }, function () {
        var owl1 = $(".tweet ul");
        owl1.owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true,
        touchDrag: true,
        mouseDrag: true,
        pagination : false,
        autoHeight : false,
        stopOnHover : true,
        autoPlay : 5000,
        loop: true,
        transitionStyle : "fade",
    });
        });
  } // End is_exists


if($('#team-slider').is_exists()) {
  var owl6 = $("#team-slider");
    owl6.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: false,
      items : 4,
      itemsDesktop: [1199,3],
      itemsDesktopSmall: [979,3],
      itemsTablet: [768,2],
      itemsMobile: [479,1],
      touchDrag: true,
      mouseDrag: true,
      pagination : true,
      autoHeight : false,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
  });
} // End is_exists

if($('#screenshort-slider').is_exists()) {
  var owl7 = $("#screenshort-slider");
    owl7.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: false,
      items : 5,
      itemsDesktop: [1199,5],
      itemsDesktopSmall: [979,4],
      itemsTablet: [768,3],
      itemsMobile: [479,2],
      touchDrag: true,
      mouseDrag: true,
      pagination : true,
      autoHeight : false,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
      autoplay:true,
      autoplayTimeout:300,
      autoplayHoverPause:false
  });
} // End is_exists

if($('#sponsor-slider').is_exists()) {
  var owl8 = $("#sponsor-slider");
    owl8.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: false,
      items : 4,
      touchDrag: true,
      mouseDrag: true,
      pagination : false,
      autoHeight : false,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
  });
} // End is_exists

if($('#clients-slider-1').is_exists()) {
  var owl9 = $("#clients-slider-1");
  owl9.owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    items : 1,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination : true,
    autoHeight : true,
    stopOnHover : true,
    autoPlay : 5000,
    loop: true,
    transitionStyle : "fade",
  });
} // End is_exists


if($('#finance-clients-slider').is_exists()) {
  var owl10 = $("#finance-clients-slider");
    owl10.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      items : 1,
      touchDrag: true,
      mouseDrag: true,
      pagination : false,
      autoHeight : true,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
  });

  $(".finnace-slider .next").on('click', function(){
  owl10.trigger('owl.next');
  });
  $(".finnace-slider .prev").on('click', function(){
    owl10.trigger('owl.prev');
  });
} // End is_exists

if($('#myra-watch-clients-slider').is_exists()) {
  var owl11 = $("#myra-watch-clients-slider");
    owl11.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      items : 1,
      touchDrag: true,
      mouseDrag: true,
      pagination : false,
      autoHeight : true,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
  });
} // End is_exists

if($('#myra-watch-bottom-slider').is_exists()) {
  var owl12 = $("#myra-watch-bottom-slider");
    owl12.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      items : 1,
      touchDrag: true,
      mouseDrag: true,
      pagination : true,
      autoHeight : true,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
  });
} // End is_exists


if($('#myra-watch-slider').is_exists()) {
  var owl13 = $("#myra-watch-slider");
    owl13.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: false,
      items : 4,
      itemsDesktop: [1199,3],
      itemsDesktopSmall: [979,3],
      itemsTablet: [768,2],
      itemsMobile: [479,1],
      touchDrag: true,
      mouseDrag: true,
      pagination : false,
      //autoHeight : true,
      transitionStyle : "fade",
  });

  $(".myra-watch-slider-area .next").on('click', function(){
    owl13.trigger('owl.next');
  });
  $(".myra-watch-slider-area .prev").on('click', function(){
    owl13.trigger('owl.prev');
  });
} // End is_exists


if($('#myra-banner-content-slide').is_exists()) {
  var owl14 = $("#myra-banner-content-slide");
    owl14.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      touchDrag: true,
      mouseDrag: true,
      pagination : true,
      autoHeight : false,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
      addClassActive:true,
  });

} // End is_exists


if($('#myra-banner-image-slide').is_exists()) {
  var owl2 = $("#myra-banner-image-slide");
    owl2.owlCarousel({
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
      touchDrag: true,
      mouseDrag: true,
      pagination : false,
      stopOnHover : true,
      autoPlay : 5000,
      loop: true,
      transitionStyle : "fade",
  });
} // End is_exists



/*--------------------------------------------------------------
	13. Back to top tnit
--------------------------------------------------------------*/

$(window).on('scroll', function () {
	if ($(this).scrollTop() > 1000) {
		$('.back-to-top').slideDown();
	} else {
		$('.back-to-top').slideUp();
	}
});

$('.back-to-top').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 1000, "easeInExpo");
  return false;
});


if ($('#slideshow').is_exists()) {
  document.documentElement.className = 'js';
  var slideshow = new CircleSlideshow(document.getElementById('slideshow'));
}

/*--------------------------------------------------------------
	14. Pricing 2 Init
--------------------------------------------------------------*/

if ($('.pricing .box-main').is_exists()) {
  $('.pricing .box-main').click(function() {
    $('.pricing .box-main').removeClass('active');
    $('.pricing .box-second').removeClass('active');
    $(this).addClass('active');
    $(this).next($('.box-second')).addClass('active');

    var current_img = $(this).data('img');
    $('div#myra-product-thumb').hide().html('<img src="'+ current_img +'" alt="Product Thumb" class="img-responsive">').fadeIn();
  });
}

/*--------------------------------------------------------------
  15. Rev Slider Init
--------------------------------------------------------------*/

if ($('#rev_slider_1050_1').is_exists()) {
  var tpj=jQuery;

  var revapi1050;
  tpj(document).ready(function() {
    if(tpj("#rev_slider_1050_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_1050_1");
    }else{
      revapi1050 = tpj("#rev_slider_1050_1").show().revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
          keyboardNavigation:"on",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"off",
          mouseScrollReverse:"default",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 50,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          }
          ,
          bullets: {
            enable:true,
            hide_onmobile:true,
            hide_under:1024,
            style:"hephaistos",
            hide_onleave:false,
            direction:"horizontal",
            h_align:"center",
            v_align:"right",
            h_offset:30,
            v_offset:30,
            space:5,
            tmp:''
          }
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1400,1240,778,480],
        gridheight:[868,768,960,720],
        lazyType:"none",
        shadow:0,
        spinner:"spinner2",
        stopLoop:"on",
        stopAfterLoops:0,
        stopAtSlide:1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        }
      });
    }
  }); /*ready*/
}


/*--------------------------------------------------------------
	10. GOOGLE MAP INIT
--------------------------------------------------------------*/
if ($('#map-canvas').is_exists()) {
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
      // How zoomed in you want the map to start at (always required)
		zoom: 11,
		scrollwheel: false,
		navigationControl: false,
		mapTypeControl: true,
		scaleControl: false,
		draggable: true,
		disableDefaultUI: true,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.6700, -73.9400), // New York

      // How you would like to style the map. 
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c8d7d4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
  };

  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map-canvas');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);
	
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.6700, -73.9400),
    map: map,
    icon: 'img/map-marker.png',
    title: 'Larsia'
  });
 
  var contentString = '<div id="content">' +
      '<div id="myDiv">' +
      '</div>' +
      '<h3 id="heading">COLORADO</h3>' +
      '<div id="bodyContent">' +
      '<p>PIXIEFY THEMES ' +
      '2746 Scheuvront Drive ' +
      '<a href="#">www.pixiefy.com </a>' +
      'Denver, CO 80202 . </p>' +
      '</div>' +
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 280,
  });
  

  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function(){ marker.setAnimation(null); }, 750);  //time it takes for one bounce   

  google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
  });

}


}


if ($('.pricing-content').is_exists()) {
var elements = document.getElementsByClassName('pricing-content');
var elementsParent = document.getElementsByClassName('pricing-elements');

var elementHeights = Array.prototype.map.call(elements, function(el)  {
  return el.clientHeight;
});

var maxHeight = Math.max.apply(null, elementHeights);

Array.prototype.forEach.call(elementsParent, function(el) {
  el.style.height = maxHeight + "px";
});
}

/*--------------------------------------------------------------
  16. WOW Init
--------------------------------------------------------------*/
if ($('.wow').is_exists()) {
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);
wow.init();
}


/*--------------------------------------------------------------
  17. Contact Form
--------------------------------------------------------------*/
var myra_contact_btn = $('#myra-input-send'),
    myra_form = $('#myra-form');

myra_form.on('submit', function(e){
  e.preventDefault();

  $('.myra_error, .myra-success-message, .myra-loader').remove();
  $('.form-group input').removeClass('myra_input_error');

  var myra_input_name     = $('#myra-input-name, #myra-input-name2'),
      myra_input_email    = $('#myra-input-email, #myra-input-email2'),
      myra_input_subject    = $('#myra-input-subject, #myra-input-phone2'),
      myra_input_phone    = $('#myra-input-phone'),
      myra_input_message  = $('#myra-input-message'),
      myra_error          = false,
      self                  = $(this);

  if(myra_input_email.val() === ''){
    myra_input_email.before('<div class="myra_error">Email Address Should not be emtpy.</div>').hide().fadeIn();
    myra_input_email.addClass('myra_input_error');
    myra_error = true;
  } else if(!validateEmail(myra_input_email.val().toLowerCase())){
    myra_input_email.before('<div class="myra_error">Email Address Should be valid.</div>').hide().fadeIn();
    myra_input_email.addClass('myra_input_error');
    myra_error = true;
  }

  if(myra_input_phone.val() === ''){
    myra_input_phone.before('<div class="myra_error">This Field Should not be emtpy.</div>').hide().fadeIn();
    myra_input_phone.addClass('myra_input_error');
    myra_error = true;
  }

  if(myra_error === false){
    myra_contact_btn.before('<span class="myra-loader myra-loader1"></span>').hide().fadeIn();
    $.ajax({
      type: "POST",
      url: "php/contact-form.php",
      data: {
        'myra_input_name' : myra_input_name.val(),
        'myra_input_email' : myra_input_email.val(),
        'myra_input_subject' : myra_input_subject.val(),
        'myra_input_phone' : myra_input_phone.val(),
        'myra_input_message' : myra_input_message.val()
      },
      success: function(response){
        if (response) {
          console.log("success");
           myra_contact_btn.after('<div class="myra-success-message">' + response + '</div>').hide().fadeIn();

             $(".myra-loader").fadeOut("normal", function() {
                $(this).remove();
            });
        }
        
      }
    });
  }
});



  /*--------------------------------------------------------------
   18. Newsletter Subscription
  --------------------------------------------------------------*/
  if($('#mc-form').is_exists()) {
    $('#mc-form').ajaxChimp({
        url: '//pixiefy.us13.list-manage.com/subscribe/post?u=1c19cb3fd3c3c6c56177c50ea&amp;id=967a07b6cc'
    });
  } //End if exist



})(jQuery);