(function () {
    'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.name = "Daniel"
    $scope.sayHello = function (){
        return "Hello Coursera!"
    }
});

})();
