$('.nav-item').click(function (event) {
	if (this.checked) {
		$('#toggle').each(function () {
			this.checked = true;
		});
	} else {
		$('#toggle').each(function () {
			this.checked = false;
		});
	}
});

$(document).ready(function(){
	$('body').css({'background-color': '#'+$('.section:eq(0)').data('color')});
	
	Reload();
});


function update_section(destination) {
	console.log($('.section:eq('+destination.index+')').data('color')); 
	$('body').css({'background-color': '#'+$('.section:eq('+destination.index+')').data('color')});
	$('header').attr('data-slide', $('.section:eq('+destination.index+')').attr('id'));
	$('.section.init').removeClass('init');
}

function update_slide(destination) {
	console.log($('.slide:eq('+destination.index+')').data('color')); 
	$('body').css({'background-color': '#'+$('.slide:eq('+destination.index+')').data('color')});
	$('header').attr('data-slide', $('.slide:eq('+destination.index+')').attr('id'));
}

/*! Reloads page on every visit */
function Reload() {
    if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
		window.onpageshow = function(evt) {
			if (evt.persisted) {
			document.body.style.display = "none";
			location.reload();
			}
		};
	}
} 



$('body').on('submit', '#send_message form', function(e){ 
	e.preventDefault();
	let f = $(this);
	send_message_from_landing(f);
});

$('.popup').on('click', '.popup-close, .popup-overlay', function(){
	$(this).closest('.popup').removeClass('active');
});

$('.send_website').click(function(){ 
	$('.popup').removeClass('active');
	$('#order_webinar').addClass('active');
});

$('#order-1btn').click(function(){ 
	$('.popup').removeClass('active');
	$('#order-1').addClass('active');
});

$('#order-2btn').click(function(){ 
	$('.popup').removeClass('active');
	$('#order-2').addClass('active');
});

$('#order-3btn').click(function(){ 
	$('.popup').removeClass('active');
	$('#order-3').addClass('active');
});

$('#order-4btn').click(function(){ 
	$('.popup').removeClass('active');
	$('#order-4').addClass('active');
});

$('#order-5btn').click(function(){ 
	$('.popup').removeClass('active');
	$('#order-5').addClass('active');
});

$('#whatsapp-btn').click(function(){ 
	$('.popup').removeClass('active');
	$('#whatsapp').addClass('active');
});

$('#insta-btn').click(function(){ 
	$('.popup').removeClass('active');
	$('#insta').addClass('active');
});

$('body').on('submit', '#order_webinar form', function(e){ 
	e.preventDefault();
	let f = $(this);
	send_message_from_landing(f);
});

$('body').on('submit', '#order form', function(e){ 
	e.preventDefault();
	let f = $(this);
	send_message_from_landing(f);
});

function send_message_from_landing(f) {
	window.location='thanks/';
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "mr.craaazy@gmail.com",
		Password : "79E634319C121614040393F99951FD23018D",
		To : 'mr.craaazy@gmail.com',
		From : "mr.craaazy@gmail.com",
		Subject : "Сюда заголовок",
		Body : "Сюда текст"
	}).then(
	  message => alert(message)
	);
}

var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['Hello!', 'WeAreSearchingForYou', 'WeCanHelpYou', 'HereAreExamples', 'Contacts'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 1400,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease-in-out',
	loopBottom: true,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: true,
	scrollHorizontally: true,
	interlockedSlides: false,
	dragAndMove: true,
	offsetSections: false,
	resetSliders: true,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 5,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	fixedElements: '#head',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
    cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onSlideLeave: function (section, origin, destination, direction){
		update_slide(destination);
	},
	onLeave: function(origin, destination, direction){
		update_section(destination);
		console.log(origin.anchor);
		console.log(destination.anchor);
		if (origin.anchor == "HereAreExamples" || origin.anchor == "WeCanHelpYou"){
			clearInterval(timer)
		}
		if (destination.anchor == "HereAreExamples" || destination.anchor == "WeCanHelpYou"){
			timer = setInterval(function(){
				fullpage_api.moveSlideRight();
			},3000);
		}
	}
});