import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';
import { NextResponse } from "next/server";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content

export async function POST(request) {
    const res = await request.json()
    const { name, recipe, ingredients, date } = res;

    const result = await prisma.post.create({
        data: {
            name: name,
            recipe: recipe,
            ingredients: ingredients,
            date: date
        },
    });

    return NextResponse.json({
        data: res

    });
}

export async function DELETE(request) {
    const res = await request.json()
    const { name, recipe, ingredients, date } = res;

    const data = await prisma.post.delete({
        where: { date: date },
    });
    return NextResponse.json({data});
}