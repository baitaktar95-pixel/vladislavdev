import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Вход — Vladislav" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } =
      mode === "signin"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: `${window.location.origin}/admin/reviews` },
          });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (mode === "signup") {
      toast.success("Аккаунт создан. Входим...");
    } else {
      toast.success("Вход выполнен");
    }
    navigate({ to: "/admin/reviews" });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-8 space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">
          {mode === "signin" ? "Вход в админку" : "Регистрация"}
        </h1>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Пароль</label>
          <input
            required
            type="password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={busy}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neon text-background font-semibold hover:bg-neon/90 transition-colors disabled:opacity-50"
        >
          {busy && <Loader2 className="w-4 h-4 animate-spin" />}
          {mode === "signin" ? "Войти" : "Создать аккаунт"}
        </button>
        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="w-full text-sm text-muted-foreground hover:text-neon transition-colors"
        >
          {mode === "signin" ? "Первый вход? Создать аккаунт" : "Уже есть аккаунт? Войти"}
        </button>
      </form>
    </main>
  );
}
