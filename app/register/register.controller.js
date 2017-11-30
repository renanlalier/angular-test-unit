(function() {
  'use strict';
  angular.module('app').controller('RegisterController', RegisterController);

  RegisterController.$inject = ['validationService'];

  function RegisterController(validationService) {

    var vm = this;
    vm.validate = validate;

    vm.message = "Welcome Test Unit with Jasmine and karmaJS";
    vm.showResult = false;

    function validate() {
      vm.isValidCPF = validationService.validateCpf(vm.cpf);
      vm.isValidEmail = validationService.validateEmail(vm.email);
      vm.showResult = true;
    }

  }

})();
