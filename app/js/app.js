'use strict';

/* App Module */

var proverbialApp = angular.module('proverbialApp', [
  'ngRoute',
  'proverbialControllers'
]);

proverbialApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/proverbs', {
        templateUrl: 'partials/category-list.html',
        controller: 'ProverbListCtrl'
      }).
      when('/proverbs/:categoryID', {
        templateUrl: 'partials/category-detail.html',
        controller: 'ProverbDetailCtrl'
      }).
      otherwise({
        redirectTo: '/proverbs'
      });
  }]);
