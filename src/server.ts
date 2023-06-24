import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
const app = fastify()
const prisma = new PrismaClient()

// HTTP METHOD GET POST PUT PATCH DELETE
app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
// npm run dev rodar o codigo
