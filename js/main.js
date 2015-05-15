$(function(){
	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
	});
	
	if ($('#slides').length) {
		$('#slides').slidesjs({
			width: 1140,
			height: 400,
			navigation: false,
			play: {
				auto: true,
				pauseOnHover: true
			}
		});
	}

	if ($('.owl-carousel').length) {
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:15,
	        nav:true,
	        dots:false,
	        autoplay: true,
	        autoplayHoverPause: true,
	        navContainer: ".owl-carousel" ,
	        navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"]
		});
	}
});
