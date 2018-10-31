//modulos
var http = require('http');
var qs = require('querystring');

var pageHTML = '<html>' +
'<meta charset="utf-8">' +
'<title>Triangle</title>' +
'<body>'+
'<body background="http://www.androidguys.com/wp-content/uploads/2016/05/WP_Encrusted_VI-2560x1440_00000.jpg">' +
// '   <article>'+
'<header>' +
 //'  <img alt="logo" src="http://www.infoescola.com/wp-content/uploads/2011/10/triangulo-equilatero.jpg">' +
'<h1>Triangle Area Calculation</h1>' +
'</form>' +
'</header>' +
'<label for="x">Area of Triangle = (Base * Weight) ÷ 2</label><p/>' +  
'<form onsubmit="return false" oninput="    totalamount.value = (base.value * altura.value) / 2">'+
     '<label for="z">Insert a value for Base</label><p/>' +
     '<input name="base" id="base" type="text"><p/>' +
     '<br />' +
         '<label for="x">Insert a value for Weight</label><p/>' +  
         '<input name="altura" id="altura" type="text"><p/>' +
         '<br />' +
     '<label for="Base">Result is=</label>' +
     '<output name="totalamount" id="totalamount" for="base altura "></output>' +
'</form>'+
'<footer>'+
'<h1>' +
'</h1>'+
'</footer>'+
'</article>'+
'</body>'+
'</html>'

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
server.listen(1320, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1320/');

