/*angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('forgotPassword', {
    url: '/page1_an',
    templateUrl: 'templates/forgotPassword.html',
    controller: 'forgotPasswordCtrl'
  }) 

$urlRouterProvider.otherwise('/page1_an')

  });*/




angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('opciones', {
    url: '/page1_an',
    templateUrl: 'templates/opciones.html',
    controller: 'opcionesCtrl'
  })
  
  
  .state('bienvenido', {
    url: '/page2',
    templateUrl: 'templates/registro.html',
    controller: 'bienvenidoCtrl'
  })
  
  .state('login', {
    url: '/page3',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  
   .state('forgotpassword', {
    url: '/page4',
    templateUrl: 'templates/forgotPassword.html',
    controller: 'forgotPasswordCtrl'
  })
  

$urlRouterProvider.otherwise('/page1_an')

  

});