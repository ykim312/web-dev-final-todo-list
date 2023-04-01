import prisma from '../../../lib/prisma'

export default async function handler(req, res){
    if(req.method === "POST"){
        const {todo, date, time, email} = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        await prisma.todo.create({
            data: {
                todo, date, time, userId: user.id
            }
        });

        res.status(200).json({message:"ok"});

    }
}

