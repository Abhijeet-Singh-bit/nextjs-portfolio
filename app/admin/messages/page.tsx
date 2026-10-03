import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import ContactMessage from "@/app/models/ContactMessage";

async function getMessages() {
  await connectDB();

  const messages = await ContactMessage.find()
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(messages));
}

export default async function AdminMessages() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const messages = await getMessages();

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Admin
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Contact Messages
          </h1>

          <p className="mt-4 text-slate-600">
            Messages submitted through your contact form.
          </p>
        </div>

        {/* Messages */}
        <div className="space-y-5">
          {messages.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <p className="text-slate-500">
                No messages yet.
              </p>
            </div>
          ) : (
            messages.map(
              (message: {
                _id: string;
                name: string;
                email: string;
                message: string;
                createdAt: string;
              }) => (
                <article
                  key={message._id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">
                        {message.name}
                      </h2>

                      <p className="mt-1 text-sm text-blue-600">
                        {message.email}
                      </p>
                    </div>

                    <p className="text-sm text-slate-400">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    {message.message}
                  </p>
                </article>
              )
            )
          )}
        </div>

      </div>
    </main>
  );
}