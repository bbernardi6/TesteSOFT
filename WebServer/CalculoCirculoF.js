//modulos de pagina
var http = require('http');
var qs = require('querystring');

//definindo corpo da pagina HTML
var pageHTML = '<html>' +
'<meta charset="utf-8">' +
'<title>Circle</title>' +
'<body>'+
'<body background="http://www.androidguys.com/wp-content/uploads/2016/05/WP_Encrusted_VI-2560x1440_00000.jpg">' + // tela de fundo
// '<article>'+
'<header>' +
'<h1>Circle Area Calculation</h1>' +
 '<label for="Raio">Area of Circle = PI * rain</label><p/><p/>' +
//'</form>' +
'</header>' +
'<form onsubmit="return false" oninput="Area.value = 3.14 * rain.value">'+ //calculo 
    '<label for="x">Universal value for PI = 3.14159265 </label><p/>' +
     '<br />' +
         '<label for="Raio">Insert a value for Rain</label><p/>' +
             '<input name="rain" id="rain" type="text"><p/>' +
         '<br />' +
     '<label for="Base">Value=</label>' +
     '<output name="Area" id="Area" for="rain  "></output>' +
	 '</form>'+
     '<footer>'+
     '<h1>' +
     '</h1>'+
     '</footer>'+
     '</article>'+
'</body>'+
'</html>'

//definindo integração node.js X HTML para resposta no navegador
var http = require('http');
var qs = require('querystring');

var server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
  var requestData = '';

  if (req.method === "GET") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(pageHTML); // serve our HTML code
  } else if (req.method === "POST") {
    req.setEncoding('utf-8');

 }
});

 // habilitando listener
server.listen(1340, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1340/');

