app.factory("Datafetch", ['$http', '$q', function($http, $q){
	var object = {};
	object.Customer = function(){
		var defered = $q.defer();
		$http({
			url : "https://www.w3schools.com/angular/customers.php",
			method : "GET"
		}).then(function(success){
			defered.resolve(success)
		}, function(error){
			defered.reject(error)
		})
		return defered.promise;
	}
	return object;
}])