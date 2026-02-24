import { connectToDatabase } from "@/lib/connectToDB";
import { auth, currentUser } from "@clerk/nextjs/server";

//Adding a book to the DataBase
export async function POST(req: Request) {
  try {
    const { isAuthenticated } = await auth();
    if (!isAuthenticated) {
      return Response.json({ error: "UnAuthorised" }, { status: 401 });

      await connectToDatabase();

      const user = await currentUser();

      const formData = await req.formData();

      const title = formData.get("")?.toString() || "";
    }
  } catch (error) {}
}
