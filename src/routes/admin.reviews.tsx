import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { Star, Check, Trash2, Loader2, LogOut } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/reviews")({
  component: AdminReviewsPage,
  head: () => ({
    meta: [
      { title: "Модерация отзывов — Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

type AdminReview = {
  id: string;
  name: string;
  city: string;
  contact: string;
  rating: number;
  text: string;
  approved: boolean;
  created_at: string;
};

function AdminReviewsPage() {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    if (loading) return;
    if (!user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  async function load() {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("approved", { ascending: true })
      .order("created_at", { ascending: false });
    if (error) {
      toast.error("Не удалось загрузить отзывы");
      return;
    }
    setReviews((data ?? []) as AdminReview[]);
  }

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin]);

  async function approve(id: string) {
    setBusyId(id);
    const { error } = await supabase.from("reviews").update({ approved: true }).eq("id", id);
    setBusyId(null);
    if (error) return toast.error(error.message);
    toast.success("Отзыв опубликован");
    load();
  }

  async function remove(id: string) {
    if (!confirm("Удалить отзыв?")) return;
    setBusyId(id);
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    setBusyId(null);
    if (error) return toast.error(error.message);
    toast.success("Отзыв удалён");
    load();
  }

  async function logout() {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-neon" />
      </main>
    );
  }

  if (user && !isAdmin) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-2">Нет доступа</h1>
          <p className="text-muted-foreground mb-6">
            Учётная запись <span className="text-foreground">{user.email}</span> не имеет роли администратора.
          </p>
          <button
            onClick={logout}
            className="px-6 py-3 rounded-full border border-border hover:bg-muted transition-colors"
          >
            Выйти
          </button>
        </div>
      </main>
    );
  }

  const pending = reviews.filter((r) => !r.approved);
  const approved = reviews.filter((r) => r.approved);

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold">Модерация отзывов</h1>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/"
              className="px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors text-sm"
            >
              На сайт
            </Link>
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" /> Выйти
            </button>
          </div>
        </header>

        <Section title={`На модерации (${pending.length})`} highlight>
          {pending.length === 0 ? (
            <p className="text-muted-foreground">Нет новых отзывов</p>
          ) : (
            pending.map((r) => (
              <ReviewRow key={r.id} review={r} busy={busyId === r.id} onApprove={approve} onDelete={remove} />
            ))
          )}
        </Section>

        <Section title={`Опубликованные (${approved.length})`}>
          {approved.length === 0 ? (
            <p className="text-muted-foreground">Пока ничего не опубликовано</p>
          ) : (
            approved.map((r) => (
              <ReviewRow key={r.id} review={r} busy={busyId === r.id} onDelete={remove} />
            ))
          )}
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children, highlight }: { title: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <section className="mb-12">
      <h2 className={`text-xl font-bold mb-4 ${highlight ? "text-neon" : ""}`}>{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function ReviewRow({
  review,
  busy,
  onApprove,
  onDelete,
}: {
  review: AdminReview;
  busy: boolean;
  onApprove?: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <div className="font-semibold">{review.name} <span className="text-muted-foreground text-sm">· {review.city}</span></div>
          <div className="text-xs text-muted-foreground">{review.contact}</div>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} className={`w-4 h-4 ${n <= review.rating ? "fill-neon text-neon" : "text-muted-foreground/30"}`} />
          ))}
        </div>
      </div>
      <p className="text-foreground/90 mb-4">{review.text}</p>
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">
          {new Date(review.created_at).toLocaleString("ru-RU")}
        </span>
        <div className="flex gap-2">
          {onApprove && (
            <button
              disabled={busy}
              onClick={() => onApprove(review.id)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-neon text-background hover:bg-neon/90 transition-colors disabled:opacity-50"
            >
              <Check className="w-3.5 h-3.5" /> Одобрить
            </button>
          )}
          <button
            disabled={busy}
            onClick={() => onDelete(review.id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-destructive/40 text-destructive hover:bg-destructive/10 transition-colors disabled:opacity-50"
          >
            <Trash2 className="w-3.5 h-3.5" /> Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
