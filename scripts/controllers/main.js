app.controller("MainCtrl", function($scope,$http, Datafetch ){
	// alert("working main ctrl")
	/*$http({
		url : "https://www.w3schools.com/angular/customers.php",
		method : "GET"
	}).then(function(success){
		console.log("data@@@@@", success)
	}, function(error){
		console.log("error", error)
	})*/
	Datafetch.Customer().then(function(success){
		console.log("data#####", success);
		$scope.customers = success
	}, function(error){
		console.log("error@@@@@@@@", error)
	})
})
app.controller("AboutCtrl", function($scope,Datafetch){
	// alert("working main ctrl")
	Datafetch.Customer().then(function(success){
		console.log("data#####", success);
		$scope.customers = success
	}, function(error){
		console.log("error@@@@@@@@", error)
	})
})
app.controller("ControlCtrl", function(){
	// alert("working main ctrl")
})