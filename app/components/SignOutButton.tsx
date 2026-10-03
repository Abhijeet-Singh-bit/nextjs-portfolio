"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="rounded-xl bg-red-50 px-5 py-3 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
    >
      Sign Out
    </button>
  );
}