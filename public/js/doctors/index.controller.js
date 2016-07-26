"use strict";

(function () {
  angular
    .module("DocCheapoz")
    .controller("indexCtrl", [
      "DoctorFactory",
      indexController
    ])

    function indexController (DoctorFactory) {
      var vm = this;
      DoctorFactory.query().$promise.then(function (doctors) {
        vm.doctors = doctors;
      })
    }

})();
