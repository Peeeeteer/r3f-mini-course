import { NextRequest, NextResponse } from 'next/server';

// Mock implementation with no dependencies on real Stripe
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log('Mock payment checkout created');
    
    // Return a mock session
    return NextResponse.json({ 
      result: { 
        id: 'mock-checkout-session-id',
        url: '/payment/success'
      }, 
      ok: true 
    });
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Server', { status: 500 });
  }
}
