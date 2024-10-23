import { useRouter } from "next/router";
import { useMemo } from "react";

export const useCategoryId = (): number | undefined => {
  const { query } = useRouter();

  return useMemo(() => {
    const id = Array.isArray(query.id) ? query.id[0] : query.id;
    return id ? Number.parseInt(id, 10) || undefined : undefined;
  }, [query.id]);
};
