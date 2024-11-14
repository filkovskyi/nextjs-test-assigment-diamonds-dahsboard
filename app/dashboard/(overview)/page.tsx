import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import DiamondPurchase from "@/app/ui/dashboard/diamond-purchase";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <main>
      <header className="w-full bg-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex">
            <UserCircleIcon className="h-10 w-10 text-white mr-3" />
            <h1 className={`text-white mb-4 text-xl md:text-2xl`}>
              {`Dear ${session?.user?.name} welcome to Diamonds dashboard`}
            </h1>
          </div>
        </div>
      </header>
      <div className="m-10">
        <DiamondPurchase  />
      </div>
    </main>
  );
}
