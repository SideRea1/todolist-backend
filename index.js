const express = require('express')
const userRouter = require('./routes/user.routes')
const cors = require('cors')

const port = process.env.PORT || 8080

const app = express()
app.use(cors())

app.use(express.json())
app.use('/api', userRouter)

app.listen(port, () => {
        console.log(`App listen on port ${port}`);
})
