'use strict';

controllers.controller('caisse_beController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

		setTimeout(function() {
			$('#a_liste').click(function (e) {
			  e.preventDefault()
			  $(this).tab('show')
			  //$('#liste').show()
			  //$('#recherche').hide()
			});

			$('#a_recherche').click(function (e) {
			  e.preventDefault()
			  $(this).tab('show')
			  //$('#recherche').show()
			  //$('#liste').hide()
			});
		}, 2000);

	$scope.caisse_be = [{
		idCaisse_be:1,
		num:"Caisse 1",
		date:"2015-01-11 00:00:00",
		dateDebut:"2014-12-11 00:00:00",
		dateFin:"2014-12-31 00:00:00",
		operateur:"AH",
		destinateure:"HR"
	},{
		idCaisse_be:2,
		num:"Caisse 1",
		date:"2015-01-11 00:00:00",
		dateDebut:"2014-12-11 00:00:00",
		dateFin:"2014-12-31 00:00:00",
		operateur:"AH",
		destinateure:"HR"
	},{
		idCaisse_be:3,
		num:"Caisse 1",
		date:"2015-01-11 00:00:00",
		dateDebut:"2014-12-11 00:00:00",
		dateFin:"2014-12-31 00:00:00",
		operateur:"AH",
		destinateure:"HR"
	},{
		idCaisse_be:4,
		num:"Caisse 4",
		date:"2015-01-11 00:00:00",
		dateDebut:"2014-12-11 00:00:00",
		dateFin:"2014-12-31 00:00:00",
		operateur:"AH",
		destinateure:"HR"
	},{
		idCaisse_be:5,
		num:"Caisse 5",
		date:"2015-01-11 00:00:00",
		dateDebut:"2014-12-11 00:00:00",
		dateFin:"2014-12-31 00:00:00",
		operateur:"AH",
		destinateure:"HR"
	}];
	$scope.destinataires = [{
		idDestinataire:1,
		nom:"AM",
		tel:"0544663377",
		abv:"AM",
		email:"test@hajjia.com"
	},{
		idDestinataire:2,
		nom:"HK",
		tel:"0544663377",
		abv:"HK",
		email:"test@hajjia.com"
	},{
		idDestinataire:2,
		nom:"HS",
		tel:"0544663377",
		abv:"HS",
		email:"test@hajjia.com"
	}];


	}
]);