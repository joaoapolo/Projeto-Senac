const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require("uuid")



let clientes = []


router.post('/', (req, res) => {
    const { nome, documentos, DataDeNascimento } = req.body
    const cliente = {
      id: uuidv4(),
      nome,
      documentos,
      DataDeNascimento,
    }
    clientes.push(cliente)
    res.send(cliente)
  })
  
  router.get('/', (req, res) => {
    let resultados = []
    clientes.forEach((cliente) => {
      const { nome, documento } = req.query
      if (
        cliente.nome.includes(nome) ||
        cliente.documentos.includes(documento)
   
      ) {
  
        resultados.push(cliente)
      }
    })
    res.send(resultados)
  })
  
  
  router.delete('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < clientes.length; i++) {
      const cliente = clientes[i]
      if (cliente.id === id) {
        clientes.splice(i, 1)
        res.send(cliente)
        return
      }
    }
    res.status(404).send("cliente não encontrado")
  })
  
  router.put('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < clientes.length; i++) {
      const cliente = clientes[i]
      if (cliente.id === id) {
        const { nome, documentos, DataDeNascimento } = req.body
        cliente.nome = nome
        cliente.documentos = documentos
        cliente.DataDeNascimento = DataDeNascimento
        res.send(cliente)
        return
      }
    }
    res.status(404).send("cliente não encontrado")
  })
  
  
  router.get('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < clientes.length; i++) {
      const cliente = clientes[i]
      if (cliente.id === id) {
        res.send(cliente)
        return
      }
    }
    res.status(404).send("cliente não encontrado")
  })
  
  router.delete('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < clientes.length; i++) {
      const cliente = clientes[i]
      if (cliente.id === id) {
        clientes.splice(i, 1)
        res.send(cliente)
        return
      }
    }
    res.status(404).send("cliente não encontrado")
  })


  module.exports = router