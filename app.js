(function() {
    'use strict';

    angular.module("LunchCheck",[])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lunch = "";
        $scope.message = "";
         

    $scope.generateMessage = function(){
       var lunchSize = $scope.lunch.split(",").length;
       console.log("Lunch is: " + $scope.lunch);

       console.log("Lunch Size is: " + lunchSize);
       if ($scope.lunch ==="") lunchSize = 0;

       if (lunchSize == 0) $scope.message = "Enter data first!";
       if (lunchSize >0 && lunchSize < 4) $scope.message = "Enjoy!";
       if (lunchSize >= 4) $scope.message = "Too Much!";
       
       console.log("Message is:" + $scope.message);

       };
    };

    
})();
