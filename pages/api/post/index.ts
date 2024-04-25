import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
    const { name, recipe, ingredients, date } = req.body;

    //const session = await getSession({ req });
    const result = await prisma.post.create({
        data: {
            name: name,
            recipe: recipe,
            ingredients: ingredients,
            date: date
        },
    });
    res.json(result);
}