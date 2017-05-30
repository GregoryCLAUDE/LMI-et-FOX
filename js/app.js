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

//texte en francais
var textFr =[
	"<p class='debrief' id='debrief'>LMI & FOX est une marque française spécialisée dans le sport outdoor.Depuis sa création dans les années 80, LMI & FOX est bercée par ces sports 'lifestyle' qui décuplent vos envies et orientent vos vies.Nous sommes là pour les amoureux des sports atypiques qui se pratiquent aux 4 coins de la planète. Notre marque réunie les différentes cultures et traverse les générations. La qualité est notre maître-mot, nous fabriquons des produits 100% 'made in France'.</p>",
	"<p class='boomerang-text'>Précurseur dans le domaine et 1er fabricant européen, nous avons concocté une recette simple : la création de nombreux modèles en partenariat avec des lanceursreconnus sur le plan sportif avec un sens de la conception aiguisé. De véritables visionnaires !</p>",
	"<p class='boomerang-text'>Nous sommes fiers de proposer une gamme de boomerang complète et variée pour tout le monde ! Du débutant à l’expérimenté, du loisir au compétiteur, de l’enfant au sénior.</p>",
	"<p class='textFrisbee'>Ce sport dégage de belles émotions et un état d’esprit incroyable. Fair-play, respect de son adversaire et altruisme.Des valeurs à enseigner dès le plus jeune âge c’est pourquoi nous avons conçu une gamme d'ultimate frisbee orientée pour l'initiation et le loisir. Nos flying discs sont distribués dans le milieu scolaire et sont agréés par la FFDF (Fédération Flying Disc France). On les retrouve également lors de parties entre amis !</p>"
];
//texte en anglais
var textEng =[
	"<p class='debrief' id='debrief'>LMI & FOX is a French brand specialized in outdoor sports. Since its creation in the 80s, LMI & FOX is lulled by these 'lifestyle' sports that multiply your desires and orient your lives.We are there for lovers of atypical sports Which are practiced in the 4 corners of the planet. Our brand brings together different cultures and crosses the generations. Quality is our key word, we manufacture 100% 'Made in France' products.</p>",
	"<p class='boomerang-text'>A precursor in the field and the leading manufacturer in Europe, we have concocted a simple recipe: the creation of numerous models in partnership with sport-renowned launchers with a keen sense of design. True visionaries!</p>",
	"<p class='boomerang-text'>We are proud to offer a complete and varied range of boomerang for everyone! From beginner to experienced, from leisure to competitor, from child to senior</p>",
	"<p class='textFrisbee'>This sport exudes beautiful emotions and an incredible state of mind. Fair play, respect for his opponent and altruism. Values ​​to be taught from an early age is why we have designed a range of ultimate frisbee oriented for initiation and leisure. Our flying discs are distributed in the school environment and are approved by the FFDF (Fédération Flying Disc France). They are also found in games with friends!</p>"
];

function printPage (table){
	for (var i = 0; i < table.length; i++) {
		$("#text"+[i]).replaceWith(table[i])
			}
		};
printPage(textFr);
$("#eng").click(printPage(textEng));
$("#fr").click(printPage(textFr));

 
