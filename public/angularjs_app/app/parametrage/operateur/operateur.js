'use strict';

controllers.controller('operateurController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
	
		$scope.operateur = [{
			idOperateur:1,
			operateur:"FG",
			tel:"0544663377",
			password:"pass"
		},{
			idOperateur:2,
			operateur:"DF",
			tel:"0544663377",
			password:"pass"
		},{
			idOperateur:3,
			operateur:"JK",
			tel:"0544663377",
			password:"pass"
		},{
			idOperateur:4,
			operateur:"ML",
			tel:"0544663377",
			password:"pass"
		}];

	}
]);