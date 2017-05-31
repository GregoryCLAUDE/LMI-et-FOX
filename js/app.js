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

	$(".button-collapse").sideNav();
	
	$("body").append('<a id="arrowScroll" class="waves-effect btn" href="#"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>');
	$("#arrowScroll").hide()
	$("#arrowScroll").click(function(){
		$('html,body').animate({scrollTop: 0 }, 'slow');      
	});
    
});

$(window).scroll(function(){
	if ($(window).scrollTop() < 1500){
		$("#arrowScroll").fadeOut();
	}else
		$("#arrowScroll").fadeIn();
});


//texte en anglais
var textEng =[
	"<p class='debrief' id='debrief'>LMI & FOX is a French brand specialized in outdoor sports. Since its creation in the 80s, LMI & FOX is lulled by these 'lifestyle' sports that multiply your desires and orient your lives.We are there for lovers of atypical sports Which are practiced in the 4 corners of the planet. Our brand brings together different cultures and crosses the generations. Quality is our key word, we manufacture 100% 'Made in France' products.</p>",
	"<p class='boomerang-text'>A precursor in the field and the leading manufacturer in Europe, we have concocted a simple recipe: the creation of numerous models in partnership with sport-renowned launchers with a keen sense of design. True visionaries!</p>",
	"<p class='boomerang-text'>We are proud to offer a complete and varied range of boomerang for everyone! From beginner to experienced, from leisure to competitor, from child to senior</p>",
	"<p class='textFrisbee'>This sport exudes beautiful emotions and an incredible state of mind. Fair play, respect for his opponent and altruism. Values ​​to be taught from an early age is why we have designed a range of ultimate frisbee oriented for initiation and leisure. Our flying discs are distributed in the school environment and are approved by the FFDF (Fédération Flying Disc France). They are also found in games with friends!</p>"
];


 
