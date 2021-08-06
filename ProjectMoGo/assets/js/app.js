$(function(){
	var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
	}

	//smoose scroll
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		let blockId = $(this).data('scroll');
		if (blockId) {
			let blockOffset = $(blockId).offset().top;

			$("html, body").animate({
				scrollTop: blockOffset
			}, 500);
		}
	});

	//nav
	$("#toggle-menu-button").on("click", function(event) {
		event.preventDefault();
		$("#nav").toggleClass("active");
	});

	$(".nav .nav__link").on("click", function(event) {
		$("#nav").removeClass("active");
	});
	

	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();
		$(this).parent().toggleClass("active");
	});

	$('.commnets__inner').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	  });
});