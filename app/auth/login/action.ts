"use server";
import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";
const getURL = () => {
  let url =
    process.env.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";

  // Make sure to include https:// when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing /.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};
export async function login() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${getURL()}/auth/callback`,
    },
  });
  console.log(`${getURL()}auth/callback`);
  console.log(data);
  console.log(error);
  if (error) {
    redirect('/error')
  }
  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
  //   if (error) {
  //     redirect("/error");
  //   }

  //   revalidatePath("/", "layout");
  //   redirect("/");
}
