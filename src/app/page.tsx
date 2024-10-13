import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/ui/theme-mode-toggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Button>Click me</Button>
      <ThemeModeToggle />
    </main>
  );
}
