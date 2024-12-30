import { db } from "@/configs/db";
import { usersTable } from "@/configs/schema";
import { NextResponse } from "next/server";
import { eq } from 'drizzle-orm';

export async function POST(req) {
    //dont add if(user exist ) 
    const {user} = await req.json();
    const userData = await db.select().from(usersTable)
    .where((eq(usersTable.email, user?.primaryEmailAddress.emailAddress)))
    if(userData.length<=0){
        //if not exist then add to db
        const result = await db.insert(usersTable).values({
            name: user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
            image: user?.imageUrl
        }).returning(usersTable)
        return NextResponse.json(result.data)
    }
    return NextResponse.json(userData[0]);

}