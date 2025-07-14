//check profile to see how columns are
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db';

export async function GET(request: NextRequest) {
    const client = await db.connect();
    const profileRes = await client.sql`SELECT * FROM profile`;
    const profile = profileRes.rows;
    return NextResponse.json(profile);
}