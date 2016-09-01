
var officeServices = angular.module('appServices',['ngResource']);

officeServices.factory('appFactory',['$resource',function($resource){

    var factory =[];

    var resource = $resource('data/:objectType.json',{objectType :'@type'});
    var users = resource.query({objectType:'users'});

    factory.getUsers =function() {
        return users;
    };

    factory.getUserLogin = function(userName,password){
      var userExist = null;
        for (var i=0; i<users.length; i++)
      {
          if (users[i].userName == userName && users[i].password == password){
              userExist = users[i];
          }
      }
        return userExist;
    };
//};


return factory;
}]);
