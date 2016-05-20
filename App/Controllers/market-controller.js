(function() {
  'use strict'

  angular
    .module('shoppingCartApp')
    .controller('MarketController', MarketController);

  MarketController.$inject = ['$scope', '$location', 'TeaService'];
  function MarketController($scope, $location, TeaService) {
    $scope.vm = {}
    $scope.vm.searchQuery = ""
    $scope.vm.name
    $scope.vm.price
    $scope.vm.caffieneScale
    $scope.vm.ingredients = []
    $scope.vm.rating
    $scope.vm.inStock  = true;
    $scope.vm.categories = [
      'awesome', 'cold', 'warm', 'hot', 'dry', 'lucid','winter','spring','summer'
      ],



    TeaService.getTeas().then(function(teas) {
      $scope.vm.teas = teas
    });

    // $scope.vm.teasByCategory = filterByCategoy();
    //
    // $scope.vm.teasByName = filterByName();

    // $scope.vm.filterByCategory = function(tea, category) {
    //
    // }
    //
    // $scope.vm.filterByName = function() {
    //
    // }
    //   getTeaSearch: function(name) {
    //     var teasByName = teas.filter(function(name) {
    //       return tea.id == id;
    //     });
    //     if (teasByName.length > 0) {
    //       return teasByName[0];
    //     } else {
    //       return null;
    //     }
    // }
    //
    // $scope.vm.submitSearch = function() {
    //   $location.path('/detail/' + vm.search);
    // }
    //
    //
    //

  }

})();
