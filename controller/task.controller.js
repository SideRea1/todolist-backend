const db = require('../db/connect')

class TaskController {
    async createTask(req, res) {
        const {task} = req.body;
        try {
            const newTask = await db.query('INSERT INTO todo (task) values ($1) RETURNING *', [task])
            res.json(newTask.rows[0])
        }
        catch (e) {
            console.log(e)
            res.status(500)
        }
    }

    async getTasks(req, res) {

        try {
            const tasks = await db.query('SELECT * FROM todo')
            console.log(tasks)
            res.json(tasks.rows)
        }
        catch (e) {
            console.log(e)
            res.status(500)
        }
    }

    async deleteTask(req, res) {
        const id = req.params.id
        try {
            const task = await db.query('DELETE FROM todo where id = $1', [id])
            res.json(task.rows[0])
        }
        catch (e) {
            console.log(e)
            res.status(500)
        }
    }
}

module.exports = new TaskController()