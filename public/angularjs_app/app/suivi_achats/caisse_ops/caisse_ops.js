'use strict';

controllers.controller('caisse_opsController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

	$scope.caisse_ops = [{
		idCaisse_ops:1,
		date:"2015-01-11 00:00:00",
		ordonnateur:"CHAJI",
		reference:"DFG",
		beneficiaire:"HR",
		montant:1425.12
	},{
		idCaisse_ops:1,
		date:"2015-01-11 00:00:00",
		ordonnateur:"CHAJI",
		reference:"DFG",
		beneficiaire:"HR",
		montant:1425.12
	},{
		idCaisse_ops:1,
		date:"2015-01-11 00:00:00",
		ordonnateur:"CHAJI",
		reference:"DFG",
		beneficiaire:"HR",
		montant:1425.12
	},{
		idCaisse_ops:1,
		date:"2015-01-11 00:00:00",
		ordonnateur:"CHAJI",
		reference:"DFG",
		beneficiaire:"HR",
		montant:1425.12
	},{
		idCaisse_ops:1,
		date:"2015-01-11 00:00:00",
		ordonnateur:"CHAJI",
		reference:"DFG",
		beneficiaire:"HR",
		montant:1425.12
	}];
		
		$scope.ordonateurs = [{
			idOrdonateur:1,
			nom:"HAJJIA",
			tel:"0544663377",
			email:"test@hajjia.com"
		},{
			idOrdonateur:2,
			nom:"MOHAMED",
			tel:"0544663377",
			email:"test@mohamed.com"
		}];
		
		$scope.modesPaiements = [{
			idModePaiement:1,
			nom:"Cheque",
			delais:3
		},{
			idModePaiement:2,
			nom:"Carte",
			delais:1
		},{
			idModePaiement:3,
			nom:"Espece",
			delais:0
		}];
		
		$scope.operateurs = [{
			idOperateur:1,
			nom:"AN",
			tel:"0544663377"
		},{
			idOperateur:2,
			nom:"AN2",
			tel:"0544663377"
		}];

}
]);