$(document).ready(function(){
    $('.materialboxed').materialbox();
	//carousel presentation societe
	$('.carousel').carousel();

	$('.carousel').carousel('next');
	$('.carousel').carousel('next', 3); // Move next n times.
	// Previous slide
	$('.carousel').carousel('prev');
	$('.carousel').carousel('prev', 4); // Move prev n times.
	// Set to nth slide
	$('.carousel').carousel('set', 4);
	//fin carousel presentation societe

	$(".button-collapse").sideNav({closeOnClick: true});
	
	$("body").append('<a id="arrowScroll" class="waves-effect btn" href="#"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>');
	$("#arrowScroll").hide()
	$("#arrowScroll").click(function(){
		$('html,body').animate({scrollTop: 0 }, 'slow');      
	});

	$(".js-scrollTo").on('click',function(){
		var page=$(this).attr('href');
		var speed=750;
		$('html,body').animate({scrollTop: $(page).offset().top}, 'slow');
	});

});

$(window).scroll(function(){
	if ($(window).scrollTop() < 1500){
		$("#arrowScroll").fadeOut();
	}else
		$("#arrowScroll").fadeIn();
});


    $('.tooltipped').tooltip({delay: 50});
