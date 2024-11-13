import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>
        {`Dear ${session?.user?.name} welcome to Diamonds dashboard`}
      </h1>
    </main>
  );
}
