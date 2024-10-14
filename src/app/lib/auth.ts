"use server";
import { cookies } from "next/headers";

export const authorise = (isLoggedin: boolean) => {
  const cookieStore = cookies();

  if (isLoggedin) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    cookieStore.set("isLoggedin", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
    });
  } else {
    cookieStore.delete("isLoggedin");
  }
};
