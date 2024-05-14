import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOp";


export async function getSession() {
    return await getServerSession(authOptions);
}

const mealGet = async () => {
    const session = await getSession();

    if (session && session.user !== null) {
        const meals = await prisma.post.findMany({
            where: { author: session.user },
        });
        return meals;
    }else {
        const meals = [{}];
        return meals;
    }
}


export default mealGet