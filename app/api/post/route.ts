import prisma from '../../../lib/prisma';
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from '../auth/[...nextauth]/route';


export async function getSession() {
    return await getServerSession(authOptions);
}

export async function POST(request) {
    const body = await request.json()
    const { name, recipe, ingredients, date } = body;
    const session = await getSession();
    const result = await prisma.post.create({
        data: {
            name: name,
            recipe: recipe,
            ingredients: ingredients,
            date: date,
            author: { connect: { email: session?.user?.email } },
        },
    });

    return NextResponse.json({
        data: body
    });
}

export async function DELETE(request) {
    const body = await request.json()
    const { name, recipe, ingredients, date} = body;
    const session = await getSession();
    const data = await prisma.post.delete({
        where: {
            date: date,
            author: { connect: { email: session.user.email } },
            
        }
    });
    return NextResponse.json({data});
}