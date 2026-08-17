import { cookies } from "next/headers";
import { neon } from "@neondatabase/serverless";
import { LoginForm } from "./LoginForm";
import { logoutAdmin } from "@/app/actions/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  let messages: any[] = [];
  let dbError = null;

  try {
    const dbUrl = process.env.dharun_form_DATABASE_URL || process.env.DATABASE_URL || process.env.POSTGRES_URL;
    const sql = neon(dbUrl!);
    messages = await sql`SELECT * FROM messages ORDER BY created_at DESC`;
  } catch (error: any) {
    console.error("Database error:", error);
    dbError = error.message;
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <header className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/50">
          <div>
            <h1 className="text-3xl font-heading font-bold text-accent-primary">Inbox</h1>
            <p className="text-muted">Viewing submitted contact forms.</p>
          </div>
          <form action={logoutAdmin}>
            <button type="submit" className="px-4 py-2 text-sm font-semibold rounded-lg bg-secondary text-foreground hover:bg-danger/20 hover:text-danger transition-colors">
              Log Out
            </button>
          </form>
        </header>

        {dbError ? (
          <div className="p-6 bg-danger/10 border border-danger/20 rounded-xl">
            <h2 className="text-xl font-bold text-danger mb-2">Database Error</h2>
            <p className="text-danger/80 mb-4">{dbError}</p>
            <div className="p-4 bg-black/40 rounded-lg overflow-x-auto font-mono text-sm text-muted-foreground">
              <p>You probably need to create the table first. Run this SQL in your Vercel Postgres dashboard:</p>
              <pre className="mt-2 text-accent-primary">
{`CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`}
              </pre>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-border rounded-xl">
            <p className="text-muted-foreground text-lg">No messages yet. Inbox is clean.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {messages.map((msg) => (
              <div key={msg.id} className="p-6 md:p-8 glass-card border border-border/50 rounded-2xl flex flex-col gap-4">
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-border/50">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{msg.name}</h3>
                    <a href={`mailto:${msg.email}`} className="text-accent-primary text-sm hover:underline">{msg.email}</a>
                  </div>
                  <span className="text-xs font-mono text-muted uppercase tracking-wider bg-secondary px-3 py-1 rounded-full">
                    {new Date(msg.created_at).toLocaleString()}
                  </span>
                </div>
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
