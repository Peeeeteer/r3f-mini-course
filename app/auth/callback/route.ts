import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);
  // Simply redirect to home page
  return NextResponse.redirect(`${origin}/`);
}
