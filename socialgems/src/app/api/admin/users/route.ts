//route that handles retrieving users(brands information) from users table and displays it on dashbaord.

import { NextResponse } from "next/server";
import { db } from "../../../lib/db"; // Adjusted path according to the folder level of the  DB connection file

//Get function that retrieves users.
export async function GET() {
    try {
        //fetch all uers from the database
        const users = await db.query("SELECT * FROM users ORDER BY created_at DESC;");

        return NextResponse.json({success: true, users: users.rows}, {status: 200});
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({success: false, error: "Failed to fetch users"}, {status: 500});
    }
}

//delete function that deletes a user.
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ success: false, error: "User ID is required" }, { status: 400 });
        }

        await db.query("DELETE FROM users WHERE id = $1;", [id]);

        return NextResponse.json({ success: true, message: "User deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ success: false, error: "Failed to delete user" }, { status: 500 });
    }
}

// PUT function to update an influencer
export async function PUT(req: Request) {
  try {
    const { id, first_name, last_name, email } = await req.json();
    if (!id || !first_name || !last_name || !email) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
    }
    const updatedUser = await db.query(
      "UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4 RETURNING *;",
      [first_name, last_name, email, id]
    );
    return NextResponse.json({ success: true, user: updatedUser.rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ success: false, error: "Failed to update user" }, { status: 500 });
  }
}

/*
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "5", 10); // Users per page
    const skip = (page - 1) * limit;

    const users = await db.users.findMany({
      skip,
      take: limit,
    });

    const totalUsers = await db.users.count(); // Get total users count

    return NextResponse.json({
      success: true,
      users,
      totalUsers,
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch users" }, { status: 500 });
  }
}
*/