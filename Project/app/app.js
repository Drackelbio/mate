 /**creando el modulo*/

angular.module ('app', [
    'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
  
	 $stateProvider
	        .state('main',{
	         url:'/main',
	         template: '<h2>modificacion de usuarios</h2>'
	    })
			.state('usuarios', {
			url:'/users',
			template: '<h2>modificacion ddddd'
		}) 

			.state('elbio', {
			url:'/elbio',
			template: 'wwwwwwwws'
		});
		

	  }]);

