angular.module('app').config(appConfigRoute);

appConfigRoute.$inject = ['$locationProvider', '$routeProvider'];

function appConfigRoute($locationProvider, $routeProvider) {

    $routeProvider

    .when('/register', {
        templateUrl: 'app/register/register-people.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
    })

    .otherwise('/register');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}
