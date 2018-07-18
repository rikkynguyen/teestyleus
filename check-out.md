---
layout: default
title: "Check Out"
class: "check-out-page"
permalink: checkout
---
<div class="container-fluid">
	<div class="row cart-body">
		<form class="form-horizontal is-flex" method="post" action="" id="billing_form">
			<div class="col-md-4 col-sm-12 col-xs-12 step-content cart-list" id="step-1">
				<h3 class="cart-title"><span>1</span> Order Summary</h3>
				<div>
					<div class="form-group cart-row is-flex">
						<div class="col-sm-3 col-xs-3 cart-img">
							<img class="img-responsive" src="images/products/adults/01.png" />
						</div>
						<div class="col-sm-6 col-xs-6 cart-info">
							<p class="pro-title"><b>Product name</b></p>
							<p class="pro-cat">Typography</p>
							<ul class="list-inline">
								<li class="pro-size">
									<div class="form-group">
										<select class="form-control" name="">
											<option value="xs">Men - XS</option>
											<option value="s" selected>Men - S</option>
											<option value="m">Men - M</option>
											<option value="l">Men - L</option>
											<option value="xl">Men - XL</option>
										</select>
									</div>
								</li>
								<li class="pro-quantity">
									<div class="input-group input-group-lg">
										<span class="input-group-addon" id="quantity">Qty.</span>
										<input type="text" class="form-control" placeholder="0" aria-describedby="quantity" value="1" />
									</div>
								</li>
							</ul>
						</div>
						<div class="col-sm-2 col-xs-2 text-right cart-price">
							<p>$5.0</p>
						</div>
						<div class="col-sm-1 col-xs-1 text-center cart-action">
							<a href=""><span class="icon-close"></span></a>
						</div>
					</div>
					<div class="form-group cart-row is-flex">
						<div class="col-sm-3 col-xs-3 cart-img">
							<img class="img-responsive" src="images/products/kids/01.png" />
						</div>
						<div class="col-sm-6 col-xs-6 cart-info">
							<p class="pro-title"><b>Product name</b></p>
							<p class="pro-cat">Typography</p>
							<ul class="list-inline">
								<li class="pro-size">
									<div class="form-group">
										<select class="form-control" name="">
											<option value="xs">Men - XS</option>
											<option value="s" selected>Men - S</option>
											<option value="m">Men - M</option>
											<option value="l">Men - L</option>
											<option value="xl">Men - XL</option>
										</select>
									</div>
								</li>
								<li class="pro-quantity">
									<div class="input-group input-group-lg">
										<span class="input-group-addon" id="quantity">Qty.</span>
										<input type="text" class="form-control" placeholder="0" aria-describedby="quantity" value="1" />
									</div>
								</li>
							</ul>
						</div>
						<div class="col-sm-2 col-xs-2 text-right cart-price">
							<p>$5.0</p>
						</div>
						<div class="col-sm-1 col-xs-1 text-center cart-action">
							<a href=""><span class="icon-close"></span></a>
						</div>
					</div>
					<div class="form-group cart-row is-flex">
						<div class="col-sm-3 col-xs-3 cart-img">
							<img class="img-responsive" src="images/products/adults/02.png" />
						</div>
						<div class="col-sm-6 col-xs-6 cart-info">
							<p class="pro-title"><b>Product name</b></p>
							<p class="pro-cat">Typography</p>
							<ul class="list-inline">
								<li class="pro-size">
									<div class="form-group">
										<select class="form-control" name="">
											<option value="xs">Men - XS</option>
											<option value="s" selected>Men - S</option>
											<option value="m">Men - M</option>
											<option value="l">Men - L</option>
											<option value="xl">Men - XL</option>
										</select>
									</div>
								</li>
								<li class="pro-quantity">
									<div class="input-group input-group-lg">
										<span class="input-group-addon" id="quantity">Qty.</span>
										<input type="text" class="form-control" placeholder="0" aria-describedby="quantity" value="1" />
									</div>
								</li>
							</ul>
						</div>
						<div class="col-sm-2 col-xs-2 text-right cart-price">
							<p>$5.0</p>
						</div>
						<div class="col-sm-1 col-xs-1 text-center cart-action">
							<a href=""><span class="icon-close"></span></a>
						</div>
					</div>
					<div class="form-group cart-row">
						<div class="col-xs-12">
							<strong>Subtotal</strong>
							<div class="pull-right">$20.0</div>
						</div>
						<div class="col-xs-12">
							<small>Shipping</small>
							<div class="pull-right"><span>-</span></div>
						</div>
					</div>
					<div class="form-group cart-row">
						<div class="col-xs-12 cart-total">
							<strong>Order Total</strong>
							<div class="pull-right"><strong>$20.0</strong></div>
						</div>
					</div>
				</div>	
			</div>						
			<div class="col-md-4 col-sm-6 col-xs-12 step-content billing-info" id="step-2">
				<h3 class="cart-title"><span>2</span> Shipping Address</h3>
				<div class="form-group">
					<div class="col-xs-12">
						<label for="name">Full Name *</label>
						<input type="text" class="form-control" id="name" name="full_name" />
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-6 col-xs-12">
						<label for="phone">Phone Number *</label>
						<input type="tel" class="form-control" data-bv-phone="true" id="phone" name="phone" />
					</div>
					<div class="span1"></div>
					<div class="col-sm-6 col-xs-12">
						<label for="email">Email address *</label>
						<input type="email" class="form-control" id="email" name="email" data-bv-emailaddress="true" />
					</div>
				</div>
				<div class="form-group">
					<div class="col-xs-12">
						<label for="address">Address *</label>
						<input type="text" class="form-control" id="address" name="address" />
					</div>
				</div>
				<div class="form-group">
					<div class="col-xs-12">
						<label for="country">Country *</label>
						<input type="text" class="form-control" id="country" name="country" />
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-4 col-xs-12">
						<label for="city">City *</label>
						<input type="text" class="form-control" id="city" name="city" />
					</div>
					<div class="span1"></div>
					<div class="col-sm-4 col-xs-6">
						<label for="state">State *</label>
						<input type="text" class="form-control" id="state" name="state" />
					</div>
					<div class="col-sm-4 col-xs-6">
						<label for="zipcode">Zip Code *</label>
						<input type="text" class="form-control" id="zipcode" name="zip" data-bv-digits="true" />
					</div>
				</div>
				<div class="checkbox">
					<label data-toggle="collapse" data-target="#acc_pw" aria-expanded="false" aria-controls="acc_pw">
						<input type="checkbox" value="" checked />
						<span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
						Create account using these information
					</label>
				</div>
				<div id="acc_pw" aria-expanded="false" class="collapse in">
					<div class="form-group">
						<div class="col-sm-6 col-xs-12">
							<label for="pw">Password *</label>
							<input type="password" class="form-control" id="pw" name="pw" />
						</div>
						<div class="span1"></div>
						<div class="col-sm-6 col-xs-12">
							<label for="cpw">Confirm Password *</label>
							<input type="password" class="form-control" id="cpw" name="cpw" />
						</div>
					</div>
				</div>
				<div class="checkbox">
					<label>
						<input type="checkbox" value="" checked />
						<span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
						Subscribe our Newsletter
					</label>
				</div>
			</div>
			<div class="col-md-4 col-sm-6 col-xs-12 step-content payment" id="step-3">
				<div class="promo-code">
					<h3 class="cart-title"><span>3</span> Promotion code</h3>
					<div class="form-group">
						<div class="col-xs-12">
							<label for="prommo">Promotion code</label>
							<input id="promo" name="promo_code" type="text" class="form-control" />
						</div>
					</div>
				</div>
				<div class="payment-info">
					<h3 class="cart-title"><span>4</span> Payment Method</h3>
					<div class="form-group">
						<div class="col-xs-12">
							<p>Please choose your payment method</p>
							<div class="radio">
								<label>
									<input type="radio" value="credit" name="payment-method" checked data-target="#credit">Credit Cards
									<span class="cr"><i class="cr-icon r-circle"></i></span>
								</label>
							</div>
							<div class="radio">
								<label>
									<input type="radio" value="gateways" name="payment-method" data-target="#gateways">Payment Gateways
									<span class="cr"><i class="cr-icon r-circle"></i></span>
								</label>
							</div>
							<div class="radio">
								<label>
									<input type="radio" value="later" name="payment-method" data-target="#later">Pay when package delivered
									<span class="cr"><i class="cr-icon r-circle"></i></span>
								</label>
							</div>
						</div>
					</div>
					<div class="tab-content">
						<div class="tab-pane active" id="credit">
							<div class="form-group">
								<div class="col-xs-12">
									<label for="CreditCardType">Card Type *</label>
									<select id="CreditCardType" name="CreditCardType" class="form-control">
										<option value="visa">Visa</option>
										<option value="master">MasterCard</option>
										<option value="amex">American Express</option>
										<option value="discover">Discover</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-8 col-xs-8">
									<label for="carNumber">Credit Card Number *</label>
									<input id="carNumber" name="card_number" type="text" class="form-control" 
									data-bv-creditcard="true"
									data-bv-creditcard-message="The credit card number is not valid" />
								</div>
								<div class="span1"></div>
								<div class="col-sm-4 col-xs-4">
									<label for="ccv">Card CVV *</label>
									<input id="ccv" name="ccv" type="text" data-bv-cvv="true" class="form-control" />
								</div>
							</div>
							<div class="form-group">
								<div class="col-xs-12">
									<label>Expiration Date *</label>
								</div>
								<div class="col-sm-4 col-xs-6">
									<select class="form-control" name="month">
										<option value="">Month</option>
										<option value="01">January</option>
										<option value="02">Februarary</option>
										<option value="03">March</option>
										<option value="04">April</option>
										<option value="05">May</option>
										<option value="06">June</option>
										<option value="07">July</option>
										<option value="08">August</option>
										<option value="09">September</option>
										<option value="10">October</option>
										<option value="11">November</option>
										<option value="12">December</option>
									</select>
								</div>
								<div class="col-sm-4 col-xs-6">
									<select class="form-control" name="year">
										<option value="">Year</option>
										<option value="2015">2015</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
										<option value="2021">2021</option>
										<option value="2022">2022</option>
										<option value="2023">2023</option>
										<option value="2024">2024</option>
										<option value="2025">2025</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<div class="col-md-12">
									<p>Pay secure using your credit card.</p>
								</div>
								<div class="col-md-12">
									<ul class="cards list-inline">
										<li><img src="images/cards.png" height="30px"></li>
									</ul>
									<div class="clearfix"></div>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="gateways">
							<div class="form-group">
								<div class="col-xs-12">
									<div class="radio-inline">
										<label>
											<input type="radio" name="payment-gateways" value="123pay">
											<div class="cr-img"><img src="images/payment/123pay.png"></div>
										</label>
									</div>
									<div class="radio-inline">
										<label>
											<input type="radio" name="payment-gateways" value="123pay">
											<div class="cr-img"><img src="images/payment/paypal.png"></div>
										</label>
									</div>
									<div class="radio-inline">
										<label>
											<input type="radio" name="payment-gateways" value="123pay">
											<div class="cr-img"><img src="images/payment/onepay.png"></div>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="later"></div>
						<div class="form-group">
							<div class="col-xs-12">
								<button type="submit" class="btn-lg ts-main-btn">$20.0 - Place Order</button>
								<p class="text-center"><small>By click "Place holder", you agree with our <a href="term-condition.html">Term & Conditions</a></small></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>