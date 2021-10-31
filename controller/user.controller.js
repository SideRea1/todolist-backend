const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {task} = req.body
        const newTask = await db.query('INSERT INTO todo (task) values ($1) RETURNING *', [task])
        console.log(req.body)

        res.json(newTask.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM todo')
        res.json(users.rows)
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM todo where id = $1', [id])
        res.json(user.rows[0])

    }
}

module.exports = new UserController()