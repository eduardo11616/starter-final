import 'reflect-metadata'
import { Resolver, Query, Ctx, InputType, Field, Arg } from 'type-graphql';
import { Pendientes } from '.';
const express = require('express')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())


//crear un pendiente
app.post(`/post`, async(req, res)=>{
    const {title, content} = req.body
    const result = await prisma.post.create({
        data: {
            title, content
        }
    })
    res.json(result)
})

//mostrar los pendientes
app.get(`/posts`, async(req, res)=>{
    const posts = await prisma.post.findMany()
    res.json(posts)
})

//Actualizar un pendiente
app.put(`/post/:id`, async(req, res)=>{
    const {id} = req.params
    const {title, content} = req.body
    const post = await prisma.post.update({
        where: {id: Number(id)},
        data: {title, content}
    })
    res.json(post)
})

//Eliminar un pendiente
app.delete(`/post/:id`, async(req, res)=>{
    const {id} = req.params
    const post = await prisma.post.delete({
        where: {id: Number(id)}
    })
    res.json('Eliminado')
})

//test server
//app.listen(3000, ()=>
 //   console.log(`Server ready at: htt://localhost:4000`)
//)