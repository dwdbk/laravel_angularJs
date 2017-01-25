'use strict';

controllers.controller('acheteursController', ['$rootScope', '$scope', '$location', 'acheteurService', 'bootstrapModal', function($rootScope, $scope, $location, acheteurService, bootstrapModal) {

	/*$scope.acheteurs = [{
		acheteurId: "GDTA",
		name: "Ali",
		phone: "065987458",
		email: "test@neoxia.com"
	},{
		acheteurId: "APOUS",
		name: "Farid",
		phone: "065987458",
		email: "test@neoxia.com"
	},{
		acheteurId: "RETSK",
		name: "Walid",
		phone: "065987458",
		email: "test@neoxia.com"
	}];
	*/
	$scope.acheteurs = [{
		acheteurId:"FoD",
		lastname:"Farid",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FGD",
		lastname:"Mouad",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"mGD",
		lastname:"Salim",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FhD",
		lastname:"Mohamed",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FzD",
		lastname:"Ali",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FyD",
		lastname:"Walid",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"mGD",
		lastname:"Salim",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FhD",
		lastname:"Mohamed",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FzD",
		lastname:"Ali",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FyD",
		lastname:"Walid",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"mGD",
		lastname:"Salim",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FhD",
		lastname:"Mohamed",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FzD",
		lastname:"Ali",
		phone:"0544663377",
		email:"farid@mail.com"
	},{
		acheteurId:"FyD",
		lastname:"Walid",
		phone:"0544663377",
		email:"farid@mail.com"
	}];
	acheteurService.getAll(function(acheteurs) {
		$scope.acheteurs = acheteurs;
	}, function(error){
		console.log(error);
	});

	$scope.newAcheteur = function() {
		$scope.acheteur = {
			acheteurId: "",
			name: "",
			phone: "",
			email: ""
		}
	}
	$scope.saveNewAcheteur = function() {
		//
		acheteurService.add($scope.acheteur.acheteurId, $scope.acheteur.name, $scope.acheteur.phone, $scope.acheteur.email, function(acheteur) {
			$scope.acheteurs.push(acheteur);
			bootstrapModal.close();
		}, function(){
			alert("erreur dans l'ajout d'un nouveau acheteur !");
		})
	}
	$scope.editAchteur = function(acheteur){
		acheteurService.update($scope.acheteur.acheteurId, $scope.acheteur.name, $scope.acheteur.phone, $scope.acheteur.email, function(acheteur) {
			$scope.acheteurs.push(acheteur);
			bootstrapModal.close();
		}, function(){
			alert("erreur de la modification acheteur !");
		});
	}

}
]);