const WebSocketServer = require('ws').Server
const redis = require('redis')
const http = require('http')
const ecstatic = require('ecstatic')

// Configuration: adapt to environment
// const REDIS_SERVER = "redis://172.20.0.1:6379";
// const WEB_SOCKET_PORT = 3000;

const redisPub = redis.createClient()
const redisSub = redis.createClient()
const server = http.createServer(ecstatic({root:`${__dirname}/www`}))
const wss = new WebSocketServer({ server : server })

// Register event for client connection
wss.on('connection',(ws) => {
    console.log('Client connected')
    ws.on('message', (message) => {
      console.log(`Message ${message}`)
    redisPub.publish('app:auth-service',message);
    })
})

redisSub.subscribe('app:auth-service')
redisSub.on('message',(channel,msg) => {
    wss.clients.forEach(client => {
        client.send(msg)
    })
})

server.listen(process.argv[2] || 4999)