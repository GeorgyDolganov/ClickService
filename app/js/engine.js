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
});

function update_section(destination) {
	console.log($('.section:eq('+destination.index+')').data('color')); 
	$('body').css({'background-color': '#'+$('.section:eq('+destination.index+')').data('color')});
	$('header').attr('data-slide', $('.section:eq('+destination.index+')').attr('id'));
	$('.section.init').removeClass('init');
	setTimeout(function(){
		fullpage_api.moveSlideRight();
	},10000);
}

function update_slide(destination) {
	console.log($('.slide:eq('+destination.index+')').data('color')); 
	$('body').css({'background-color': '#'+$('.slide:eq('+destination.index+')').data('color')});
	$('header').attr('data-slide', $('.slide:eq('+destination.index+')').attr('id'));
	$('.slide.init').removeClass('init');
	setTimeout(function(){
		fullpage_api.moveSlideRight();
	},10000);
}

$('body').on('submit', '#send_message form', function(e){ 
	e.preventDefault();
	$('.popup').removeClass('active');
	$('#alert').addClass('active');
});

$('.popup').on('click', '.popup-close, .popup-overlay', function(){
	$(this).closest('.popup').removeClass('active');
});

$('.send_website').click(function(){ 
	$('.popup').removeClass('active');
	$('#order_webinar').addClass('active');
});

$('body').on('submit', '#order_webinar form', function(e){ 
	e.preventDefault();
	let f = $(this);
	send_message_from_landing(f);
});

function send_message_from_landing(f) {
	$('.popup').removeClass('active');
	$('#alert').addClass('active');
	$('#alert .popup_caption').text('Готово');
	$('#alert .popup_message').text(d.message);
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
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease-in-out',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: true,
	scrollHorizontally: true,
	interlockedSlides: false,
	dragAndMove: true,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: false,
	verticalCentered: true,
	//sectionsColor : ['#FFD271', '#51A7FF', '#FB6172', '#FB6172'],
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
	}
});