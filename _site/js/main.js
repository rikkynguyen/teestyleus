$(document).ready(function() {
	var scene = document.getElementById('scene');
	if (scene) {
		var parallax = new Parallax(scene);
	}
	
	var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	modal = $('.modal'),
	isClosed = false;

	trigger.click(function () {
		hamburger_cross();      
	});

	overlay.click(function () {
		if (isClosed == false) {
			isClosed = true;
		} else {
			overlay.hide();
			isClosed = false;
		}
	});

	function hamburger_cross() {

		if (isClosed == true) {          
			overlay.hide();
			isClosed = false;
		} else {   
			overlay.show();
			isClosed = true;
		}
	}

	$('[data-toggle="modal"]').click(function(){
		$('#wrapper').removeClass('toggled');
		overlay.hide();
	});
	
	$('[data-toggle="offcanvas"]').click(function () {
		$('#wrapper').toggleClass('toggled');
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$(function () {
		$(".pro-item").slice(0, 8).show();
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".pro-item:hidden").slice(0, 8).slideDown();
			if ($(".pro-item:hidden").length == 0) {
				$("#load").fadeOut('slow');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top
			}, 1500);
		});
	});

	// $('#billing_form').bootstrapValidator({
	// 	feedbackIcons: {
	// 		valid: 'glyphicon glyphicon-ok',
	// 		invalid: 'glyphicon glyphicon-remove',
	// 		validating: 'glyphicon glyphicon-refresh'
	// 	},
	// 	fields: {
	// 		full_name: {
	// 			validators: {
	// 				stringLength: {
	// 					min: 2,
	// 				},
	// 				notEmpty: {
	// 					message: 'Please supply your first name'
	// 				}
	// 			}
	// 		},
	// 		email: {
	// 			validators: {
	// 				notEmpty: {
	// 					message: 'Please supply your email address'
	// 				},
	// 				emailAddress: {
	// 					message: 'Please supply a valid email address'
	// 				}
	// 			}
	// 		},
	// 		phone: {
	// 			validators: {
	// 				notEmpty: {
	// 					message: 'Please supply your phone number'
	// 				},
	// 				phone: {
	// 					country: 'US',
	// 					message: 'Please supply a vaild phone number with area code'
	// 				}
	// 			}
	// 		},
	// 		address: {
	// 			validators: {
	// 				stringLength: {
	// 					min: 8,
	// 				},
	// 				notEmpty: {
	// 					message: 'Please supply your street address'
	// 				}
	// 			}
	// 		},
	// 		city: {
	// 			validators: {
	// 				stringLength: {
	// 					min: 4,
	// 				},
	// 				notEmpty: {
	// 					message: 'Please supply your city'
	// 				}
	// 			}
	// 		},
	// 		state: {
	// 			validators: {
	// 				stringLength: {
	// 					min: 4,
	// 				},
	// 				notEmpty: {
	// 					message: 'Please select your state'
	// 				}
	// 			}
	// 		},
	// 		zip: {				
	// 			validators: {
	// 				stringLength: {
	// 					min: 4,
	// 				},
	// 				notEmpty: {
	// 					message: 'Please supply your zip code'
	// 				},
	// 				zipCode: {
	// 					message: 'Please supply a vaild zip code'
	// 				}
	// 			}
	// 		},
	// 		card_number: {
	// 			validators: {
	// 				creditCard: {
	// 					message: 'The credit card number is not valid'
	// 				},
	// 				notEmpty: {
	// 					message: 'Please supply your credit card number'
	// 				}
	// 			}
	// 		},
	// 		ccv: {
	// 			validators: {
	// 				cvv: {
	// 					creditCardField: 'card_number',
	// 					message: 'The CVV number is not valid'
	// 				},
	// 				notEmpty: {
	// 					message: 'Please supply your CVV'
	// 				}
	// 			}
	// 		}
	// 	}
	// })
	// .on('success.form.bv', function(e) {
	// 	$('#success_message').slideDown({ opacity: "show" }, "slow")
	// 	$('#contact_form').data('bootstrapValidator').resetForm();

	// 	e.preventDefault();

	// 	var $form = $(e.target);

	// 	var bv = $form.data('bootstrapValidator');

	// 	$.post($form.attr('action'), $form.serialize(), function(result) {
	// 		console.log(result);
	// 	}, 'json');
	// });

	// $('#contact_form').bootstrapValidator({
	// 	feedbackIcons: {
	// 		valid: 'glyphicon glyphicon-ok',
	// 		invalid: 'glyphicon glyphicon-remove',
	// 		validating: 'glyphicon glyphicon-refresh'
	// 	},
	// 	fields: {
	// 		name: {
	// 			validators: {
	// 				stringLength: {
	// 					min: 2,
	// 				},
	// 				notEmpty: {
	// 					message: 'Please supply your first name'
	// 				}
	// 			}
	// 		},
	// 		email: {
	// 			validators: {
	// 				notEmpty: {
	// 					message: 'Please supply your email address'
	// 				},
	// 				emailAddress: {
	// 					message: 'Please supply a valid email address'
	// 				}
	// 			}
	// 		},
	// 		message: {
	// 			validators: {
	// 				stringLength: {
	// 					min: 24,
	// 				},
	// 				notEmpty: {
	// 					message: 'Please enter your message'
	// 				}
	// 			}
	// 		},
	// 	}
	// })
});

// grab an element
var myElement = document.querySelector(".headroom");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 