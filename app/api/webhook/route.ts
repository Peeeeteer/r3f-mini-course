import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { Stripe } from "stripe";

// Mock Stripe implementation
const stripe = {
  webhooks: {
    constructEvent: () => ({
      type: "payment_intent.succeeded",
      data: {
        object: {
          amount: 499,
          metadata: {}
        }
      }
    })
  }
};

export async function POST(req: NextRequest) {
  // Simply return a success response - no actual processing
  console.log('Mock payment webhook received');
  return NextResponse.json({ message: 'Payment processed successfully' }, { status: 200 });
}