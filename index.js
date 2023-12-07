//1 import jsonServer
const jsonServer = require('json-server')

//2 create a server using json-server
const mediaPlayerServer = jsonServer.create()

//3 setup path for the server
const router = jsonServer.router("db.json")

//4 return middleware used by json server (for javascript convertion)
const middleware = jsonServer.defaults()

//5 define port backend
const port = 4000 || process.env.port

// 6 use middleware and port
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//7 to lister server for resolving requests and clients
mediaPlayerServer.listen(port,()=>{
    console.log('listening in port'+port);
})

