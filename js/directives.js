///**
// * Created by Ido on 04/08/2016.
// */
var myApp = angular.module('appDirective',[]);

myApp.directive('tableRow',function(){
    return{
        restrict : 'A',
        scope:{
            disorder : '='
        },
        template: "<td>{{ disorder.firstName }}</td>"+
        "<td>{{ disorder.lastName}}</td>" +
    "<td>{{ disorder.address}}</td>"
    }
})