var assert = require('assert');

describe('Testes de exemplo cálculo de área do triangulo: ', function(){

    it('122.56 * 5 / 2 deve ser igual a 306.4 (Correto)', function(){
        assert.equal(306.4, 612.8 / 2);
    });

    it('122.56 * 5 / 2 deve ser igual a 112.45 (Incorreto)', function(){
        assert.equal(112.45, 612.8  / 2);
    });

}); 
