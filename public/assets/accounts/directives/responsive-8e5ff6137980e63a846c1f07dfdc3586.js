(function() {
  ohmpieng.directive('responsive', function($window) {
    return {
      link: function(scope, element, attrs) {
        var respond;
        respond = function() {
          var width;
          width = $window.innerWidth;
          return scope.device = (function() {
            switch (false) {
              case !(width < 600):
                return 'phone';
              case !(width < 1200):
                return 'tablet';
              default:
                return 'desktop';
            }
          })();
        };
        respond();
        return angular.element($window).on('resize', function() {
          return scope.$applyAsync(function() {
            return respond();
          });
        });
      }
    };
  });

}).call(this);