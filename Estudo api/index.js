// Ip@umirimCe@r@2006
// mongodb+srv://kaioasousa12:Ip@umirimCe@r@2006@apicluster.ixmjo.mongodb.net/?retryWrites=true&w=majority&appName=APICluster
// config inicial
const express = require('express')
const app = express()

// depois do db
const mongoose = require('mongoose')

const Person = require('./models/Person')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

const personRoutes =require('./routes/personRoutes')

app.use('/person', personRoutes)

app.get('/person', async (req, res) => {
  try {
    const people = await Person.find()

    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/person/:id', async (req, res) => {
  const id = req.params.id

  try {
    const person = await Person.findOne({ _id: id })

    if (!person) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/person/:id', async (req, res) => {
  const id = req.params.id

  const { name, salary, approved } = req.body

  const person = {
    name,
    salary,
    approved,
  }

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person)

    if (updatedPerson.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/person/:id', async (req, res) => {
  const id = req.params.id

  const person = await Person.findOne({ _id: id })

  if (!person) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Person.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' })
})

mongoose
  .connect(
    'mongodb+srv://kaioasousa12:Ip@umirimCe@r@2006@apicluster.ixmjo.mongodb.net/?retryWrites=true&w=majority&appName=APICluster',
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))