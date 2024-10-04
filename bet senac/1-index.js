const express = require('express')

const app = express()
const port = 3000

const recursosApostas = require("./recursos/2-Apostas")
const recursosClientes = require("./recursos/1-Clientes")

app.use(express.json())


app.use("/clientes" , recursosClientes )
app.use("/apostas" , recursosApostas )



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})




