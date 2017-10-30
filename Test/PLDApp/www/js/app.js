// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var pldApp = angular.module('pldApp', ['ionic','ui.bootstrap','pldControllers', 'personService', 'filterDataService', 'filters'])

pldApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

pldApp.filter('personSearchFilter', function(){

  return function(){
    var filtered = [];
  };
});

pldApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('welcome', {
    url: '/',
    templateUrl: 'templates/welcome.html'
  })
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })

  .state('home.all', {
    url: '/all',
    views: {
      'tab-all': {
        templateUrl: 'templates/tab-all.html',
        controller: 'AllCtrl'
      }
    }
  })

  .state('home.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-search.html',
          controller: 'SearchCtrl'
        }
      }
  })
  .state('home.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })
  .state('home.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');


});
