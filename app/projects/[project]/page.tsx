"use client";
import { redirect, usePathname } from "next/navigation";

export default function Page() {
  const params = usePathname();
  redirect(`${params}/introduction`);
}
