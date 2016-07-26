"use strict";

(function(){

  angular
  .module("DocCheapoz", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    "$urlRouterProvider",
    Router
  ])

  function Router ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state("index", {
        url: "/",
        templateUrl: "/assets/js/doctors/index.html",
        controller: "indexCtrl",
        controllerAs: "indexVM"
      })
      .state("show", {
        url: "/doctors/:name",
        templateUrl: "/assets/js/doctors/show.html",
        controller: "showCtrl",
        controllerAs: "showVM"
      })

    $urlRouterProvider.otherwise("/")
  }

})();
