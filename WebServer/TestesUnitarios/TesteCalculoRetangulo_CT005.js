var assert = require('assert');

describe('Testes de exemplo cálculo de área do retangulo: ', function(){

    it('578.12 * 0.76  deve ser igual a 439.3712 (Correto)', function(){
        assert.equal(439.3712, 578.12 * 0.76);
    });

    it('578.12 * 0.76 deve ser igual a 1212.35 (Incorreto)', function(){
        assert.equal(1212.35, 578.12 * 0.76);
    });

}); 
