class UserController {
    async handle(req, res) {
        const { name, email, password } = req.body
        console.log({ name, email, password })
    }
}

module.exports = UserController