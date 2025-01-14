import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

export async function POST() {
  try {
    await client.connect();
    const db = client.db("your_database_name"); // Replace with your database name
    await db.dropDatabase();
    return NextResponse.json({ message: "Database cleared successfully." });
  } catch (error: any) {
    console.error("Error clearing database:", error);
    return NextResponse.json(
      { message: "Failed to clear database.", error: error.message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
