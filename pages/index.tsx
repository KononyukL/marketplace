import { HomePage } from "@/pages/home";
import { useAuth } from "@/shared/queries/auth/useAuth";

export default function Home() {
  // TODO move it to index file
  useAuth();

  return (
    <>
      <HomePage />
    </>
  );
}
