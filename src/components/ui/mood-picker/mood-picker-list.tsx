import { moodLevels } from "@/lib/mood";
import { Button } from "../button";

export default function MoodPickerList() {
  return (
    <section>
      <ol className="flex justify-center flex-wrap gap-1 sm:gap-4 w-full">
        {moodLevels.map((mood) => (
          <li key={mood.level}>
            <Button
              variant="outline"
              className="size-[60px] sm:size-32 lg:size-40"
            >
              <p className="flex flex-col gap-1">
                <span className="text-2xl sm:text-7xl">{mood.mood.emoji}</span>
                <span className="text-xs sm:text-xl">{mood.name}</span>
              </p>
            </Button>
          </li>
        ))}
      </ol>
    </section>
  );
}
