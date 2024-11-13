import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
        redirect("/dashboard");
      }}
    >
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        type="submit"
      >
        SignIn with Google
      </button>
    </form>
  );
}
