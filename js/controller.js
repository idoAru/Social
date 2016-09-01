var myApp = angular.module('appControllers',['appServices']);

myApp.controller('firstPageController',['$scope','appFactory',function($scope,appFactory) {

    $scope.orders = officeFactory.getOrders();
    $scope.name = "ido"


}
]);

myApp.controller('loginController',['$scope','appFactory',function($scope,appFactory) {

    //$scope.users = appFactory.getUsers();

    $scope.login =function(loginUserName,loginPassword) {
        var user = appFactory.getUserLogin(loginUserName,loginPassword);
        if (user!= undefined)
        {
         alert("Successful Login");
        }
        else
        {
            alert("Wrong Username or Password");
        }
    }

}
]);