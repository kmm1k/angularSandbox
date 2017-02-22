var app = angular.module("sandboxApp", [])

app.controller("catsController", function ($scope) {
    $scope.addCats = true;
    $scope.animals = [
        {
            name: "karu",
            dateOfBirth: 2001
        },
        {
            name: "ämblik",
            dateOfBirth: 1900
        }
    ];

    $scope.new  = {};

    $scope.add =  function(){
        $scope.animals.push($scope.new);
        $scope.new = {};
    }

    $scope.showAdd = function() {
        $scope.addCats = true;
        $scope.listCats = false;
    }


    $scope.showList = function() {
        $scope.addCats = false;
        $scope.listCats = true;
    }

})
