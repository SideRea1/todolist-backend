const db = require('../db/connect')

class TaskController {
    async createTask(req, res) {
        const {task} = req.body;
        if (task.length > 255){
            return res.status(400).send('Bad Request')
        }
        try {
            const newTask = await db.query('INSERT INTO todo (task) values ($1) RETURNING *', [task])
            return res.json(newTask.rows[0])
        }
        catch (e) {
            console.log(e)
            return res.status(500)
        }
    }

    async getTasks(req, res) {

        try {
            const tasks = await db.query('SELECT * FROM todo')
            console.log(tasks)
            return res.json(tasks.rows)
        }
        catch (e) {
            console.log(e)
            return res.status(500)
        }
    }

    async deleteTask(req, res) {
        const id = req.params.id

        if (Math.sign(id) === -1 || isNaN(Math.sign(id))){
            return res.status(400).send('Bad Request')
        }
        try {
            const task = await db.query('DELETE FROM todo where id = $1', [id])
            return res.json(task.rows[0])
        }
        catch (e) {
            console.log(e)
            return res.status(500)
        }
    }
}

module.exports = new TaskController()