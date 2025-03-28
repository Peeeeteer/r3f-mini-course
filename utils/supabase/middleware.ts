import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // Simply return next response without any Supabase interaction
  return NextResponse.next({
    request,
  });
}