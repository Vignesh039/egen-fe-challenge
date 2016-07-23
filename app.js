angular.module('myApp', ['filters']);

angular.module('myApp',['filters']).controller("mainController",function($scope){

$scope.filterValue = function($event){
        if(isNaN(String.fromCharCode($event.keyCode))){
            $event.preventDefault();
        }};
});