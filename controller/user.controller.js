const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {task, isDone} = req.body
        const newTask = await db.query('INSERT INTO todo_list (task, isDone) values ($1, $2) RETURNING *', [task, isDone])

        res.json(newTask.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM todo_list')
        res.json(users.rows)
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM todo_list where id = $1', [id])
        res.json(user.rows[0])

    }
}

module.exports = new UserController()