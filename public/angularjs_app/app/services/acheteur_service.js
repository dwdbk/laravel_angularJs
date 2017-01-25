

services.factory('acheteurService', function($http, $rootScope) {
	
	return {

		getAll:function(successCallBack, failureCallBack) {
			$http.get("rest/acheteurs")
			.success(function (data, status, headers, config) {
				successCallBack(data);
			})
			.error(function (data, status, headers, config) {
				failureCallBack(data, status, headers, config);
			})
		},
		// acheteurId: name: phone:	email:

		add:function(acheteurId, name, phone, email, successCallBack, failureCallBack) {
			$http.post("rest/acheteurs", {
				acheteurId:acheteurId,
				name:name,
				phone: phone,
				email: email
			})
				.success(function (data, status, headers, config) {
					successCallBack(data, status, headers, config);
				})
				.error(function (data, status, headers, config) {
					failureCallBack(data, status, headers, config);
				})
		},
		// Update function
		update:function(achteur, successCallBack, failureCallBack) {
			$http.put("rest/acheteurs", {
				acheteurId:achteur.acheteurId,
				name: achteur.name,
				phone: achteur.phone,
				email: achteur.email
			})
				.success(function (data, status, headers, config) {
					successCallBack(data, status, headers, config);
				})
				.error(function (data, status, headers, config) {
					failureCallBack(data, status, headers, config);
				})
		}
		 /* delete:function(data, statut, headers, config) {
			$http.delete("rest/achteurs", {
				data: $delete();
			})
		}
		*/
	}
});