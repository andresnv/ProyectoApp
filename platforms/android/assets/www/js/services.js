angular.module('app.services', ['ngResource'])

/*.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);*/


.service('registerService', ['$resource', function($resource){
	
}])


.service('loginService', ['$resource', function($resource){
	
	this.signin = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-in/1');
	
	this.forgotpass = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/forgot-password/1');
	
}])


.service('userService', ['$resource', function($resource){
	this.signup = $resource('http://private-bcbaa-productapp.apiary-mock.com/user/sign-up');
	
	
}])


.service('productService', ['$resource', function($resource){
	
	this.item_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/create');
	
	 this.item_list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');
     this.detail = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/detail/:id'); 
     this.item_delete = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/delete/:id', {id: '@id'},
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
	
	
	
	this.item_edit = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/update/:id', {id: '@id'},
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



;
