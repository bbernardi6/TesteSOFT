#!/bin/bash
#Script que inicia a aplicação

nohup node CalculoCirculoF.js &
nohup node CalculoRetangulo.js &
nohup node CalculoTriangulo.js & 
nohup node MenuUsuario.js & 
nohup node TelaCriacaoUser.js & 
nohup node TelaInicial.js &
nohup node TelaHistoriaGeometria &

echo "Aplication Started"
