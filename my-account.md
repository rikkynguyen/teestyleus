---
layout: default
title: "My Account"
permalink: /my-account/
class: ""
---
<div class="pro-container">
	<div class="container-fluid pro-wrp">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
				<div class="row">
					<div class="col-sm-3 hidden-xs">
						<ul class="nav side-nav">
							<li><h3 class="side-nav-title">My Account</h3></li>
							<li class="active"><a data-toggle="tab" href="#accDashboard">My Dashboard</a></li>
							<li><a data-toggle="tab" href="#accInfo">Account Information</a></li>
							<li><a data-toggle="tab" href="#orders">My Orders</a></li>
						</ul>
					</div>
					<div class="col-xs-12 visible-xs">
						<div class="navbar-tab-xs">
							<a href="#tabMenuXs" 
							data-toggle="collapse" 
							aria-expanded="false" 
							aria-controls="tabMenuXs"
							class="tab-btn-xs">
							My Account
							<span class="icon-arrow-down pull-right"></span>
						</a>
						<ul class="nav side-nav collapse" id="tabMenuXs">
							<li class="active"><a data-toggle="tab" href="#accDashboard">My Dashboard</a></li>
							<li><a data-toggle="tab" href="#accInfo">Account Information</a></li>
							<li><a data-toggle="tab" href="#orders">My Orders</a></li>
						</ul>		
					</div>			
				</div>
				<div class="clearfix visible-xs"></div>
				<div class="tab-content col-sm-9">
					<div id="accDashboard" class="tab-pane fade in active">
						<h2>My Dashboard</h2>
						<p><strong>Hello, John Doe!</strong> From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>
						<div class="acc-box">
							<div class="box-header">
								<h3 class="pull-left box-title">Recent Order</h3>
								<a data-toggle="tab" href="#orders" class="pull-right">View All</a>
							</div>
							<div class=" table-responsive">
								<table class="table table-hover box-table">
									<thead>
										<tr>
											<th>Order #</th>
											<th>Date</th>
											<th>Ship to</th>
											<th class="text-center">Order Total</th>
											<th>Status</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>314523</td>
											<td>27/03/2017</td>
											<td>432 Lavender St., #11 CT Hub Building</td>
											<td class="text-center">$40.00</td>
											<td><span class="status">Pending</span></td>
											<td class="text-center">
												<a class="btn btn-sm btn-default" data-toggle="tab" href="#orderDetail">View Order</a>																
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="acc-box col-sm-6 col-xs-12">
								<div class="box-header">
									<h3 class="pull-left box-title">Billing Address</h3>
									<a class="pull-right" data-toggle="tab" href="#accInfo">Edit</a>
								</div>
								<div class="panel panel-default box-body">
									<div class="panel-body">
										<ul class="list-unstyled acc-info">
											<li><span class="icon icon-user"></span> <span>John Doe</span></li>
											<li><span class="icon icon-envelope"></span> <span>john.doe@mail.com</span></li>
											<li><span class="icon icon-phone"></span> <span>9246-789-987</span></li>
											<li>
												<span class="icon icon-location-pin"></span> <span>432 Lavender St., #11 CT Hub Building<br>
												Singapore 823456, Singapore</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="acc-box col-sm-6 col-xs-12">
								<div class="box-header">
									<h3 class="pull-left box-title">Shipping Address</h3>
									<a class="pull-right" data-toggle="tab" href="#accInfo">Edit</a>
								</div>
								<div class="panel panel-default box-body">
									<div class="panel-body">
										<ul class="list-unstyled acc-info">
											<li><span class="icon icon-user"></span> <span>John Doe</span></li>
											<li><span class="icon icon-envelope"></span> <span>john.doe@mail.com</span></li>
											<li><span class="icon icon-phone"></span> <span>9246-789-987</span></li>
											<li>
												<span class="icon icon-location-pin"></span> <span>432 Lavender St., #11 CT Hub Building<br>
												Singapore 823456, Singapore</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="accInfo" class="tab-pane fade">
						<div class="row">
							<div class="col-md-8 col-xs-12">
								<h3>Billing info</h3>
								<form class="form-horizontal">
									<div class="col-xs-12">
										<div class="input-group ts-form form-group">
											<span class="input-group-addon"><span class="icon-user"></span></span>
											<input type="text" class="form-control" value="John Doe" />
										</div>
										<div class="input-group ts-form form-group">
											<span class="input-group-addon"><span class="icon-phone"></span></span>
											<input type="text" class="form-control" value="9246-789-987" />
										</div>
										<div class="input-group ts-form form-group">
											<span class="input-group-addon"><span class="icon-envelope"></span></span>
											<input type="text" class="form-control" value="joh.doe@mail.com" />
										</div>
										<div class="input-group ts-form form-group">
											<span class="input-group-addon"><span class="icon-location-pin"></span></span>
											<input type="text" class="form-control" value="432 Lavender St., #11 CT Hub Building" />
										</div>
										<div class="form-group">
											<div class="row">
												<div class="col-xs-4">
													<input type="text" class="form-control" value="Singapore" />
												</div>
												<div class="col-xs-4">
													<input type="text" class="form-control" value="823456" />
												</div>
												<div class="col-xs-4">
													<input type="text" class="form-control" value="Singapore" />
												</div>
											</div>
										</div>
									</div>
									<p><a href="#acc_pw" data-toggle="collapse" aria-expanded="false" aria-controls="acc_pw">Change Password</a></p>
									<div id="acc_pw" aria-expanded="false" class="collapse">
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
									<a href="" class="btn ts-main-btn pull-right">Update</a>
								</form>
							</div>
						</div>
					</div>
					<div id="orders" class="tab-pane fade">
						<div class="acc-box">
							<div class="box-header">
								<h3 class="pull-left box-title">Order History</h3>
							</div>
							<div class="table-responsive">
								<table class="table table-hover box-table">
									<thead>
										<tr>
											<th>Order #</th>
											<th>Date</th>
											<th>Ship to</th>
											<th class="text-center">Order Total</th>
											<th>Status</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>314523</td>
											<td>27/03/2017</td>
											<td>432 Lavender St., #11 CT Hub Building</td>
											<td class="text-center">$40.00</td>
											<td><span class="status">Pending</span></td>
											<td class="text-center">
												<a class="btn btn-sm btn-default" data-toggle="tab" href="#orderDetail">View Order</a> 
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div id="orderDetail" class="tab-pane fade">
						<div class="acc-box">
							<div class="box-header">
								<div class="pull-left">
									<ul class="list-unstyled">
										<li><em>Date: 1st November, 2013</em></li>
										<li>
											Order No. <br>
											<strong class="text-lg">345226</strong>
										</li>
										<li><em class="label label-warning">Pending</em></li>
									</ul>
								</div>
								<a href="" class="btn btn-success pull-right"><span class="icon-printer"></span> Print Order</a>
							</div>
							<div class="table-responsive">
								<table class="table table-hover tab">
									<thead>
										<tr>
											<th>Product</th>
											<th class="text-center">Qty.</th>
											<th class="text-center">Price</th>
											<th class="text-center">Total</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="col-md-9"><em>Lorem Ispum</em></td>
											<td class="col-md-1 text-center">1</td>
											<td class="col-md-1 text-center">$5.0</td>
											<td class="col-md-1 text-center">$5.0</td>
										</tr>
										<tr>
											<td class="col-md-9"><em>Lorem Ispum</em></td>
											<td class="col-md-1 text-center">2</td>
											<td class="col-md-1 text-center">$5.0</td>
											<td class="col-md-1 text-center">$10.0</td>
										</tr>
										<tr>
											<td class="col-md-9"><em>Lorem Ispum</em></td>
											<td class="col-md-1 text-center">1</td>
											<td class="col-md-1 text-center">$5.0</td>
											<td class="col-md-1 text-center">$5.0</td>
										</tr>
										<tr>
											<td>   </td>
											<td>   </td>
											<td class="text-right">
												<p>
													<strong>Subtotal: </strong>
												</p>
												<p>
													<strong>Tax: </strong>
												</p>
											</td>
											<td class="text-center">
												<p>
													<strong>$20.0</strong>
												</p>
												<p>
													<strong>$20.0</strong>
												</p>
											</td>
										</tr>
										<tr>
											<td>   </td>
											<td>   </td>
											<td class="text-right"><h4><strong>Total: </strong></h4></td>
											<td class="text-center text-danger"><h4><strong>$40.0</strong></h4></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="row">
								<div class="acc-box col-sm-6 col-xs-12">
									<div class="panel panel-default box-body">
										<div class="panel-body">
											<p><strong>Billing Address</strong></p>
											<ul class="list-unstyled acc-info">
												<li><span class="icon icon-user"></span> <span>John Doe</span></li>
												<li><span class="icon icon-envelope"></span> <span>john.doe@mail.com</span></li>
												<li><span class="icon icon-phone"></span> <span>9246-789-987</span></li>
												<li>
													<span class="icon icon-location-pin"></span> <span>432 Lavender St., #11 CT Hub Building<br>
													Singapore 823456, Singapore</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="acc-box col-sm-6 col-xs-12">
									<div class="panel panel-default box-body">
										<div class="panel-body">
											<p><strong>Shipping Address</strong></p>
											<ul class="list-unstyled acc-info">
												<li><span class="icon icon-user"></span> <span>John Doe</span></li>
												<li><span class="icon icon-envelope"></span> <span>john.doe@mail.com</span></li>
												<li><span class="icon icon-phone"></span> <span>9246-789-987</span></li>
												<li>
													<span class="icon icon-location-pin"></span> <span>432 Lavender St., #11 CT Hub Building<br>
													Singapore 823456, Singapore</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>