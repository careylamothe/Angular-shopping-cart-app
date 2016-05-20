(function() {
  'use strict';

  angular
    .module('shoppingCartApp')
    .factory('TeaService', TeaService)
    .factory('CartService', CartService)

    function TeaService($http) {
      var teaArray = []

      return {
        getTeas: function() {
          return $http.get('teas.json').then(function(result) {
            console.log(result)
            teaArray = result.data.teas
            return teaArray

          });
        }
      }
    }

    function CartService() {
      var cartArray = []

        addToCart: function() {
          return cartArray
        }

        removeFromCart: function() {
          return cartArray
        }

        getTotal: function() {
          
        }
      }
    }
//arr.indexOf(item)
//splice
})();
