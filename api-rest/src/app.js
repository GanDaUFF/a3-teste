
import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('oela mundo!')
})

 export default app