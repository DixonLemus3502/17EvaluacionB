var datachar= angular.module(datachar,[])

	datachar.controller("char", function ($scope, $rootScope, $http){
		$scope.datu= [];

		$http({
		method: "GET",
		url: "/profile/wow/character/{realmSlug}/{characterName}/character-media"
	}).then(function callbackSuccess (y){
		console.log(y)
		$scope.datu.push(y);
	})

	}
