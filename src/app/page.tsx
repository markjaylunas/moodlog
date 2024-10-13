import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/ui/theme-mode-toggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Button>Click me</Button>
      <ThemeModeToggle />

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cum
        non cupiditate id saepe minus enim. Sed fuga dolor, repellat a dolorem
        enim optio, labore autem laborum accusantium, repellendus in.
      </p>
    </main>
  );
}
