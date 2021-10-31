const express = require('express')
const taskRouter = require('./routes/task.routes')
const cors = require('cors')

const port = process.env.PORT || 8080

const app = express()
app.use(cors())

app.use(express.json())
app.use('/api', taskRouter)

app.listen(port, () => {
        console.log(`App listen on port ${port}`);
})
