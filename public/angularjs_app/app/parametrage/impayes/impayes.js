'use strict';

controllers.controller('impayesController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

	$scope.fournisseurs = [{
		idFournisseur:1,
		nom:"FRS1",
		adresse:"Rabat",
		ville:"Rabat",
		pays:"Maroc",
		tel:"0544663377",
		contact:"frs2 name",
		mobile:"0600012212",
		fax:"0544663377",
		email:"test@frs2.com"
	},{
		idFournisseur:2,
		nom:"FRS2",
		adresse:"Rabat",
		ville:"Rabat",
		pays:"Maroc",
		tel:"0544663377",
		contact:"frs2 name",
		mobile:"0600012212",
		fax:"0544663377",
		email:"test@frs2.com"
	},{
		idFournisseur:3,
		nom:"FRS2",
		adresse:"Rabat",
		ville:"Rabat",
		pays:"Maroc",
		tel:"0544663377",
		contact:"frs2 name",
		mobile:"0600012212",
		fax:"0544663377",
		email:"test@frs2.com"
	},{
		idFournisseur:4,
		nom:"FRS3",
		adresse:"Rabat",
		ville:"Rabat",
		pays:"Maroc",
		tel:"0544663377",
		contact:"frs2 name",
		mobile:"0600012212",
		fax:"0544663377",
		email:"test@frs2.com"
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

	$scope.acheteurs = [{
		idAcheteur:1,
		nom:"AM",
		tel:"0544663377",
		abv:"AM",
		email:"test@hajjia.com"
	},{
		idAcheteur:2,
		nom:"HK",
		tel:"0544663377",
		abv:"HK",
		email:"test@hajjia.com"
	},{
		idAcheteur:2,
		nom:"HS",
		tel:"0544663377",
		abv:"HS",
		email:"test@hajjia.com"
	}];

	$scope.achats = [{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	},{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	},{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	},{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	},{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	},{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	},{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	},{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	},,{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	},{
		achatId:"12983",
		dateFacture:"14/1/2015",
		amount:14528,
		fournissuer:"DFGE",
		reference:"KI256398",
		recevier:"RTOIU"
	}
	];

}
]);