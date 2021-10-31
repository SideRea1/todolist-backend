const Router = require('express')
const taskController = require('../controller/task.controller')
const router = new Router()

router.post('/task', taskController.createTask)
router.get('/task', taskController.getTasks)
router.delete('/task/:id', taskController.deleteTask)

module.exports = router