const fastify = require('fastify')
const mongoose = require('mongoose')

const server = fastify({logger: true})
const db = await mongoose.connect('mongodb://user:pwd@database:27017')




// Ruta raiz
server.get('/', (request, reply) => {
    reply.send({ hello: 'world'})
})

// Todo: Ruta get (READ)
server.get('/notas', (request, reply) => {
    //con mongoose busco las notas
    reply.send({ notas: '[las notas]'})
})


// Todo: Ruta post (CREATE)
// Todo: Ruta put (UPDATE)
// Todo: Ruta delete (DELETE)

server.listen({port: 3000})