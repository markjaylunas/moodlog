import NewMoodModal from "@/components/mood-picker/new-mood-modal";
import { moodLevels } from "@/lib/mood";
import { redirect } from "next/navigation";

type Props = {
  params: { moodId: string };
};

export default async function NewMoodPage({ params: { moodId } }: Props) {
  if (!moodLevels.map((mood) => mood.name).includes(moodId))
    return redirect("/mood");
  return <NewMoodModal mood={moodId} />;
}
