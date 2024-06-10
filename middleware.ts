import { updateSession } from "@/utils/supabase/middleware";
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  let session = await supabase.auth.getSession()
  if (req.nextUrl.pathname.startsWith('/auth')) {
    // This logic is only applied to /about
    if(session.data.session?.user){

      return NextResponse.redirect(new URL('/', req.url))
    }
  }
  if (req.nextUrl.pathname.startsWith('/checkout')) {
    // This logic is only applied to /about
    if(!session.data.session?.user){
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
