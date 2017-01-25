'use strict';

controllers.controller('utilisateursController', ['$rootScope', '$scope', '$location', 'userService', 'bootstrapModal', function($rootScope, $scope, $location, userService, bootstrapModal) {
	

	userService.getAll(function(utilisateurs) {
			$scope.utilisateurs = utilisateurs;
		});

		$scope.newUser = function() {
			$scope.user = {
					firstname: "",
					lastname: "",
					phone: "",
					abv: "",
					login: "",
					password: "",
					user_profil: ""
				// TODO: add profil
			}
		}

		$scope.utilisateurs=[{
			firstname: "FGGJD",
			lastname: "DKJHGG",
			phone: "0251659858",
			abv: "ffv",
			login: "aze",
			password: "125487",
			user_profil: "Administrateur"
		}];
		
		$scope.saveNewUser = function() {
			// TODO: Data validation
			userService.add($scope.user.firstname, $scope.user.lastname, $scope.user.abv, $scope.user.phone, $scope.user.login, $scope.user.password, null, function(user) {
				$scope.utilisateurs.push(user);
				bootstrapModal.close();
			}, function() {
				alert("error adding new user !");
			})
		}

	}
]);