angular.module('app.services', ['ngResource'])

/*.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);*/


.service('registerService', ['$resource', function($resource){
	
}])


.service('loginService', ['$resource', function($resource){
	
	//this.signin = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-in/1');
	
	this.signin = $resource('http://138.68.0.83:7070/api/v1/user/sign-in',
    {
      get: {
        method: 'POST',
         interceptor:{
            response: function (param) {
                 var result = param.resource;
                 result.$status =  param.status;
                 return result;
              }
        }
      }
    }); 
	
	
	this.forgotpass = $resource('http://138.68.0.83:7070/api/v1/user/forgot-password/:email', {email:'@email'},
	{
      update: {
        method: 'POST',
         interceptor:{
            response: function (param) {
                 var result = param.resource;
                 result.$status =  param.status;
                 return result;
              }
        }
      }
    });
	
}])


.service('userService', ['$resource', function($resource){
	//this.signup = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-up');	
	this.signup = $resource('http://138.68.0.83:7070/api/v1/user/sign-up',
	{
      update: {
        method: 'POST',
         interceptor:{
            response: function (param) {
                 var result = param.resource;
                 result.$status =  param.status;
                 return result;
              }
        }
      }
    });
}])


.service('editPerfilService', ['$resource', function($resource){
	this.profile_edit = $resource('http://138.68.0.83:7070/api/v1/user/update/:email', {email:'@email'},
    {
      update: {
        method: 'PUT',
         interceptor:{
            response: function (param) {
                 var result = param.resource;
                 result.$status =  param.status;
                 return result;
              }
        }
      }
    });
	
}])


.service('productService', ['$resource', function($resource){
	
	 this.item_create = $resource('http://138.68.0.83:7070/api/v1/product/create');
	
	 this.item_list = $resource('http://138.68.0.83:7070/api/v1/product/list');
	 
     this.detail = $resource('http://138.68.0.83:7070/api/v1/product/detail/:id'); 
     this.item_delete = $resource('http://138.68.0.83:7070/api/v1/product/delete/:id', {id: '@id'},
    {
      delete: {
        method: 'DELETE',
        interceptor:{
            response: function (param) {
                 var result = param.resource;
                 result.$status =  param.status;
                 return result;
              }
        }
      }
    });  
	
	
	
	this.item_edit = $resource('http://138.68.0.83:7070/api/v1/product/update/:id', {id: '@id'},
    {
      update: {
        method: 'PUT',
         interceptor:{
            response: function (param) {
                 var result = param.resource;
                 result.$status =  param.status;
                 return result;
              }
        }
      }
    }); 	
	
	
	this.item_detailPerfil = $resource('http://138.68.0.83:7070/api/v1/user/profile/:email');
    this.item_signout = $resource('http://138.68.0.83:7070/api/v1/user/sign-up');
    this.item_deleteaccount = $resource('http://138.68.0.83:7070/api/v1/user/delete/:email', {email:'@email'},
     {
         delete:{
             method:'DELETE',
         interceptor:{
             response:function (param) {
                 var result=param.resource;
                 result.$status=param.status;
                 return result;
             }
         }
         }

     });
	
	
	
}])



;
