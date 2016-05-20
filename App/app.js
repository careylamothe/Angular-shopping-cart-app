(function() {
  'use strict';

  angular
    .module('shoppingCartApp', ['ngRoute'])
    .config(config);

    function config($routeProvider, $locationProvider) {
      $routeProvider
      .when('/market', {
        templateUrl: 'app/Views/market.html',
        controller: 'MarketController',
        //controllerAs: 'Market'
      }).when('/bag', {
        templateUrl: 'app/Views/bag.html',
        controller: 'BagController',
        //controllerAs: 'Bag'
      }).otherwise({
        redirectTo: '/market'
      })

      $locationProvider.html5Mode(true);
      console.log('routes are configured')
    }
})();
