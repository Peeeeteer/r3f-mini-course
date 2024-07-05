"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signOut() {
    console.log("signing out");

  const supabase = createClient();
  const { error } = await supabase.auth.signOut({});
  if (!error) {
    redirect("/");
  }

}
