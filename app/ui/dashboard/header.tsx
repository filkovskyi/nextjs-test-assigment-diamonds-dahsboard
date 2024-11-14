import { auth } from "@/auth";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderBalance from "./header-balance";

export default async function Header() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        {user?.image ? (
          <Image
            src={user.image}
            alt={user.name ?? "User avatar"}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200" />
        )}
        <div className="flex flex-col">
          <span className="font-medium">{user?.name}</span>
          <span className="text-sm text-gray-500">{user?.email}</span>
        </div>
      </div>
      <div className="relative">
        <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
        <HeaderBalance />
      </div>
    </div>
  );
}
