/**
 * Created by DANI Fouad on 04/03/2015.
 */
'use strict';
/**
 * Controlleur pour gérer les Traces
 *
 * @class Tracabilite
 * @namespace BO.Home.Administration
 */
controllers.controller('tracabiliteContoller', ['$rootScope', '$scope', 'restService', 'bootstrapModal', 'notification', '$filter', 'truncate',
    function($rootScope, $scope, restService, bootstrapModal, notification, $filter, truncate) {
        //Vars
        /**
         * @attribute errors
         * @type Object
         * @required
         */
        $scope.errors = [];
        /**
         * @attribute alerts
         * @type Object
         * @required
         */
        $scope.alerts = [];
        /**
         * @attribute warnings
         * @type Object
         * @required
         */
        $scope.warnings = [];
        /**
         * @attribute droit
         * @type boolean
         * @required
         * @default false
         */
        $scope.droit = false;
        /**
         * @attribute notifications
         * @type Object
         * @optional
         */
        $scope.notifications = notification.list;
        /**
         * @attribute dateDebut
         * @type Date
         * @required
         * @default new Date()
         */
        $scope.dateDebut = new Date();
        /**
         * @attribute dateFin
         * @type Date
         * @required
         * @default new Date()
         */
        $scope.dateFin = new Date();
        /**
         * @attribute submitted
         * @type boolean
         * @required
         * @default false
         */
        $scope.submitted = false;
        /**
         * @attribute loading
         * @type boolean
         * @required
         * @default false
         */
        $scope.loading = false;
        /**
         * @attribute userSelected
         * @type User
         * @required
         */
        $scope.userSelected = [];

        //Utilities
        /*
         * Vider les tableaux des alerts, notifications, erreurs, ...
         */
        /**
         * Cet évènement est déclenché lors de suppression des alertes
         * @event resetErrors
         */
        $scope.resetErrors = function() {
            console.log("reset erreurs");
            $scope.errors = [];
            $scope.alerts = [];
            $scope.warnings = [];
            $scope.notifications = notification.list;
        };


        /**
         * Cette fonction permet de changer une date à une chaine de characters
         * @method parseDate
         * @param date {Date}
         * @return value {String}
         */
        $scope.parseDate = function(date) {
            var curr_date = date.getDate();
            var curr_month = date.getMonth() + 1;
            var curr_year = date.getFullYear();
            return curr_date + "/" + curr_month + "/" + curr_year;
        }

        // Initialisation

        loadAllRubriques(function(data, status, headers, config) {
            console.log("Liste des rubriques OK", data);

            if (data === null || data.length === 0) {
                $scope.alerts = [];
                $scope.alerts.push({
                    type: "alert-info",
                    msg: "Aucune rubrique n’est créée jusqu’à maintenant."
                });
            }
            $scope.rubriques = data;
            //$scope.rubrique = $scope.rubriques[0];
        }, function(data, status, headers, config) {
            $location.path('/page401');
            console.log("Erreur de chargement des rubriques");
        });

        loadAllUsers(function(data, status, headers, config) {
            console.log("Liste des utilisateurs OK", data);

            if (data === null || data.length === 0) {
                $scope.alerts.push({
                    type: "alert-info",
                    msg: "Aucun utilisateur n’est créé jusqu’à maintenant."
                });
            }
            $scope.users = data;
            console.log("users : ", $scope.users);
            $scope.userSelected = $scope.users;
            //$scope.users.push({nom : 'Tous les utilisateurs'});
        }, function(data, status, headers, config) {
            $location.path('/page401');
            console.log("Erreur de chargement des utilisateurs");
        });

        /**
         * Cette fonction permet de rassembler plusieurs trace dans une seul trace
         * @method toCollapseTable
         * @param data {Trace}
         * @return filtredData {Object}
         */
        $scope.toCollapseTable = function(data) {
            var ids = [];
            for (var i = 0; i < data.length; i++) {
                var index = existIn(ids, data[i].idTrace);
                console.log(">>index", index);
                if (index === -1) {
                    ids.push({
                        show: false,
                        id: data[i].idTrace,
                        action: data[i].action,
                        user: data[i].userBean.nomUser + " " + data[i].userBean.prenomUser,
                        date: data[i].dateOperation,
                        nom: truncate(data[i].nom),
                        parametres: [{
                            parametre: data[i].parametre,
                            newValue: data[i].nouvelleValeur,
                            oldValue: data[i].valeurInitiale
                        }]
                    });
                } else {
                    ids[index].parametres.push({
                        parametre: data[i].parametre,
                        newValue: data[i].nouvelleValeur,
                        oldValue: data[i].valeurInitiale
                    });
                }
            };
            return ids;
        }
        /**
         * Cette fonction permet de verifier l'existance d'une trace et returner son index
         * @method existIn
         * @param table {List(Trace)}
         * @param value {Integer}
         * @return index {Integer}
         */
        function existIn(table, value) {
            for (var i = table.length - 1; i >= 0; i--) {
                if (table[i].id === value) {
                    return i;
                }
            };
            return -1;
        }
        /**
         * Cet évènement est déclenché lors de click sur le button rechercher
         * @event search
         */
        $scope.search = function() {
            console.log("les utilisateurs :", $scope.userSelected);
            console.log("les rubriques :", $scope.rubrique);
            console.log("date début :", $scope.dateDebut);
            console.log("date fin :", $scope.dateFin);
            $scope.resetErrors();
            $scope.submitted = true;
            if ($scope.traceForm.dateDebut.$error.date || $scope.traceForm.dateFin.$error.date) {
                $scope.warnings.push("Le format de la date est incorrecte!");
            } else if ($scope.traceForm.dateFin.$error.dateAfter) {
                $scope.warnings.push("La date fin doit être supérieure ou égale à la date début.");
            } else if ($scope.traceForm.dateDebut.$error.required || $scope.traceForm.dateFin.$error.required) {
                $scope.warnings = [];
                console.log("test date validate");
                $scope.warnings.push("Merci de saisir une date valide!");
            } else if ($scope.traceForm.$error.required) {
                $scope.warnings.push("Merci de renseigner les champs obligatoires");
            } else {
                $scope.loading = true;
                var arraysUser = [];
                if ($scope.userSelected.length === 0) {
                    $scope.userSelected = $scope.users;
                }
                for (var int = 0; int < $scope.userSelected.length; int++) {
                    arraysUser.push($scope.userSelected[int].idUser);
                }

                loadTraces($scope.rubrique.idRubrique, arraysUser.join("-"), $scope.parseDate($scope.dateDebut), $scope.parseDate($scope.dateFin), function(data, status, headers, config) {
                    console.log("Liste des traces OK", data);
                    $scope.loading = false;
                    if (data === null || data.length === 0) {
                        $scope.alerts.push({
                            type: "alert-info",
                            msg: "Aucune opération de ce type n'était effectuée dans cet intervalle."
                        });
                    }

                    $scope.traces = data;
                    $scope.tracesCollapse = $filter('orderBy')($scope.toCollapseTable(data), 'date', true);


                }, function(data, status, headers, config) {
                    $scope.loading = false;
                    $scope.alerts.push({
                        type: "alert-danger",
                        msg: "Désolé, une erreur est survenue lors de la récupération des informations, merci de réessayer ultérieurement!"
                    });
                    console.log("Erreur de chargement des traces");
                    $scope.setData([]);
                });
            }
        };
        /**
         * Cette fonction permet de selectionner tout les utilisateurs
         * @method selectAll
         */
        $scope.selectAll = function() {
            console.log("select all");
            //alert('ok');
            $scope.userSelected = $scope.users;
        }

        // Appels WS
        /**
         * Cette fonction permet d'envoyer une requette au serveur pour charger tous les utilisateurs
         * @method loadAllUsers
         * @param successCallback {function}
         * @param errorCallBack {function}
         * @async
         */
        function loadAllUsers(successCallback, errorCallBack) {
            restService.call("private/allUsers", {}).success(successCallback).error(errorCallBack);
        }
        /**
         * Cette fonction permet d'envoyer une requette au serveur pour charger tous les rubriques
         * @method loadAllRubriques
         * @param successCallback {function}
         * @param errorCallBack {function}
         * @async
         */
        function loadAllRubriques(successCallback, errorCallBack) {
            restService.call("private/allRubriques", {}).success(successCallback).error(errorCallBack);
        }
        /**
         * Cette fonction permet d'envoyer une requette au serveur pour charger tous les rubriques
         * @method loadTraces
         * @param code {String}
         * @param login {Integer}
         * @param dateDebut {String}
         * @param dateFin {String}
         * @param successCallback {function}
         * @param errorCallBack {function}
         * @async
         */
        function loadTraces(code, login, date1, date2, successCallback, errorCallBack) {
            restService.call("private/searchTrace", {
                id_rubrique: code,
                id_user: login,
                dateDebut: date1,
                dateFin: date2
            }).success(successCallback).error(errorCallBack);
        }

    }
]);