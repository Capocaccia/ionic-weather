angular.module('iw.weather', [])

  .controller('WeatherCtrl', function ($scope, $stateParams, $http, $ionicLoading){

    $scope.city = $stateParams.city;
    $ionicLoading.show();

    $http
      .get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.long)
      .success(function (data){
        $scope.currentTemp = Math.round(data.currently.temperature);
        $scope.humidity = data.currently.humidity * 100;
        $scope.summary = data.currently.summary;
        $scope.weekSummary = data.daily.summary
        $scope.icon = data.currently.icon

        $ionicLoading.hide();
        if($scope.icon === "clear-day"){
          $scope.pic = 'http://icons.wxug.com/i/c/i/clear.gif'
        } else if($scope.icon === "clear-night"){
          $scope.pic = 'http://icons.wxug.com/i/c/i/nt_clear.gif'
        } else if($scope.icon === "rain"){
          $scope.pic = 'http://icons.wxug.com/i/c/i/rain.gif'
        } else if ($scope.icon === 'snow'){
          $scope.pic = 'http://icons.wxug.com/i/c/i/snow.gif'
        } else if($scope.icon === 'sleet'){
          $scope.pic = 'http://icons.wxug.com/i/c/i/nt_sleet.gif'
        } else if($scope.icon === 'wind'){
          $scope.pic = 'http://i.imgur.com/vGkjELv.gif'
        } else if($scope.icon === 'fog'){
          $scope.pic = 'http://icons.wxug.com/i/c/i/hazy.gif'
        } else if($scope.icon === 'cloudy'){
          $scope.pic = 'http://icons.wxug.com/i/c/i/cloudy.gif'
        } else if($scope.icon === 'partly-cloudy-day'){
          $scope.pic = 'http://icons.wxug.com/i/c/i/partlysunny.gif'
        } else if($scope.icon === 'partly-cloudy-night'){
          $scope.pic = 'http://icons.wxug.com/i/c/i/nt_mostlysunny.gif'
        }

        console.log (data);
      })

  })
