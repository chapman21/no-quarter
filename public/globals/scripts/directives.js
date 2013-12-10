angular.module("globals", ['globalFactories', 'globalControllers'])


.directive('states',['StateFactory',function(StateFactory){
			return{
				restrict: "AE",
				template: "<label>State<span class='reqText' data-ng-show='req'>Required</span></label><select data-ng-model='state' data-ng-click='setState()' data-ng-options='c.State for c in states'><option value=''>{{current}}</option></select>",
				link: function(scope, elm, attr){
					scope.req= attr.req;
					StateFactory.menu({},{}, statescb, stateserr);
					function statescb(data){
						scope.states = data;
					}
					function stateserr(err){
						console.log(err)
					}
				}
			};
}])


.directive('vanav',[ function() {
			return {
				restrict: 'EA',
				template: "<ul class='vaNav'><li><a href='http://www.virginia.gov'><img src='/img/vaLogo.jpg'/></a></li>" +
				"<li class='one'><a href='http://www.virginia.gov/government/state-employees/agency-directory' title='Virginia agency websites'>Agencies</a></li>" +
				"<li class='two'><a href='http://www.governor.virginia.gov' title='Virginia Governor'>Governor</a></li>" +
				"<li class='five'><a href='http://www.virginia.gov/search' title='Search Virginia.gov'>Search Virginia.gov</a></li></ul>",
				replace: true
			};
}])

.directive('plainheader', function() {
			return {
				restrict: 'EA',
				template: "<header class='dmvHeader g16'><div class='logo first'><a href='/'><img src='/img/dmvLogo.png' alt='DMV HOME' /></a></div></header>",
				replace: true
			};
})

.directive('weblabheader', function() {
			return {
				restrict: 'EA',
				template: "<header class='webLabHeader g16'><h1>WebLab</h1></header>",
				replace: true
			};
})


.directive('btn', function(){
			return{
			restrict: 'A',
			template: '<button data-ng-disabled="form.$invalid" data-ng-show="!isloading" data-ng-click="next()">{{action}}</button>',
			replace: true,
			link: function(scope,ele,attr){
				scope.action= attr.act;
			}
			}
	})


.directive('mod', function(){
			return{
				restrict: 'EA',
				template: '<script src="shims/mod.min.js"></script>',
				replace: true,
				link: function(scope,ele,attr){
					scope.isloading= false;
				}
			}
})


.directive('loader', function(){
			return{
				restrict: 'A',
				template: '<h2 class="loaderText" data-ng-show="isloading"> Sending Information</h2>',
				replace: true,
				link: function(scope,ele,attr){
					scope.isloading= false;
				}
			}
})


.directive('zip', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Zip<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' name='zip' data-ng-model='zip' data-ng-pattern='zipR' data-ng-required='{{req}}' placeholder='ZIP'>" +
						"<p data-ng-show='form.zip.$invalid && form.zip.$dirty'>You must enter your zip code</p>",
				link: function(scope){
					scope.zipR= /^\d{5}$/;
				}
			}
		})

.directive('year', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Year<span class='reqText'>Required</span></label><input type='text' name='vyear' data-ng-model='vyear' data-ng-pattern='vyearR' required='true' placeholder='YYYY'>" +
						"<p data-ng-show='form.vyear.$invalid && form.vyear.$dirty'>You must enter the vehicles year</p>",
				link: function(scope){
				scope.vyearR= /^(19|20)\d{2}$/;
				}
			}
})

.directive('plate', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Plate<span class='reqText'>Required</span></label><input type='text' data-ng-maxlength='8' name='vplate' data-ng-model='vplate' data-ng-maxlength='8' required='true' placeholder='License Plate'>" +
						"<p data-ng-show='form.vplate.$invalid && form.vplate.$dirty'>You must enter the vehicles license plate</p>"
			}
})

.directive('pcolor', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Primary Color<span class='reqText'>Required</span></label><input type='text' name='vpc' data-ng-model='vpc' required='true' placeholder='Primary Color'>" +
						"<p data-ng-show='form.vpc.$invalid && form.vpc.$dirty'>You must enter the vehicle primary color</p>"
			}
})

.directive('scolor', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Secondary Color<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' name='vsc' data-ng-model='vsc' placeholder='Secondary Color'>" +
						"<p data-ng-show='form.vsc.$invalid && form.vsc.$dirty'>You must enter the vehicle secondary color</p>"
			}
})

