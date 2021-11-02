var app = angular.module('RodinApp', ['ngAnimate', 'ngRoute',  'ui.bootstrap', 'ngQuill', 'ngSanitize'])

app.config(['ngQuillConfigProvider', function (ngQuillConfigProvider)
{
    ngQuillConfigProvider.set();
}]);

app.config(function ($routeProvider, $locationProvider)
{
    //page d'accueil de neblum.art
    $routeProvider.when('/',
        {
            template: '<neblum></neblum>'
        });
    
    
    $routeProvider.when('/headerview',
        {
            template: '<headerview></headerview>'
        });

    $routeProvider.when('/footerview',
        {
            template: '<footerview></footerview>'
        });    
     $routeProvider.otherwise(
     {
        template: '<error></error>'
    });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});

app.controller('RodinController', function($scope, $window, $location, $anchorScroll, $routeParams) {
    var appWindow = angular.element($window);

  appWindow.bind('resize', function () {
      
    var divh = document.getElementById('sizeModelAlignan').offsetHeight;
    document.getElementById('toResizeal_p1').style.height = divh + 'px';

    /*  BASSAN */
     var divh = document.getElementById('sizeModelBassan').offsetHeight;
    // document.getElementById('toResizeBassan').style.height = divh + 'px';

  	console.log('Resized your browser')
  });
});