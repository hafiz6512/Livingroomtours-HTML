$(document).ready(function(){

	/**
	 * Isotop For Tour Guide filter
	 */
	function initIsotope(){
	  	var $wrapper = $('.tours-guide-content');

	  	if($wrapper.length < 1){
	  		return;
	  	}

	 	var $filters = $('.filter-content', $wrapper);
		var $grid = $('.filter-grid', $wrapper);
		var $checkboxes = $('.filter-content .form-check-input', $wrapper);

	  	$grid.isotope({
	  	  	itemSelector: '.tour-filter-tem',
	  		layoutMode: 'fitRows'
	  	});

	   	$checkboxes.change(function(){
	    	$grid.isotope({ filter: getFilterValues() });
	  	});

	  	function getFilterValues(){
	  		var filters = [];
	    	$checkboxes.filter(':checked').each(function(){
	      		filters.push( this.value );
	    	});

	    	filters = filters.join(', ');
	    	return filters;	// Return the array
	  	}
	}

	$(function(){
		initIsotope();
	});

	/**
	 * Owl Carosal slider for home page
	 */
	$('#homeToursSlider').owlCarousel({
	    margin: 20,
	    nav: false,
        dots: false,
	    loop: true,
	    autoplay: true,
	    autoplayTimeout: 3000,
        autoplayHoverPause: false,
	    mouseDrag: false,
	    responsiveClass: true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:false
	        }
	    }
	});

});