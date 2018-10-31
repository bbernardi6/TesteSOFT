  //modulos
var http = require('http');
var qs = require('querystring');

// definicoes
var pageHTML = '<html>' +
'<header>' +
'<title> History of Geometric Applications </title>' +
 '<img alt="">' +
// adaptado de http://mundoeducacao.bol.uol.com.br/matematica/geometria-1.htm & http://brasilescola.uol.com.br/o-que-e/matematica/o-que-e-geometria.htm
'<h1> Hist&oacute;ria das aplica&ccedil;&otilde;es geom&eacute;tricas</h1>' +
'<label for="fxx">Geometria teve origem na Grecia antiga, visando ser uma ciencia que se dedica a estudar as medidas das formas de figuras planas ou espaciais, bem como sobre a posicao relativa das figuras no espaco e suas propriedades, isto e, suas dimensoes e suas posicoes. Surgiu de forma intuitiva, e como todos os ramos do conhecimento, nasceu da necessidade e da observacao humana. </label> <p/>' +
'<label for="fxx">Foi construida a partir de objetos primitivos, ponto, reta, plano ... e a partir destes que foram definidas as primeiras formulas geometricas: Triangulo, Retanculo e Circulo, servindo de base para a construcao de inumeras figuras geometricas. Desse modo, a geometria e construida relacionando objetos basicos a fim de obter objetos mais elaborados. </label> <p/>' +
'<label for="fxx">Por estar presente em nossa vida, a geometria representa o aspecto mais concreto da matematica, tornando seus conceitos intuitivos e de facil aprendizado. </label> <p/>' +
'</form>' +
'</header>' +
'</head>' +
'<body>' +
'<body background="http://www.androidguys.com/wp-content/uploads/2016/05/WP_Encrusted_VI-2560x1440_00000.jpg">' +
'<form method="post" action="">' +
'<div>'+
'<div>' +
'<div>' +
'<div>' +
'<body>' +
'<form >' +
'</form>' +


'</body>' +
'</html>';
// server e acao apos clique de botao

var server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
  var requestData = '';
 
  // check HTTP method and show the right content
  if (req.method === "GET") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(pageHTML); // serve our HTML code
  } else if (req.method === "POST") {
    req.setEncoding('utf-8');

   req.on('end', function() {
      var postData = qs.parse(requestData);
  res.writeHead(200, {'Content-Type': 'text/html'});
      //res.end('<h1>User creation was been success!!!' + '</h1>');
    });
  }
});

 // habilitando listener
server.listen(1333, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1333/');
