import User from "@/models/user";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";

export async function POST(req: Request) {
  try {
    const { fullname, username, password, role } = await req.json();

    if (!fullname || !username || !password || !role) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    await connectMongoDB();
    const user = await User.create({ fullname, username, password, role });

    console.log("User registered successfully:", { fullname, username, role });
    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "email already exists. Please choose another." },
        { status: 400 }
      );
    }
    console.error("Error during user registration:", error);

    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
