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
	$('body').css({'background-color': '#'+$('section:eq(0)').data('color')});
});

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
	continuousHorizontal: false,
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
	sectionsColor : ['#FFD271', '#51A7FF', '#FB6172', '#FB6172'],
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
	onSlideLeave: function (anchor_link, index, current_index, direction, next_index){
		//update_screen(next_index);
		console.log('anchor-link: ' + anchor_link, index, current_index, direction, next_index);
	},
	onLeave: function(current_index, next_index, direction){
		//update_screen(next_index-1);
		console.log(current_index, direction, next_index); 
	}
});