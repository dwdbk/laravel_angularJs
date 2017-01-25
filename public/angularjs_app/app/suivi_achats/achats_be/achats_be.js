'use strict';

controllers.controller('achatsBEController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

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
	
		$scope.achats = [{
			numFacture:"12983"
		},{
			numFacture:"12984"
		},{
			numFacture:"12985"
		},{
			numFacture:"12986"
		},{
			numFacture:"12987"
		},{
			numFacture:"12988"
		},{
			numFacture:"12989"
		},{
			numFacture:"12990"
		},{
			numFacture:"12991"
		},{
			numFacture:"12992"
		},{
			numFacture:"12993"
		},{
			numFacture:"12994"
		},{
			numFacture:"12995"
		}];
	
		$scope.achatsRecherche = [{
			numFacture:"12983"
		},{
			numFacture:"12984"
		},{
			numFacture:"12985"
		}];

	}
]);