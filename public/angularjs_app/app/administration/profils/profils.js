'use strict';

controllers.controller('profilsController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

    $scope.profils = [{
        profilId:1,
        label:"Administrateur",
        rubrique:"achats",
        read:"checked",
        print:"checked",
        export:"checked"
    },{
        profilId:2,
        label:"Utilisateur",
        rubrique:"Réglement",
        read:"checked",
        print:"checked",
        export:"checked"
    },{
        profilId:3,
        label:"Operateur",
        rubrique:"Ordonnateur",
        read:"",
        print:"checked",
        export:"checked"
    }];

    $scope.ordonateurs = [{
        idOrdonateur:1,
        nom:"HAJJIA",
        tel:"Enable",
        email:"test@hajjia.com"
    },{
        idOrdonateur:2,
        nom:"MOHAMED",
        tel:"Enable",
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
        tel:"Enable"
    },{
        idOperateur:2,
        nom:"AN2",
        tel:"Enable"
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
        user_profil: "Opérateur"
    }];



}
]);