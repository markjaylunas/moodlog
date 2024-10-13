import { moodLevels } from "@/lib/mood";
import { capitalize } from "lodash";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MoodPickerList() {
  return (
    <section>
      <ol className="grid grid-cols-5 gap-1 sm:gap-4 w-full px-2 sm:px-4 max-w-screen-lg mx-auto">
        {moodLevels.map((mood) => (
          <li key={mood.level} className="flex justify-center">
            <Link href={`/mood/${mood.name}`}>
              <Button
                variant="secondary"
                className="size-[60px] sm:size-32 lg:size-40"
                asChild
              >
                <p className="flex flex-col gap-1">
                  <span className="text-2xl sm:text-7xl">
                    {mood.mood.emoji}
                  </span>
                  <span className="text-xs sm:text-xl">
                    {capitalize(mood.name)}
                  </span>
                </p>
              </Button>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
