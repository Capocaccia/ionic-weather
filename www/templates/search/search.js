angular.module('iw.search', [])

  .controller('SearchCtrl', function($scope, $http){


  $scope.queryChanged = _.debounce(function(){
    $http
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {address: $scope.query}
      })
      .success(function(data){
        console.log(data.results)
        $scope.results = data.results;
      });
      console.log('changes')
  }, 2000);
});
