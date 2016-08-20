angular.module('app.controllers', ['ngCordova'])
  
.controller('forgotPasswordCtrl', ['$scope', '$stateParams', '$cordovaDialogs', 'loginService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs, loginService) {

	$scope.changePassword = function(){		
		
		//$cordovaDialogs.alert($scope.usuario, 'Login usuario', 'Aceptar');		
		
		var data = {
			"email": "test@teste.com",
			"password": "543210"
		};
		
		
		loginService.forgotpass.save(data, function(data){
			$scope.data = data;
			console.log($scope.data);
			
			/*if($scope.data.email==document.getElementById("fieldusr").value){
				$cordovaDialogs.alert('Usuario autenticado', 'Login usuario', 'Aceptar');
			}
			else{
				$cordovaDialogs.alert('Datos de acceso no validos', 'Login Usuario', 'Aceptar');
			}*/
		
		});
	}	
	
	
	/*$scope.getCambioPassword = function(){
		$cordovaDialogs.confirm('Confirmar cambio de Password', 'Cambio Password', ['Cancelar','Aceptar'])		
		.then(function() {
		  //console.log('Click en el boton');
		  
		  //localStorage.setItem("VarLocalStorage", "Alert");
		});
	};*/
}])
 
 
 .controller('opcionesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


/********** Camilo **********/

.controller('loginCtrl', ['$scope', '$stateParams', '$cordovaDialogs', 'loginService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs, loginService) {
     
   
  /* $scope.userLogin = function(){
		loginService.item_detail.get({id: 7}, function(data){

        $scope.item = data;

        console.log($scope.item);
    });
	}*/
	
	
	$scope.userLogin = function(){
		
		
		
		//$cordovaDialogs.alert($scope.usuario, 'Login usuario', 'Aceptar');
		
		
		var data = {
			"email": "test@teste.com",
			"password": "543210"
		};
		
		
		loginService.signin.save(data, function(data){
			$scope.data = data;
			console.log($scope.data);
			
			if($scope.data.email==document.getElementById("fieldusr").value){
				$cordovaDialogs.alert('Usuario autenticado', 'Login usuario', 'Aceptar');
			}
			else{
				$cordovaDialogs.alert('Datos de acceso no validos', 'Login Usuario', 'Aceptar');
			}		
		});
	}   

}])
   
.controller('bienvenidoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    

}])


.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
      
.controller('ingresoYORegistroCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('interaccionesConPerfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    

}])
   
.controller('productosCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {

    productService.item_list.query(function(data){
        	$scope.list = data;
        	//console.log($scope.list);
         });
		 
}])

.controller('productDetailCtrl', ['$scope', '$stateParams', 'productService', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {
    
	console.log($stateParams.id);
	localStorage.setItem('idItem', $stateParams.id);
	$scope.data_product = {};
	 
	 productService.detail.get({id: $stateParams.id}, function(_data){
		 console.log(_data);
		 $scope.data_product = _data;
		 
	 });

	 $scope.getDeleteProduct = function () {
		 productService.item_delete.delete({id:localStorage.getItem('idItem')}, function(data){
		   console.log(data.$status);	
		 });
		 $cordovaDialogs.confirm('Confirma eliminar el producto: ' +  $scope.data_product.name,  'Eliminar producto', ['ok','cancel'])
		   .then(function (buttonIndex) {
			   localStorage.setItem('confirm','Opcion seleccionada' + buttonIndex);
		     })
	  }

}])
   

.controller('productEditCtrl', ['$scope', '$stateParams', 'productService', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {

	console.log($stateParams.id);
	$scope.data_product = {};

	 productService.detail.get({id: $stateParams.id}, function(_data){
		 console.log(_data);
		 $scope.data_product = _data;
		 
	 });

	 $scope.EditProduct = function () {
		 productService.item_edit.update({id:$stateParams.id}, function(data){
		  console.log(data.$status);
	 	});	
		 $cordovaDialogs.alert('Producto editado: ' +  $scope.data_product.name,  'ok')
		   .then(function (buttonIndex) {
			   console.log(buttonIndex);
		     })
	 }
}])





/********** Claudia **********/

.controller('registroCtrl', ['$scope', '$stateParams', '$cordovaDialogs', 'userService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs, userService) {
	
	
	
	var data = {
        "email": "test@teste.com",
        "password": "543210",
        "firstname": "Nomtest",
        "lastname": "Apetest",
		"phone": "4578548787"
    };


	$scope.userCreate = function(){
		userService.signup.save(data, function(data){
			$scope.data = data;
			//console.log($scope.data);
			
			$cordovaDialogs.confirm('Confirma y Bienvenido', 'Hola ' + $scope.data.firstname + "  " + $scope.data.lastname, ['Cancel','OK'])
				.then(function(buttonIndex) {

				});			
		});
	}
	
	
	/*$scope.getRegister = function(){
  
		$cordovaDialogs.confirm('Confirma y Bienvenido', 'Hola ' + $scope.userid , ['Cancel','OK'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      //var btnIndex = buttonIndex;
              //localStorage.setItem('confirm','EL USUARIO SELECCIONO LA OPCION' + btnIndex);

    		});
		};*/

}])


.controller('nuevoProductoCtrl', ['$scope', '$stateParams', 'productService','$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {



$scope.getRegisterProduct = function(){
  
  var data = {
        "name": $scope.name,
        "type": $scope.type,
        "quantity": $scope.quantity,
        "price": $scope.price
    };

   
	productService.item_create.save(data, function(data){

        $scope.data = data;

        console.log($scope.data);
    });

		$cordovaDialogs.confirm('Creando Producto', 'Confirma creación del producto ' + $scope.name , ['Ok','Cancel'])
		    .then(function(buttonIndex) {

    		});
	};

}])
 
 
 
 
 
 
 .controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
      
.controller('ingresoYORegistroCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('interaccionesConPerfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    

}])
   
.controller('productosCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {

    productService.item_list.query(function(data){
        	$scope.list = data;
        	//console.log($scope.list);
         });
}])

.controller('productDetailCtrl', ['$scope', '$stateParams', 'productService', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {
    
	console.log($stateParams.id);
	localStorage.setItem('idItem', $stateParams.id);
	$scope.data_product = {};
	 
	 productService.detail.get({id: $stateParams.id}, function(_data){
		 console.log(_data);
		 $scope.data_product = _data;
		 
	 });

	 $scope.getDeleteProduct = function () {
		 productService.item_delete.delete({id:localStorage.getItem('idItem')}, function(data){
		   console.log(data.$status);	
		 });
		 $cordovaDialogs.confirm('Confirma eliminar el producto: ' +  $scope.data_product.name,  'Eliminar producto', ['ok','cancel'])
		   .then(function (buttonIndex) {
			   localStorage.setItem('confirm','Opcion seleccionada' + buttonIndex);
		     })
	  }

}])