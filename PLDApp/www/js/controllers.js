var pldControllers = angular.module('pldControllers', []);

pldControllers.controller('AllCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
});

pldControllers.controller('SearchCtrl', function($scope, $filter, FilterData, Friends) {
  
  $scope.countries = FilterData.countries();
  $scope.livingGroups = FilterData.livingGroups();
  $scope.citizenships = FilterData.citizenships();
  $scope.companies = FilterData.companies();
  $scope.industries = FilterData.industries();
  $scope.functionals = FilterData.functionals();


  $scope.friends = Friends.all();
  $scope.resetCriteria = function($scope){

           $scope.country = 'None';
       
           $scope.livingGroup ='None';
        
           delete $scope.citizenship;
       
           $scope.industry ='None';
       
           $scope.company ='None';
       
           $scope.functional ='None';

    };
  
});

pldControllers.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});



pldControllers.controller('LoginCtrl', ['$scope', '$state', 

  function($scope, $state, $localstorage, email) {

  	$scope.alreadySignedIn = function(){

  		var storedEmailValue = window.localStorage['email']; 

	  		if(storedEmailValue && storedEmailValue.indexOf("@pld19.hbs.edu") !=-1){
				$state.go('home.all');
		  	}
		  	else
		  	{
		  		$state.go('login');
			    $scope.email = email;
			    $scope.placeHolder = 'Please enter your PLD email';
			}
  	};

  	
  	$scope.validateLogin = function(email){
  		console.log(email);
  		console.log("validateLogin");
  		//var friends = $scope.friends;
  		//var matched = false;

  		// for(var i=0; i<friends.length; i++){
  		// 	if(friends[i].hbsEmail == email){
  		// 		matched = true;
  		// 		break;
  		// 	}
  		// }
      
  		if (email != undefined && email.indexOf("@pld19.hbs.edu") !=-1) {

  			window.localStorage['email'] = email;
  			console.log(window.localStorage['email'] );
        $scope.placeHolder ="";
	    	$state.go('home.all');
  		}else{
  			window.localStorage['email'] = "";
  			$scope.email = "";
  			$scope.placeHolder = "Sorry, You are not authorized to use this App.";
  			$state.go('login');
  		}
  		
  	};  
}]);


pldControllers.controller('PostLoginCtrl', ['$scope', '$state',
  function($scope, email) {
    $scope.email = email;
    $scope.message = 'email Received';
}]);


pldControllers.controller('AccountCtrl', function($scope, Friends) {
  var storedEmailValue = window.localStorage['email']; 
  console.log(storedEmailValue);
  var friends = Friends.all();
  var currentAccount;
  for(var i=0; i<friends.length; i++){
       if(friends[i].hbsEmail == storedEmailValue){
         currentAccount = friends[i];
         break;
       }
  }
  $scope.myAccount = currentAccount;

});


