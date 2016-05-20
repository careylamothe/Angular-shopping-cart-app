(function() {
  'use strict'

  angular
    .module('shoppingCartApp')
    .controller('BagController', BagController);

  function BagController($scope, BagService) {

    BagService.addToCart().then(function() {

    })

    BagService.removeFromCart().then(function() {

    })

    BagService.getTotal().then(function() {

    })
  }

})
