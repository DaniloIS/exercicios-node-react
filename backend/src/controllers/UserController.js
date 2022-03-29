const UserController =  require('../services/UserServices');

module.exports = {
    async create(req, res) {
        const user = req.body
        UserController.insert(user)
    }
}