.directive('model', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Model<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' data-ng-required='req' name='vmodel' data-ng-model='vmodel' placeholder='Model'>" +
						"<p data-ng-show='form.vmodel.$invalid && form.vmodel.$dirty'>You must enter the vehicle model</p>"
			}
})

.directive('firstname', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>First Name<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' data-ng-required='req' name='fn' data-ng-model='fn' placeholder='First Name'>" +
						"<p data-ng-show='form.fn.$invalid && form.fn.$dirty'>You must enter your first name</p>"
			}
})

.directive('lastname', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Last Name<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' data-ng-required='req' name='ln' data-ng-model='lastname' placeholder='Last Name'>" +
						"<p data-ng-show='form.lastname.$invalid && form.lastname.$dirty'>You must enter your last name</p>"
			}
})

.directive('address', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Address<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' name='address' data-ng-model='address' data-ng-required='{{req}}' placeholder='Address'>" +
						"<p data-ng-show='form.address.$invalid && form.address.$dirty'>You must enter an address</p>"
			}
})

.directive('email', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Email<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' name='email' data-ng-model='email' data-ng-required='{{req}}' data-ng-pattern='/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/' placeholder='Email'>" +
				"<p data-ng-show='form.email.$invalid && form.email.$dirty'>You must enter an email</p>"
		}
})

.directive('phone',function(){
			return{
				restrict:'AE',
				scope:{
					req: "=req"
				},
				template:"<label>Phone<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' name='phone' data-ng-maxlength='12' data-ng-model='phone' data-ng-required='{{req}}' data-ng-pattern='/[0-9-\-]{12,}/' placeholder='555-555-1212'>" +
				"<p data-ng-show='form.phone.$invalid && form.phone.$dirty'>You must enter a valid phone number (ex.555-555-1212)</p>"
		}
		})

.directive('city', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>City<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' name='city' data-ng-model='city' data-ng-required='{{req}}' placeholder='City'>" +
						"<p data-ng-show='form.city.$invalid && form.city.$dirty'>You must enter your city</p>"
			}
})

		.directive('make', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Make<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' data-ng-required='req' name='vmake' data-ng-model='vmake' placeholder='Make'>" +
						"<p data-ng-show='form.vmake.$invalid && form.vmake.$dirty'>You must enter the vehicles model</p>"
			}
		})

		.directive('companyname', function(){
			return{
				restrict: "AE",
				scope:{
					req: "=req"
				},
				template:"<label>Company/Suspect Name<span class='reqText' data-ng-show='req'>Required</span></label><input type='text' name='compName' data-ng-model='compName' required='req' placeholder='Company Name'>" +
				"<p data-ng-show='form.compName.$invalid && form.compName.$dirty'>You must enter your address</p>"
			}
		})


.directive('vin', function(){
			return{
				restrict: 'AE',
				scope:{
					req: "=req"
				},
				template: "<label>Last Four of VIN<span class='reqText'>Required</span></label><input type='text' name='vvin' data-ng-model='vvin' data-ng-pattern='vinR' required='true' placeholder='VIN'>" +
						"<p data-ng-show='form.vvin.$invalid && form.vvin.$dirty'>You must enter the last four VIN</p>",
				link: function(scope){
					scope.vinR= /^(\d){4}$/;
				}
			}
		})



.directive('return', function(){
			return{
				restrict: 'A',
				template:'<nav data-ng-show="rt">' +
						'<a data-ng-click="next()"> Return to Summary</a></nav>',
				replace: true
			};
		})

.directive('portalcancel', function(){
			return{
				restrict: 'E',
				template:'<nav class="portalCancel" ng-controller="PortalCancelController">' +
						'<a ng-click="portalCancel()">Cancel</a></nav>',
				replace: true
			};
		})




/*
 .directive('vanav', function() {
 return {
 controller: function ($scope){
 if(window.location.href.indexOf(":3") !==-1){
 var host = "http://localhost/globals/includes/vaNav.html";
 $scope.strr = host;
 }else{
 var host = window.location.host + '/globals/includes/vaNav.html';
 $scope.strr = host;
 }
 },
 scope:{},
 restrict: 'A',
 replace: true,
 template: "<ul class='vaNav' data-ng-include='strr'></ul>"
 };
 })*/
