
'use strict';

MDTCRMApp.config(['$routeProvider', function($routeProvider) {
        var view = function(view) {
            return 'partials/' + view.split('.').join('/') + '.html';
        }
        $routeProvider
        .otherwise({redirectTo: '/'})
        .when('/', {templateUrl: view('home'), controller: 'HomeCtrl'})

        .when('/quote', {templateUrl: view('quote'), controller: 'QuoteCtrl'})
        .when('/quote/:customerId/:quoteId/', {templateUrl: view('quote'), controller: 'QuoteCtrl'})

        //.when('/cspec/',  {templateUrl: view('cspec'), controller: 'CspecCtrl'})
        .when('/cspec/:customerId/',  {templateUrl: view('cspec'), controller: 'CspecCtrl'})
        .when('/cspec/:customerId/:cspecId/', {templateUrl: view('cspec'), controller: 'CspecCtrl'})

        .when('/cspec/label/',  {templateUrl: view('home'), controller: 'HomeCtrl'})
        .when('/cspec/label/:customerId/:cspecId', {templateUrl: view('cspeclabel'), controller: 'CspecCtrl'})

        .when('/sampin/:customerId/',  {templateUrl: view('sampin'), controller: 'SampinCtrl'})
        .when('/sampin/:customerId/:sampinId/', {templateUrl: view('sampin'), controller: 'SampinCtrl'})

        .when('/unautorized', {template: 'The server respond 401 Unautorized.'})
        ;
    }]);
