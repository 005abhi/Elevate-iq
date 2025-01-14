import { NextResponse } from "next/server";
import Post from "@/models/post";
import dbConnect from "@/libs/mongodb";
import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";

export const POST = async (req: Request) => {
  try {
    const { title, content, createdBy, authorRole, imageUrl } =
      await req.json();
    console.log("Request body:", { title, content, createdBy, authorRole });

    // Validate required fields
    if (!title || !content || !createdBy || !authorRole) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    let imagePath = null;

    // Handle image saving if imageUrl exists
    if (imageUrl) {
      const base64Data = imageUrl.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}.png`;
      const publicPath = path.join(
        process.cwd(),
        "public",
        "posts_upload_images",
        fileName
      );

      fs.writeFileSync(publicPath, buffer);

      // Set the relative path to be stored in the database
      imagePath = `/posts_upload_images/${fileName}`;
    }

    // Create the post with the image path (if exists)
    const post = await Post.create({
      title,
      content,
      createdBy,
      authorRole,
      imagePath: imagePath,
    });

    console.log("Post created successfully:", post);

    // Revalidate the relevant page
    revalidatePath("/skillhive/STUDENT/profile");

    return NextResponse.json({ message: "success", post });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create the post" },
      { status: 500 }
    );
  }
};
