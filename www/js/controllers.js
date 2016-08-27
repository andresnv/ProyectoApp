angular.module('app.controllers', ['ngCordova'])
  
.controller('forgotPasswordCtrl', ['$scope', '$stateParams', '$cordovaDialogs', 'loginService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs, loginService) {

	$scope.changePassword = function(){		
		
		//$cordovaDialogs.alert($scope.usuario, 'Login usuario', 'Aceptar');		
		
		var data = {
			"email": document.getElementById("Email").value,
			"password": document.getElementById("NewPass").value
		};
		
		
		loginService.forgotpass.save(data, function(data){
			$scope.data=data;
			if($scope.data.email!='undefined'){
				$cordovaDialogs.alert('Password Cambiado', 'Cambiar Password', 'Aceptar');
			}
			else{
				$cordovaDialogs.alert('Password No Cambiado', 'Cambiar Password', 'Aceptar');
			}
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

.controller('ediciNPerfilCtrl', ['$scope', '$stateParams', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs) {
		
	
		
	
	
	$scope.EditarPerfil=function(){
		$cordovaDialogs.confirm('Confirma el cambio de informacion?',  'Cambio de Informacion', ['Ok','Cancelar'])
		   .then(function (buttonIndex) {
			   //localStorage.setItem('nombres','nombres editados');
		   })
	};
}])

/********** Camilo **********/

.controller('loginCtrl', ['$scope', '$stateParams', '$cordovaDialogs', 'loginService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs, loginService) {
     	
	$scope.userLogin = function(_usuario, _password){				
	
		//$cordovaDialogs.alert($scope.usuario, 'Login usuario', 'Aceptar');
		
		var data = {
			"email": document.getElementById("fieldusr").value,
			"password": document.getElementById("fieldpass").value
		};
		
		
		loginService.signin.save(data, function(data){
			$scope.data = data;
			console.log($scope.data);
			//console.log($scope.data.id);
			
			if($scope.data.id!='undefined'){
				localStorage.setItem('UsrId',$scope.data.id);
				localStorage.setItem('UsrEmail',$scope.data.email);
				localStorage.setItem('UsrFirstname',$scope.data.firstname);
				localStorage.setItem('UsrLastname',$scope.data.lastname);
				localStorage.setItem('UsrPhone',$scope.data.phone);
				localStorage.setItem('UsrCookie',$scope.data.cookie);
				
				$cordovaDialogs.alert('Usuario autenticado', 'Login usuario', 'Aceptar');
			}
			else{
				$cordovaDialogs.alert('Datos de acceso no validos', 'Login Usuario', 'Aceptar');
				
			}
			
			/*if($scope.data.email==document.getElementById("fieldusr").value){
				$cordovaDialogs.alert('Usuario autenticado', 'Login usuario', 'Aceptar');
			}
			else{
				$cordovaDialogs.alert('Datos de acceso no validos', 'Login Usuario', 'Aceptar');
			}*/
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
		 var data = {
			   "name" : $scope.data_product.name,
			   "type" : $scope.data_product.type,
			   "quantity" : $scope.data_product.quantity,
			   "price" : $scope.data_product.price,
			   "id" : $stateParams.id
		   }
		 productService.item_edit.update(data, function(data){
		  console.log($scope.data_product.name);
		 	  
	 	});	
		 $cordovaDialogs.alert('Producto editado: ' +  $scope.data_product.name,  'ok')
		   .then(function (buttonIndex) {
			   console.log(buttonIndex);
		     })
	 }

	 $scope.getDeleteProduct = function () {
		 productService.item_delete.delete({id: $stateParams.id}, function(data){
		   console.log(data.$status);	
		 });
		 $cordovaDialogs.confirm('Confirma eliminar el producto: ' +  $scope.data_product.name,  'Eliminar producto', ['ok','cancel'])
		   .then(function (buttonIndex) {
			   localStorage.setItem('confirm','Opcion seleccionada' + buttonIndex);
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

   console.log($scope.data);


		$cordovaDialogs.confirm('Creando Producto', 'Confirma creación del producto ' + $scope.name , ['Ok','Cancel'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
              //localStorage.setItem('confirm','EL USUARIO SELECCIONO LA OPCION' + btnIndex);
              if(btnIndex == 1)
                {
                    productService.item_create.save(data, function(data){

                    $scope.data = data;

                    console.log($scope.data);
                });}
            else{console.log('OPCION 2');}

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

.controller('perfilCtrl', ['$scope', '$stateParams', 'productService','$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $cordovaDialogs) {

	$scope.email=localStorage.getItem('UsrEmail');	
	$scope.firstname=localStorage.getItem('UsrFirstname');	
	$scope.lastname=localStorage.getItem('UsrLastname');	
	$scope.phone=localStorage.getItem('UsrPhone');	

	$scope.getSignOut = function(){  
  	$cordovaDialogs.confirm('Confirmar cerrar la sesion', 'Cerrar Sesion' , ['Ok','Cancel'])
		.then(function(buttonIndex) {
		  // no button = 0, 'OK' = 1, 'Cancel' = 2
		  var btnIndex = buttonIndex;
		  if(btnIndex == 1)
		  {
				productService.item_signout.save( $scope.item, function(data){
					$scope.item = data;                        
					console.log($scope.item);
				});
		  }
		  else
			console.log('OPCION 2');
		});		
	};


    $scope.getDeleteAccount = function(){
  
  	$cordovaDialogs.confirm('Eliminación de Informacion', 'Eliminar Cuenta' , ['Ok','Cancel'])
		.then(function(buttonIndex) {
		  // no button = 0, 'OK' = 1, 'Cancel' = 2
		  var btnIndex = buttonIndex;
		  if(btnIndex == 1)
		  {
			console.log( $scope.item);
			productService.item_deleteaccount.delete({email: $scope.item.email}, function(data){					
				console.log('BORRO REGISTRO' + data.$status);
			});
		  }
		  else
			console.log('OPCION 2');
		});		
	};


}])
      
.controller('editarPerfilCtrl', ['$scope', '$stateParams', 'editPerfilService', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, editPerfilService, $cordovaDialogs) {
	
	$scope.firstname=localStorage.getItem('UsrFirstname');	
	$scope.lastname=localStorage.getItem('UsrLastname');	
	$scope.phone=localStorage.getItem('UsrPhone');
	
	
	 $scope.EditPerfil = function () {
		 var data = {
			   "firstname" : document.getElementById('firstname').value,
			   "lastname" : document.getElementById('lastname').value,
			   "phone" : document.getElementById('phone').value,
			   "email" : localStorage.getItem('UsrEmail')
		   }
		   
		 editPerfilService.profile_edit.update(data, function(data){		  
		  $cordovaDialogs.alert('Informacion Editada',  'ok')
		   .then(function (buttonIndex) {
			   	localStorage.setItem('UsrFirstname', data.firstname);	
				localStorage.setItem('UsrLastname', data.lastname);	
				localStorage.setItem('UsrPhone', data.phone);			   
		     })
		 	  
	 	});			 
	 }
}])