import prisma from "../../../lib/prisma";


const mealGet = async () => {

    const meals = await prisma.post.findMany();

    return meals;
}


export default mealGet