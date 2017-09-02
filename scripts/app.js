var app = angular.module("MyApp", ['ngRoute']);
app.controller("MyCtrl", function(){
	// alert("working");
});
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "views/main.html",
		controller : "MainCtrl"
	})
	.when("/about",{
		templateUrl : "views/about.html",
		controller : "AboutCtrl"
	})
	.when("/contact",{
		templateUrl : "views/contact.html"
	})
	.otherwise("/",{
		templateUrl : "views/main.html"
	})
})