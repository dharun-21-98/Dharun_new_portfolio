"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(prevState: any, formData: FormData) {
  const password = formData.get("password") as string;
  const correctPassword = process.env.ADMIN_PASSWORD;

  if (!password) {
    return { error: "Password is required." };
  }

  if (!correctPassword) {
    return { error: "Admin password not configured in environment." };
  }

  if (password === correctPassword) {
    // Set a simple cookie that expires in 1 day
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, 
      path: "/",
    });
    
    redirect("/admin");
  } else {
    return { error: "Invalid password." };
  }
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin");
}
