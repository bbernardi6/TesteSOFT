
// modulos de pagina
var http = require('http');
var qs = require('querystring');

// Design da pagina 
var pageHTML = '<html>' +
'<header>' +
'<header>' +
  '<h1>Welcome to WebServer for Geometric Applications</h1>' +
 '</form>' +
'</header>' +
  '<head>' +
    '<title>WebServer For Geometric Applications</title>' +
    '<meta charset="utf-8">' +
     '<title>WebServer For Geometric Applications</title>' +
  '</head>' + 
    '<title>WebServer For Geometric Applications</title>' +
  '<meta charset="utf-8">' +
  '<body>' +
'<body background="http://www.androidguys.com/wp-content/uploads/2016/05/WP_Encrusted_VI-2560x1440_00000.jpg">' +
    '<form method="post" action="">' +
      '<div>' +
        '<label for="</title>">Please insert your user or create a new</label><p/>' +
       '<div>' +
       '<div>' +
        '<label for="User">User: </label><p/>' +
        '<input type="text" name="User"><p/>' +  
          '<div>' +
 '<label for="Password">Password: </label><p/>' +        
'<input type="password" name="Password"><p/>' + 
      '</div>' +
      '<div>' +
//botoes de login
'<div id="escondido">' +
'</div>' +
'<a href="http://127.0.0.1:1330/" target="_self" id="LOGIN">LOGIN</a>' +
'<div id="escondido">' +
'</div>' +
'<a href="http://127.0.0.1:1350/" target="_self" id="CREATE USER">CREATE USER</a>' +
      '</div>' +
    '</form>' +
  '</body>' +
'</html>';
 
// criação de servidor node.js

var server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
  var requestData = '';
 
  // funcao para retornar valores do botão na pagina
  if (req.method === "GET") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(pageHTML); // serve our HTML code
  } else if (req.method === "POST") {
    req.setEncoding('utf-8');
 
    req.on('data', function(data) {
      requestData += data;
    });
 
    req.on('end', function() {
      var postData = qs.parse(requestData);
  res.writeHead(200, {'Content-Type': 'text/html'});

      res.end('<h1>Retorna Menu para User valido ou criacao de user *** '+ postData.User + '</h1>');
    });
  }
});
//servidor está respondendo em
server.listen(1300, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1300/');
