import { authorise } from "@/app/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const USER_EMAIL = process.env.USER_EMAIL;
  const USER_PASSWORD = process.env.USER_PASSWORD;

  if (email === USER_EMAIL && password === USER_PASSWORD) {
    authorise(true);
    return new Response(JSON.stringify({ message: "Login Successful!" }), {
      status: 200,
    });
  }

  return new Response(JSON.stringify({ error: "Invalid credentials" }), {
    status: 401,
  });
}
