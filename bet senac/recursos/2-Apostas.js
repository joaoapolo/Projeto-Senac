const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require("uuid")

let apostas = []

router.post('/', (req, res) => {
    const { Valor, Evento, idcliente } = req.body
    const aposta = {
        id: uuidv4(),
        Valor,
        Evento,
        idcliente,
    }
    apostas.push(aposta)
    res.send(aposta)
})

router.get('/', (req, res) => {
    let resultados = []
    apostas.forEach((aposta) => {
        const { Evento, Valor } = req.query
        if (
            aposta.Evento.includes(Evento) ||
            aposta.Valor.includes(Valor)

        ) {

            resultados.push(aposta)
        }
    })
    res.send(resultados)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i]
        if (aposta.id === id) {
            apostas.splice(i, 1)
            res.send(aposta)
            return
        }
    }
    res.status(404).send("Aposta não encontrado")
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i]
        if (aposta.id === id) {
            const { Valor, Evento, idcliente } = req.body
            aposta.Valor = Valor
            aposta.Evento = Evento
            aposta.idcliente = idcliente
            res.send(aposta)
            return
        }
    }
    res.status(404).send("Aposta não encontrado")
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i]
        if (apostas.id === id) {
            res.send(aposta)
            return
        }
    }
    res.status(404).send("Aposta não encontrado")
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i]
        if (aposta.id === id) {
            aposta.splice(i, 1)
            res.send(aposta)
            return
        }
    }
    res.status(404).send("Aposta não encontrado")
})

module.exports = router