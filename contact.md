---
layout: default
title: "Contact Us"
permalink: /contact-us/
class: "contact-us"
---
<div class="container-fluid banner">
	<div class="row">
		<img src="{{ site.baseurl }}/images/banner.jpg">
		<div class="banner-overlay">
			<h1>Contact Us</h1>
		</div>
	</div>
</div>
<div class="pro-container">
	<div class="container-fluid pro-wrp">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3 col-xs-12">
				<h2 class="text-center">Send us a message!</h2>
				<form role="form" id="contact_form" class="contact-form">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group form-group-lg">
								<input type="text" class="form-control" name="name" autocomplete="off" id="Name" placeholder="What's people call you?">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group form-group-lg">
								<input type="email" data-bv-emailaddress="true" class="form-control" name="email" autocomplete="off" id="email" placeholder="Some where for us to email you back">
							</div>
						</div>
						<div class="col-md-12">
							<div class="form-group form-group-lg">
								<textarea class="form-control textarea" rows="3" name="message" id="Message" placeholder="What do you wanna say?"></textarea>
							</div>
						</div>
						<div class="col-md-12 text-center">
							<button type="submit" class="btn-lg main-btn">Send a message</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>