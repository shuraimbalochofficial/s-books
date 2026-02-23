import { auth } from "@clerk/nextjs/server";

//Adding a book to the DataBase
export async function POST(req: Request) {
  try {
    const { isAuthenticated } = await auth();
    if (!isAuthenticated) {
      return Response.json({ error: "UnAuthorised" }, { status: 401 });
    }
  } catch (error) {}
}

