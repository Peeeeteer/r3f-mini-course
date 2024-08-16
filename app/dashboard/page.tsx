"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import DashboardContent from "./content";

export default async function DashboardPage() {
  const supabase = createClient();
  const { error, } = await supabase.auth.getUser();
  if (error) {
    return redirect("/projects");
  }

  return (
    <DashboardContent />
  );
}
