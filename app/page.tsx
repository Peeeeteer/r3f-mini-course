import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Footer from "@/components/Footer";

export default async function Index() {

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
          <AuthButton />
        </div>
      </nav>

      <div className="flex flex-col gap-16 items-center">

        <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
          Just code {" "}
        </p>

      </div>

    </div>
  );
}
