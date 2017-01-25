'use strict';

controllers.controller('mode_paiementController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
	
		$scope.mode_paiement = [{
			idMode_paiement:"DFA",
			mode_paiement:"Chèque",
			delais_paiement:3
		},{
			idMode_paiement:"YTH",
			mode_paiement:"Espèces",
			delais_paiement:2
		},{
			idMode_paiement:"AOZ",
			mode_paiement:"Espèces",
			delais_paiement:5
		},{
			idMode_paiement:"KIO",
			mode_paiement:"Chèque",
			delais_paiement:2
		},{
			idMode_paiement:"MBI",
			mode_paiement:"Chèque",
			delais_paiement:7
		},{
			idMode_paiement:"AYS",
			mode_paiement:"Chèque",
			delais_paiement:12
		},{
			idMode_paiement:"XCW",
			mode_paiement:"Chèque",
			delais_paiement:2
		}];

	}
]);