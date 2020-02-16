// server.js
var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('./mock_server/trades.json');
var middlewares = jsonServer.defaults();

server.use((req,res,next)=>{
 setTimeout(next, 1000);
});


server.use(middlewares);
server.use('/api', router);  // Rewrite routes to appear after /api
server.listen(5000, function () {
    console.log('JSON Server is running')
});
