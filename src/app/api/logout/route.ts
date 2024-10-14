import { authorise } from "@/app/lib/auth";

export async function POST() {
  authorise(false);
  return Response.json({ message: "Logout Successful" });
}
