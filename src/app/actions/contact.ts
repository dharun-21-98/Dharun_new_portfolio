"use server";

import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  if (message.length > 500) {
    return { error: "Message cannot exceed 500 characters." };
  }

  try {
    const dbUrl = process.env.dharun_form_DATABASE_URL || process.env.DATABASE_URL || process.env.POSTGRES_URL;
    const sql = neon(dbUrl!);
    const environment = process.env.NODE_ENV || 'development';
    await sql`INSERT INTO messages (name, email, message, environment) VALUES (${name}, ${email}, ${message}, ${environment})`;
    
    revalidatePath("/admin");
    return { success: "Message sent successfully! I will get back to you soon." };
  } catch (error: any) {
    console.error("Failed to insert message:", error);
    
    // Check if the table doesn't exist yet
    if (error.message?.includes("relation \"messages\" does not exist")) {
       return { error: "Database not configured yet. Please run the setup script." };
    }

    return { error: "Something went wrong. Please try again later." };
  }
}
