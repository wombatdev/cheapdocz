"use strict";

(function () {
  angular
    .module("DocCheapoz")
    .controller("showCtrl", [
      "$stateParams",
      "DoctorFactory",
      "$state",
      ShowController
    ])

    function ShowController ($stateParams, DoctorFactory, $state) {
      var vm = this;
      DoctorFactory.get({name: $stateParams.name}).$promise.then(function (doctor) {
        console.log(doctor);
        vm.doctor = doctor;
      })
      vm.update = function () {
        DoctorFactory.update({name: $stateParams.name}, { doctor: vm.doctor }).$promise.then(function (doctor) {
          $state.go("index")
        })
      }
      vm.destroy = function () {
        vm.doctor.$remove({name: $stateParams.name}).then(function (response) {
          if(response.success) $state.go("index")
        })
      }
    }
})();
