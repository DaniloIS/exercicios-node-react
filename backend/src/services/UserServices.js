const prismaClient = require('../prisma');

module.exports = {
    async insert(users) {
        const { name, email, password } = users;
        const user = await prismaClient.users.create({
            data: {
                name,
                email,
                password
            }
        })

        return user

    }
}