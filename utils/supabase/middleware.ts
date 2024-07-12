import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet: any) {
          cookiesToSet.forEach(({ name, value, options }: any) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }: any) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      } as any,
    }
  )

  const { data: user, error } = await supabase.auth.getUser()

  if (!user) {
    // no user, potentially respond by redirecting the user to the login page
    return NextResponse.redirect('/auth/login')
  }

  return supabaseResponse
}