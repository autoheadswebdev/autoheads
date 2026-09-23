"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "./actions";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const result = await login(formData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4] dark:bg-[#111111] px-4">
      <div className="bg-white dark:bg-[#131315] p-8 md:p-10 rounded-2xl shadow-xl shadow-black/[0.02] dark:shadow-white/[0.02] border border-[#111111]/10 dark:border-white/10 w-full max-w-md">
        
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">
            <span className="text-[#111111] dark:text-white">Auto</span>
            <span className="text-[#C8A45D]">Heads</span>
          </h1>
          <p className="text-xs tracking-widest text-[#111111]/40 dark:text-white/40 uppercase">Admin CMS Login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-[#111111]/70 dark:text-white/70 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-transparent focus:border-[#C8A45D] focus:bg-transparent transition-all outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#111111]/70 dark:text-white/70 mb-2">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-transparent focus:border-[#C8A45D] focus:bg-transparent transition-all outline-none text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 text-red-500 text-xs font-medium border border-red-500/20">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#C8A45D] hover:bg-[#b8944d] text-[#111111] font-semibold text-sm transition-colors disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
