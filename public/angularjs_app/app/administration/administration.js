'use strict';
controllers.controller('administrationController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
	$scope.profils = [{
		profilId:1,
		label:"Administrateur",
		whrite:"Enable",
		read:"Enable",
		print:"Enable",
		export:"Enable"
	},{
		profilId:2,
		label:"Utilisateur",
		whrite:"Enable",
		read:"Enable",
		print:"Enable",
		export:"Enable"
	},{
		profilId:3,
		label:"Operateur",
		whrite:"Enable",
		read:"Enable",
		print:"Disable",
		export:"Disable"
	}];
	$scope.utilisateurs=[{
		firstname: "FGGJD",
		lastname: "DKJHGG",
		phone: "0251659858",
		abv: "ffv",
		login: "aze",
		password: "125487",
		user_profil: "Administrateur"
	},{
		firstname: "FGGJD",
		lastname: "DKJHGG",
		phone: "0251659858",
		abv: "ffv",
		login: "aze",
		password: "125487",
		user_profil: "Utilisateur"
	},{
		firstname: "FGGJD",
		lastname: "DKJHGG",
		phone: "0251659858",
		abv: "ffv",
		login: "aze",
		password: "125487",
		user_profil: "Operateur"
	}];
	$scope.traces = [{
		trceId:1,
		rubrique:"Utilisateur",
		parametres:"",
		action:"Modification",
		addDate:"14/01/2014 à 3h:45min",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Farid",
		user_profil: "Administrateur",
		show:false
	},{
		trceId:2,
		rubrique:"BE caisse",
		parametres:"",
		action:"Modification",
		addDate:"14/01/2014 à 13h:45min",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Ali",
		user_profil: "Utilisateur",
		show:false
	},{
		trceId:3,
		rubrique:"Impays",
		parametres:"",
		action:"Suppression",
		addDate:"14/01/2014 à 22h:45min",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Wadid",
		user_profil: "Administrateur",
		show:false
	},{
		trceId:4,
		rubrique:"achats",
		parametres:"",
		action:"Modification",
		addDate:"14/01/2014 à 3h:05min",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Farid",
		user_profil: "Administrateur",
		show:false
	},{
		trceId:5,
		rubrique:"Opérateur",
		action:"Ajout",
		addDate:"14/01/2014 à 15h:45min",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Farid",
		user_profil: "Administrateur",
		show:false
	},{
		trceId:6,
		rubrique:"Réglement",
		parametres:"",
		action:"Modification",
		addDate:"14/01/2014 à 08h:45min",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Farid",
		user_profil: "Administrateur",
		show:false

	},{
		trceId:2,
		rubrique:"achats",
		action:"Modification",
		addDate:"14/01/2014",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Farid",
		user_profil: "Administrateur",
		show:false
	},{
		trceId:3,
		rubrique:"achats",
		parametres:"",
		action:"Suppression",
		addDate:"14/01/2014",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Farid",
		user_profil: "Administrateur",
		show:false
	},{
		trceId:4,
		rubrique:"achats",
		parametres:"",
		action:"Modification",
		addDate:"14/01/2014",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Farid",
		user_profil: "Administrateur",
		show:false
	},{
		trceId:5,
		rubrique:"achats",
		parametres:"",
		action:"Ajout",
		addDate:"14/01/2014",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Farid",
		user_profil: "Administrateur",
		show:false
	},{
		trceId:6,
		rubrique:"achats",
		parametres:"",
		action:"Modification",
		addDate:"14/01/2014",
		updateDate:"15/01/2015",
		deleteDate:"22/02/2015",
		user:"Farid",
		user_profil: "Administrateur",
		show:false
	}];
	$scope.parametres =[{
		parametre:"libelle",
		newValue:"Catégorie 1",
		oldValue:"Catégorie 5",
		show:false
	},{
		parametre:"achats",
		newValue:"Catégorie 9",
		oldValue:"Catégorie 4"
	},{
		parametre:"Ajout",
		newValue:"Catégorie 9",
		oldValue:"Catégorie 4"
	},{
		parametre:"libelle",
		newValue:"Catégorie 9",
		oldValue:"Catégorie 4"
	}];

	}
]);