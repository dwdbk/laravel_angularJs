'use strict';

controllers.controller('reglementController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

	$scope.reglements = [{
		reglementId:1,
		reference:"GHD",
		reglementDate:"12/05/2014",
		numBe:"BE 1",
		montant:1452,
		montantTotal:2451
	},{
		reglementId:2,
		reference:"GHD",
		reglementDate:"12/05/2014",
		numBe:"BE 1",
		montant:1452,
		montantTotal:2451
	},{
		reglementId:3,
		reference:"GHD",
		reglementDate:"12/05/2014",
		numBe:"BE 1",
		montant:1452,
		montantTotal:2451
	},{
		reglementId:4,
		reference:"GHD",
		reglementDate:"12/05/2014",
		numBe:"BE 1",
		montant:1452,
		montantTotal:2451
	},{
		reglementId:5,
		reference:"GHD",
		reglementDate:"12/05/2014",
		numBe:"BE 1",
		montant:1452,
		montantTotal:2451
	}];

	$scope.bordereauxEnvoi = [{
		idBE:1,
		num:"BE 1",
		date:"2015-01-11 00:00:00",
		dateDebut:"2014-12-11 00:00:00",
		dateFin:"2014-12-31 00:00:00",
		observation:"aucune"
	},{
		idBE:2,
		num:"BE 2",
		date:"2015-01-31 00:00:00",
		dateDebut:"2015-01-01 00:00:00",
		dateFin:"2015-01-31 00:00:00",
		observation:"aucune"
	},{
		idBE:3,
		num:"BE 3",
		date:"2015-02-28 00:00:00",
		dateDebut:"2015-02-01 00:00:00",
		dateFin:"2015-02-19 00:00:00",
		observation:"aucune"
	}];
	$scope.bordereauxEnvoi = [{
		idBE:1,
		num:"BE 1",
		date:"2015-01-11 00:00:00",
		dateDebut:"2014-12-11 00:00:00",
		dateFin:"2014-12-31 00:00:00",
		observation:"aucune"
	},{
		idBE:2,
		num:"BE 2",
		date:"2015-01-31 00:00:00",
		dateDebut:"2015-01-01 00:00:00",
		dateFin:"2015-01-31 00:00:00",
		observation:"aucune"
	},{
		idBE:3,
		num:"BE 3",
		date:"2015-02-28 00:00:00",
		dateDebut:"2015-02-01 00:00:00",
		dateFin:"2015-02-19 00:00:00",
		observation:"aucune"
	}];
	$scope.bordereauxEnvoi = [{
		idBE:1,
		num:"BE 1",
		date:"2015-01-11 00:00:00",
		dateDebut:"2014-12-11 00:00:00",
		dateFin:"2014-12-31 00:00:00",
		observation:"aucune",
		show:false
	},{
		idBE:2,
		num:"BE 2",
		date:"2015-01-31 00:00:00",
		dateDebut:"2015-01-01 00:00:00",
		dateFin:"2015-01-31 00:00:00",
		observation:"aucune",
		show:false
	},{
		idBE:3,
		num:"BE 3",
		date:"2015-02-28 00:00:00",
		dateDebut:"2015-02-01 00:00:00",
		dateFin:"2015-02-19 00:00:00",
		observation:"aucune",
		show:false
	}];

	$scope.achats = [{
		numFacture:"12983",
		montant:154,
		fournissuer:"fhje",
		reference:"feteg",
		destinateure:"fdfd"
		},{
		numFacture:"12983",
		montant:154,
		fournissuer:"DFS",
		reference:"feteg",
		destinateure:"fdfd"
		},{
		numFacture:"4454",
		montant:154,
		fournissuer:"DAL",
		reference:"feteg",
		destinateure:"fdfd"
		},{
		numFacture:"12983",
		montant:154,
		fournissuer:"OUG",
		reference:"feteg",
		destinateure:"fdfd"
		}];

	}
]);