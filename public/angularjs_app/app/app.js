'use strict';

var baseUrl = ".";

var app = angular.module('app', ['ngCookies', 'ngRoute', 'app.services', 'app.controllers']);

/* Controllers */
var controllers = angular.module('app.controllers', []);

var services = angular.module('app.services', []).value('version', '0.1');

// configuration des appels Ajax
app.config(function($httpProvider, $routeProvider) {
    $httpProvider.defaults.transformRequest = function(data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };
});

// Configuration des routes
app.config(function($httpProvider, $routeProvider) {

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $routeProvider.when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'loginController'
    });
    $routeProvider.when('/administration', {
        templateUrl: 'app/administration/administration.html',
        controller: 'administrationController'
    });
    $routeProvider.when('/achats', {
        templateUrl: 'app/suivi_achats/achats/achats.html',
        controller: 'achatsController'
    });
    $routeProvider.when('/achats_be', {
        templateUrl: 'app/suivi_achats/achats_be/achats_be.html',
        controller: 'achatsBEController'
    });
    $routeProvider.when('/caisse_be', {
        templateUrl: 'app/suivi_achats/caisse_be/caisse_be.html',
        controller: 'caisse_beController'
    });
    $routeProvider.when('/reglement', {
        templateUrl: 'app/suivi_achats/reglement/reglement.html',
        controller: 'reglementController'
    });
    $routeProvider.when('/caisse_ops', {
        templateUrl: 'app/suivi_achats/caisse_ops/caisse_ops.html',
        controller: 'caisse_opsController'
    });
    $routeProvider.when('/fournisseurs', {
        templateUrl: 'app/parametrage/fournisseurs/fournisseurs.html',
        controller: 'fournisseursController'
    });
    $routeProvider.when('/profils', {
        templateUrl: 'app/administration/profils/profils.html',
        controller: 'profilsController'
    });
    $routeProvider.when('/habilitations', {
        templateUrl: 'app/administration/habilitations/habilitations.html',
        controller: 'habilitationsController'
    });
    $routeProvider.when('/traces', {
        templateUrl: 'app/administration/traces/traces.html',
        controller: 'tracesController'
    });
    $routeProvider.when('/utilisateurs', {
        templateUrl: 'app/parametrage/utilisateurs/utilisateurs.html',
        controller: 'utilisateursController'
    });
    $routeProvider.when('/ordonnateurs', {
        templateUrl: 'app/parametrage/ordonnateurs/ordonnateurs.html',
        controller: 'ordonnateursController'
    });
    $routeProvider.when('/acheteurs', {
        templateUrl: 'app/parametrage/acheteurs/acheteurs.html',
        controller: 'acheteursController'
    });
    $routeProvider.when('/parametrages', {
        templateUrl: 'app/parametrage/parametrages/parametrages.html',
        controller: 'parametragesController'
    });
    $routeProvider.when('/impayes', {
        templateUrl: 'app/parametrage/impayes/impayes.html',
        controller: 'impayesController'
    });
    $routeProvider.when('/mode_paiement', {
        templateUrl: 'app/parametrage/mode_paiement/mode_paiement.html',
        controller: 'mode_paiementController'
    });
    $routeProvider.when('/page404', {
        templateUrl: 'js/home/page404.tpl.html'
    });
    $routeProvider.when('/page401', {
        templateUrl: 'js/home/page401.tpl.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/page404'
    });
    $httpProvider.interceptors.push('app.httpinterceptor');
});

app.value({
    bodyClass: 'notAuthenticated'
});

app.controller('bodyController', function($scope, $location, $route) {
    $scope.$on('$routeChangeSuccess', function($currentRoute, $previousRoute) {
        console.log('Current route name: ' + $location.path());

        if ($location.path() == '/login') {
            $scope.bodyclass = "authentification";
        } else {
            $scope.bodyclass = "notAuthenticated";
        }
    });
});

//Intercepteur HTTP
app.factory('app.httpinterceptor', function($q, $rootScope, $location) {
    return {
        // optional method
        'request': function(config) {
            return config || $q.when(config);
        },
        // optional method
        'requestError': function(rejection) {
            return $q.reject(rejection);
        },
        // optional method
        'response': function(response) {
            return response || $q.when(response);
        },
        // optional method
        'responseError': function(rejection) {
            if (rejection.status === 403) {
                $rootScope.isAuthenticated = false;
                $location.path('/login');
            }
            return $q.reject(rejection);
        }
    };
});