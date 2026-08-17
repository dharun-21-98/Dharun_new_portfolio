import { cookies } from "next/headers";
import { neon } from "@neondatabase/serverless";
import { LoginForm } from "./LoginForm";
import { logoutAdmin } from "@/app/actions/auth";
import { ExpandableMessage } from "./ExpandableMessage";

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
    const environment = process.env.NODE_ENV || 'development';
    messages = await sql`SELECT * FROM messages WHERE environment = ${environment} ORDER BY created_at DESC`;
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
            <p className="text-muted">Viewing {messages.length} submitted contact form{messages.length === 1 ? '' : 's'}.</p>
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
  environment VARCHAR(50) DEFAULT 'production',
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
          <div className="overflow-x-auto glass-panel border border-border/50 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-border/50 bg-secondary/20">
                  <th className="p-5 font-semibold text-foreground text-sm tracking-wide w-12 text-center">S.No</th>
                  <th className="p-5 font-semibold text-foreground text-sm tracking-wide">Date</th>
                  <th className="p-5 font-semibold text-foreground text-sm tracking-wide">Name</th>
                  <th className="p-5 font-semibold text-foreground text-sm tracking-wide">Email</th>
                  <th className="p-5 font-semibold text-foreground text-sm tracking-wide w-1/2">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {messages.map((msg, index) => (
                  <tr key={msg.id} className="hover:bg-secondary/10 transition-colors group">
                    <td className="p-5 align-top text-center">
                      <span className="text-sm font-bold text-muted-foreground">{index + 1}</span>
                    </td>
                    <td className="p-5 align-top">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-mono text-foreground/80 uppercase tracking-wider whitespace-nowrap">
                          {new Date(msg.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="text-[11px] font-mono text-muted uppercase whitespace-nowrap">
                          {new Date(msg.created_at).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 align-top font-medium text-foreground whitespace-nowrap">{msg.name}</td>
                    <td className="p-5 align-top">
                      <a href={`mailto:${msg.email}`} className="text-accent-primary text-sm hover:underline whitespace-nowrap">
                        {msg.email}
                      </a>
                    </td>
                    <td className="p-5 align-top">
                      <ExpandableMessage text={msg.message} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
