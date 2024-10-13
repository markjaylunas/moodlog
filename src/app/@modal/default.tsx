import NewMoodModal from "@/components/mood-picker/new-mood-modal";

type Props = {
  params: { moodId: string };
};

export default async function NewMoodModalDefaultPage({
  params: { moodId },
}: Props) {
  return <NewMoodModal mood={moodId} />;
}
