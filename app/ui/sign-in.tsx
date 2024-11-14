import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-4">
      <form
        action={async (formData: FormData) => {
          "use server";
          const provider = formData.get("provider") as "github" | "google";
          await signIn(provider, { redirectTo: "/dashboard" });
        }}
      >
        <div className="flex flex-row gap-2">
          <button
            className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800"
            type="submit"
            name="provider"
            value="github"
          >
            Sign in with GitHub
          </button>
          <button
            className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            type="submit"
            name="provider"
            value="google"
          >
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
}
