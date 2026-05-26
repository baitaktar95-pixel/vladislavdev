import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const LS_KEY = "liked_posts_v1";

function getLikedSet(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(LS_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function saveLiked(slug: string) {
  const s = getLikedSet();
  s.add(slug);
  localStorage.setItem(LS_KEY, JSON.stringify(Array.from(s)));
}

export function LikeButton({ slug }: { slug: string }) {
  const [count, setCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLiked(getLikedSet().has(slug));
    supabase
      .from("post_likes")
      .select("likes")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data }) => setCount(data?.likes ?? 0));
  }, [slug]);

  const handleClick = async () => {
    if (liked || loading) return;
    setLoading(true);
    // Optimistic
    setLiked(true);
    setCount((c) => c + 1);
    saveLiked(slug);
    const { data, error } = await supabase.rpc("increment_post_like", {
      p_slug: slug,
    });
    if (!error && typeof data === "number") {
      setCount(data);
    }
    setLoading(false);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={liked || loading}
      aria-label={liked ? "Вы уже поставили лайк" : "Поставить лайк"}
      className={cn(
        "inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-border transition-all",
        liked
          ? "border-red-500/50 cursor-default"
          : "hover:border-red-500/50 hover:scale-105 cursor-pointer",
      )}
    >
      <Heart
        className={cn(
          "w-5 h-5 transition-all",
          liked ? "fill-red-500 text-red-500 scale-110" : "text-muted-foreground",
        )}
      />
      <span className={cn("font-medium tabular-nums", liked && "text-red-500")}>
        {count}
      </span>
    </button>
  );
}
