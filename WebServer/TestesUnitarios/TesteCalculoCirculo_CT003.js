var assert = require('assert');

describe('Testes de exemplo cálculo de área do círculo: ', function(){

    it('123 + PI(3.14159265) deve ser igual a 386.41589595000005 (Correto)', function(){
        assert.equal(386.41589595000005, 123 * 3.14159265);
    });

    it('123 * PI deve ser igual a 12.45 (Incorreto)', function(){
        assert.equal(12.45, 123 * 3.14159265);
    });

}); 
