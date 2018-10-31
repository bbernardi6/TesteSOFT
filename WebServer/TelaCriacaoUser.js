// modulos
var http = require('http');
var qs = require('querystring');
 
// pagina
var pageHTML = '<html>' +
'<header>' +
 ' <h1>WebServer for Geometric Applications </h1>' +
  '<head>' +
    '<title> *** User Creation Menu ***</title>' +
    '<meta charset="utf-8">' +
     '<title> *** User Creation Menu ***</title>' +
  '</head>' + 
    '<title> *** User Creation Menu ***</title>' +
  '<meta charset="utf-8">' +
  '<body>' +
'<body background="http://www.androidguys.com/wp-content/uploads/2016/05/WP_Encrusted_VI-2560x1440_00000.jpg">' +
    '<form method="post" action="">' +
      '<div>' +
'<label for="x">Please, insert a user and password to access the application</label><p/>' +
'<div>' +
        '<label for="User">User: </label><p/>' +
        '<input type="text" name="User"><p/>' +  
          '<div>' +
 '<label for="Password">Password: </label><p/>' +        
'<input type="password" name="Password"><p/>' + 
      '</div>' +
      '<div>' +
'<div id="escondido">' +
'</div>' +
//'<a href="http://127.0.0.1:1300/" target="_self" id="CREATE">CREATE </a>' + 
//'<a href="javascript:alert("jj")"> ssss </a> />' +
'<input type="submit" name="Cadastrar Usuario" </a>' +
      '</div>' +
'<p/>' +
'<p/>' +
'<a href="http://127.0.0.1:1300/" target="_self">Back to Menu<p/>' +
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
    
    req.on('data', function(data) {
      requestData += data;
    });
 
    req.on('end', function() {
      var postData = qs.parse(requestData);
  res.writeHead(200, {'Content-Type': 'text/html'});
     //res.end('<script>window.location ="http://127.0.0.1:1300"</script>');
res.end('<script>window.location ="http://127.0.0.1:1300" && alert("User creation Sucessful!!!") </script>');

    });


  }

});

 // habilitando listener
server.listen(1350, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1350/');

