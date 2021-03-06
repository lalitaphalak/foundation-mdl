// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
	$(".mdl").on('focusin', ".mdl-input", function() {
		$(this).closest('.mdl').addClass('focused');
		if (!this.value) {
			$(this).closest('.mdl').addClass('empty');
		}
	});

	$(".mdl").on('focusout', ".mdl-input", function() {
		$(this).closest('.mdl').removeClass('focused');
		if (this.value) {
			$(this).closest('.mdl').removeClass('empty');
		}
		else {
			$(this).closest('.mdl').addClass('empty');
		}
	});

	$('.mdl-checkbox-label').on('click', function() {
		var checkbox = document.getElementById($(this).attr('for'));
		if ($(checkbox).is(':enabled')) {
			// For ripple animation
		    var el = $(this).children('span:first-child');
		    el.addClass('circle');
	  		var newone = el.clone(true);  
	  		el.before(newone);  
		  	$(this).children(".circle:last").remove();

		  	// For checked styling change
			if (!$(this).hasClass('checked')) {
				$(this).addClass('checked');
			}
			else {
				$(this).removeClass('checked');
			}
		}	
	}); 

	$(".mdl").on('click', ".mdl-radio-label", function() {
		if ($(this).children('input[type="radio"]').is(':enabled')) {
			// For ripple animation
		    var el = $(this).children('span:first-child');
		    el.addClass('circle');
	  		var newone = el.clone(true);  
	  		el.before(newone);  
		  	$(this).children(".circle:last").remove();
		  	
		  	// For checked styling change
		  	if ($(this).children('input.mdl-radio').length > 0) {
		  		$(this).siblings( ".mdl-radio-label.checked" ).removeClass('checked');
		  	}

		  	if (!$(this).hasClass('checked')) {
				$(this).addClass('checked');
			}
		}
  		

		return false; // To handle twice execution
		
	}); 

	$(".mdl").on('focusin', ".mdl-select", function() {
		$(this).parent().addClass('focused');
	}); 

	$(".mdl").on('focusout', ".mdl-select", function() {
		$(this).parent().removeClass('focused');
	});	
});