$(function(){
    $('.carousel').carousel({
      interval: 5000
    });

    $('.percent').each( function () {
    	var currNum = parseInt($(this).text());

    	$(this).animateNumber(
    		{ 
	    		number: currNum
	    	},
	    	3000
	    );
    });

    $window = $(window);
 
   	$('.parallax[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   	});

    $(window).scroll(function(){
      $(document).on("scroll", onScroll);

      $('#navbar ul li a').on('click', function (e) {
        e.preventDefault();
          $(document).off("scroll");
          
          $('#navbar ul li').each(function () {
              $(this).removeClass('active');
          })
          $(this).parent().addClass('active');
        
          var target = this.hash,
              menu = target;


          $target = $(target);
          var offsetTarget = ($target.attr("id") != "inicio") ? (($target.offset().top) - $("header").height()) : (0, 0);
          
             $('html, body').stop().animate({
                  'scrollTop': offsetTarget
              }, 600, 'swing', function () {
                  window.location.hash = target;
                  $(document).on("scroll", onScroll);
              });
          });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop() + 200;
        
      $('#navbar a').each(function () {
            var currLink = $(this);
        var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos ) {
                $('#navbar ul li').removeClass("active");
                currLink.parent().addClass("active");
            }
            else{
                currLink.parent().removeClass("active");
            }
        });
    }
});
