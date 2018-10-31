//modulos
var http = require('http');
var qs = require('querystring');

// definicoes
// visual da pagina
var pageHTML = '<html>' +
'<header>' +
 '<img alt="">' +
'<h1>Geometry calculations page </h1>' +
'<title>User Menu</title>' +
'</form>' +
'</header>' +
'</head>' +
'<h1>Applications</h1>' +
'<body>' +
'<body background="http://www.androidguys.com/wp-content/uploads/2016/05/WP_Encrusted_VI-2560x1440_00000.jpg">' +
'<form method="post" action="">' +
'<div>'+
'<div>' +
'<div id="escondido">' +
'</div>' +
'<a href="http://127.0.0.1:1333/" target="_self" id="Menu  of history of the Geometric applications ">Menu of  history of the Geometric applications <p/>' +
'<div>' +
'<div id="x">' +
'</div>' +
'<a href="http://127.0.0.1:1320/" target="_blank" id="Triangle calculation">Triangle calculation<p/>' +
'<div id="z">' +
'</div>' +
'<a href="http://127.0.0.1:1340/" target="_blank" id="Circle calculation">Circle calculation<p/>' +
'<div id="q">' +
'</div>' +
'<a href="http://127.0.0.1:1310/" target="_blank" id="Retangle calculation">Retangle calculation<p/>'+
'<body>' +
'<form >' +
'<div id="t">' +
'</div>' +
'<a href="http://google.com" target="_self" id="Exit Application">Exit Application<p/>' +
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
/*
    req.on('data', function(data) {
      requestData += data;
    });
*/ 
   req.on('end', function() {
      var postData = qs.parse(requestData);
  res.writeHead(200, {'Content-Type': 'text/html'});

      res.end('<h1>User creation was been success!!!' + '</h1>');
    });
  }
});

 // habilitando listener
server.listen(1330, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1330/');
