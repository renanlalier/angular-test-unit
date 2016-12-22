describe("Testes unitários para serviço de validação", function() {

    var validationService;

    beforeEach(module('app'));

    beforeEach(inject(function(_validationService_) {
        validationService = _validationService_;
    }));

    describe('Validação de CPF', function() {
        it('Informando um CPF válido', function() {
            expect(validationService.validateCpf('39398581884')).toBe(true);
        });

        it('Informando um CPF inválido', function() {
            expect(validationService.validateCpf('33333333332')).toBe(false);
        });
    });

    describe('Validação de E-mail', function() {

        it('E-mail válido', function() {
            expect(validationService.validateEmail('relalier@gmail.com')).toBe(true);
        });

        it('E-mail inválido', function() {
            expect(validationService.validateEmail('relalier@')).toBe(false);
        });

    });

});
