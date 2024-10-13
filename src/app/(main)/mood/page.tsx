import MoodPickerList from "@/components/ui/mood-picker/mood-picker-list";

export default async function MoodPage() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto my-6 space-y-8">
      <h2 className="scroll-m-20 mb-2 text-3xl px-6 font-semibold tracking-tight first:mt-0 text-center">
        How are you?
      </h2>

      <MoodPickerList />
    </main>
  );
}
