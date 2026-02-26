import { connectToDatabase } from "@/lib/connectToDB";
import { UploadImage } from "@/lib/upload-image";
import Book from "@/models/book";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

//Adding a book to the DataBase
export async function POST(req: Request) {
  try {
    const { isAuthenticated } = await auth();
    if (!isAuthenticated) {
      return Response.json({ error: "UnAuthorised" }, { status: 401 });
    }
    await connectToDatabase();

    const user = await currentUser();

    const formData = await req.formData();

    const title = formData.get("title")?.toString() || "";
    const author = formData.get("author")?.toString() || "";
    const genre = formData.get("genre")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const publishedYearRaw = formData.get("publishedYear")?.toString() || "";
    const publishedYear = publishedYearRaw
      ? Number(publishedYearRaw)
      : undefined;

    const cover = formData.get("cover") as File; //2:21:20

    if (!title || !author || !cover || !genre || !description) {
      return Response.json(
        {
          error:
            "Title, author, cover image, genre and description are required",
        },
        { status: 400 },
      );
    }

    let uploadResult: any;

    if (cover) {
      uploadResult = await UploadImage(cover, "Sbooks");
    }

    console.log(" Upload Result:", uploadResult);

    const book = await Book.create({
      title,
      author,
      cover: uploadResult?.secure_url || cover.name,
      genre,
      description,
      publishedYear,
      addedBy: { id: user?.id, firstName: user?.firstName },
    });

    return Response.json({ book }, { status: 201 });
  } catch (error) {
    console.log("Error adding book:", error);
    return Response.json({ error: "Failed to create book" }, { status: 500 });
  }
}

//Getting all books from DataBAse
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const books = await Book.find().sort({ createdAt: -1 });
    return Response.json({ books }, { status: 200 });
  } catch (error) {
    console.error("Error fetching Books", error);

    return Response.json({error: " Failed to fetched books "}, {status: 500})
  }
}
