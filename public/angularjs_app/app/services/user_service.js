

services.factory('userService', function($http, $rootScope) {
	
	return {
		login:function(username, password, successCallBack, failureCallBack) {
			$http.post("rest/j_spring_security_check", {
				j_username: username,
				j_password: password
			})
			.success(function (data, status, headers, config) {
				successCallBack(data, status, headers, config);
			})
			.error(function (data, status, headers, config) {
				failureCallBack(data, status, headers, config);
			})
		},
		getAll:function(successCallBack, failureCallBack) {
			$http.get("rest/users")
			.success(function (data, status, headers, config) {
				successCallBack(data);
			})
			.error(function (data, status, headers, config) {
				failureCallBack(data, status, headers, config);
			})
		},
		add:function(firstname, lastname, abv, phone, login, password, profil, successCallBack, failureCallBack) {
			$http.post("rest/users", {
				firstname: firstname,
				lastname: lastname,
				abv: abv,
				phone: phone,
				login: login,
				password: password,
				profil: profil
			})
			.success(function (data, status, headers, config) {
				successCallBack(data, status, headers, config);
			})
			.error(function (data, status, headers, config) {
				failureCallBack(data, status, headers, config);
			})
		}
	}
	
});