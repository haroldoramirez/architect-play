angular.module('architect', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({enabled: false, requireBase: false, rewriteLinks: false});

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'assets/app/views/home.html',
                controller: 'home.controller'
            })
            .state('login', {
                url: "/login",
                templateUrl: 'assets/app/views/login.html',
                controller: 'login.controller'
            })
            .state('dashboard', {
                url: "/admin/dashboard",
                templateUrl: 'assets/app/views/admin/dashboard.html',
                controller: 'dashboard.controller'
            })

    });