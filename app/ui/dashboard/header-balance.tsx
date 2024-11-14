"use client";

import { useEffect } from "react";
import { useDiamondStore } from "@/app/store/diamond-store";
import { useSession } from "next-auth/react";

export default function HeaderBalance() {
  const { data: session } = useSession();
  const { balance, initializeBalance } = useDiamondStore();

  useEffect(() => {
    if (session?.user?.email) {
      initializeBalance(session.user.email);
    }
  }, [session?.user?.email, initializeBalance]);

  if (!session?.user) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {balance}
    </span>
  );
}
