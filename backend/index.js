import cors from 'cors';
import express from 'express';
import { getAllUsers } from './controller.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.options('*', cors())

const port = 3000

app.get('/', (_, res) => res.send('Hello World'))

app.get('/all', getAllUsers)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})