'use strict';

controllers.controller('ordonnateurController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
	
		$scope.ordonnateur = [{
			idOrdonnateur:1,
			ordonnateur:"Mohamed",
			tel:"0544663377",
			email:"test@mail.com"
		},{
			idOrdonnateur:2,
			ordonnateur:"Fouad",
			tel:"0544663377",
			email:"test@mail.com"
		},{
			idOrdonnateur:3,
			ordonnateur:"Ali",
			tel:"0544663377",
			email:"test@mail.com"
		},{
			idOrdonnateur:4,
			ordonnateur:"Salim",
			tel:"0544663377",
			email:"test@mail.com"
		}];

	}
]);