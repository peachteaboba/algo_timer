/**
 * Created by andyf on 1/22/17.
 */

app.controller('loginController', function($scope){

  console.log("in the login controller");

  // (function (){
  //     $scope.$broadcast('timer-stop');
  //     $scope.timerRunning = false;
  // })();

  // document.getElementsByTagName('timer').stop();
  // $scope.timerRunning = false;

  // $scope.startTimer = function (){
  //     $scope.$broadcast('timer-start');
  //     $scope.timerRunning = true;
  // };
  //
  // $scope.stopTimer = function (){
  //     $scope.$broadcast('timer-stop');
  //     $scope.timerRunning = false;
  // };
  $scope.times = [];

  var randArr = [];


  $scope.$on('timer-stopped', function (event, data){
      // console.log('Timer Stopped - data = ', data);
      $scope.times.push(data.millis - 1000);
      $scope.ave = Math.floor(getAve($scope.times));
      $scope.$apply();
  });


  function getAve(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
      sum += arr[i];
    }
    return sum / arr.length;
  }




  function makeArray(){
    for(var i=0; i<1000000; i++){
      randArr.push(getRandomInt(0, 220));
    }
    console.log(randArr);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  makeArray();

  $scope.timerRunning = false;
  $scope.showTimer = false;

  $scope.runCode = function(){
    // How to make it run multiple times?
    start();
  }




  function start(){
    $scope.$broadcast('timer-start');
    $scope.timerRunning = true;
    $scope.showTimer = true;

    var array = randArr;
    doSort(array, function(){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
      // console.log(array);
    })
  }



  // ====================================================================
  // This is the function that will run the sort ========================
  // ====================================================================
  function doSort(arr, callback){

    // arr.sort(function(a, b){return a-b});

    eval($scope.inputScript);

    setTimeout(function(){
      callback();
    }, 1000);
  }
  // ====================================================================
  // This is the function that will run the sort ========================
  // ====================================================================


});








app.controller('wallController', function($scope){


});
