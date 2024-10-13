import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import { IconHome } from "@tabler/icons-react";
import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="container mx-auto max-w-lg min-h-screen space-y-8 p-8">
      <h1 className="mt-10 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        404 - Not Found
      </h1>
      <p>
        Page you are trying to open does not exist. You may have mistyped the
        address, or the page has been moved to another URL. If you think this is
        an error contact support.
      </p>

      <div className="flex justify-center gap-4 ">
        <BackButton>Get back</BackButton>
        <Link href="/">
          <Button color="primary">
            <IconHome className="size-4 mr-2" />
            Get to home page
          </Button>
        </Link>
      </div>
    </main>
  );
}
