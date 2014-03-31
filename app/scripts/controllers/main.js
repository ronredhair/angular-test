'use strict';

angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('angularTestApp')
    .controller('AlertDemoCtrl',['$scope',function($scope) {
        $scope.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: "Another alert!"});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

    } ]);


angular.module('angularTestApp')
    .controller('HeaderCtrl',['$scope','$location', function($scope,$location) {
            $scope.isActive = function(viewLocation){
                return viewLocation == $location.path();
        };
    } ]);

