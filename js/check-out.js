$(document).ready(function() {
	var currentStep = 1;
		stepContent = $('#billing_form').find('.step-content'),
		nextBtn = $('.next-btn');

	stepContent.each(function() {
		if ($(this).attr('id') !== ('step-' + currentStep)) {
			$(this).find('input').attr('disabled', 'disabled');
			$(this).find('.next-btn').parent().addClass('hidden');
		}
	});

	nextBtn.click(function(e) {
		e.preventDefault();
		var currentStepContent = $(this).closest('.step-content'),
			inputs = currentStepContent.find('input'),
			isValid = true;

		currentStep = currentStepContent.attr('id').substring(currentStepContent.attr('id').indexOf('-') + 1);

		$(".form-group").removeClass("has-error");
		for (var i = 0; i < inputs.length; i++) {
			if (!inputs[i].validity.valid) {
				isValid = false;
				$(inputs[i]).closest(".form-group").addClass("has-error");
			}
		}

		if (isValid) {
			currentStepContent.find('.next-btn').parent().addClass('hidden');
			if (currentStep) {
				currentStep = parseInt(currentStep) + 1;
				currentStepContent = $('#step-' + currentStep);
				currentStepContent.removeClass('disabled');
				currentStepContent.find('input').removeAttr('disabled');
				currentStepContent.find('.next-btn').parent().removeClass('hidden');
			}
		}
	});
});
