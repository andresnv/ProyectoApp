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



/*
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

  

});*/




angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.ingresoYORegistro', {
    url: '/page1_an',
    views: {
      'side-menu21': {
        //templateUrl: 'templates/ingresoYORegistro.html',
		//controller: 'ingresoYORegistroCtrl'
		
		templateUrl: 'templates/opciones.html',        
		controller: 'opcionesCtrl'
		/*templateUrl: 'templates/ediciNPerfil.html',        
		controller: 'ediciNPerfilCtrl'*/
      }
    }
  })

  .state('menu.interaccionesConPerfil', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('menu.productos', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/productos.html',
        controller: 'productosCtrl'
      }
    }
  })

  .state('menu.productDetail', {
    url: '/page5/:id',
      views: {
        'side-menu21':{
              templateUrl: 'templates/productDetail.html',
              controller: 'productDetailCtrl'
        }
      }
    
  })
  
  .state('addproducto', {
    url: '/page6',
    templateUrl: 'templates/nuevoProducto.html',
    controller: 'nuevoProductoCtrl'
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
  
  
  .state('menu.productEdit', {
    url: '/page6/:id',
      views: {
        'side-menu21':{
              templateUrl: 'templates/productEdit.html',
              controller: 'productEditCtrl'
        }
      }
    
  })
.state('menu.editarPerfil', {
    url: '/EditPerfil',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editarPerfil.html',
        controller: 'editarPerfilCtrl'
      }
    }
  })

//$urlRouterProvider.otherwise('/side-menu21/page4')
$urlRouterProvider.otherwise('/side-menu21/page1_an')

  

});
