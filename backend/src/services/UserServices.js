import prismaClient from '../prisma';

class Users {
    async execute(data) {
        const { name, email, password } = data;
        const user = await prismaClient.users.create({
        
        })

    }
}

export { Users }