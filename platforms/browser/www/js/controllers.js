angular.module('app.controllers', ['ngCordova'])
  
.controller('forgotPasswordCtrl', ['$scope', '$stateParams', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs) {

	$scope.getCambioPassword = function(){
		$cordovaDialogs.confirm('Confirmar cambio de Password', 'Cambio Password', ['Cancelar','Aceptar'])		
		.then(function() {
		  //console.log('Click en el boton');
		  
		  //localStorage.setItem("VarLocalStorage", "Alert");
		});
	};
}])
 
 
 .controller('opcionesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


/********** Camilo **********/

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
   

}])
   
.controller('bienvenidoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    

}])


/********** Claudia **********/

.controller('registroCtrl', ['$scope', '$stateParams', '$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs) {
$scope.getRegister = function(){
  
		$cordovaDialogs.confirm('Confirma y Bienvenido', 'Hola ' + $scope.userid , ['Cancel','OK'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      //var btnIndex = buttonIndex;
              //localStorage.setItem('confirm','EL USUARIO SELECCIONO LA OPCION' + btnIndex);

    		});
	};

}])
 