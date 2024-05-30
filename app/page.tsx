import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Footer from "@/components/Footer";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <h1>
            <a
              href="/"
              className="font-bold hover:underline"
            >
              justcode
            </a>
            <span className="mx-2">/</span>


            <a
              href="projects"
              className="font-bold hover:underline"
            >
              projects
            </a>

          </h1>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">

        <div className="flex flex-col gap-16 items-center">
          <div className="flex gap-8 justify-center items-center">
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              rel="noreferrer"
            >
            </a>
            <span className="border-l rotate-45 h-6" />
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            </a>
          </div>
          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
            Just code {" "}
            <p className="font-bold hover:underline">
              projects
            </p>
          </p>
          <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        </div>
        {/* <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
        </main> */}
      </div>


    </div>
  );
}
