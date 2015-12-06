appTitan.controller('mainController', ['$scope', function($scope){
    $scope.form = 'signup';
    
    $scope.switchForm = function(newForm){
        $scope.form = newForm;
    };
}]);