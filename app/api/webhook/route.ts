import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { Stripe } from "stripe";

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);

// Stripe will give you a webhook secret when setting up webhooks.
// We'll get this later and add it to the .env.local file when testing
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: NextRequest) {
  const body = await req.text(); // Get raw data of body

  const sig = headers().get('stripe-signature') as string;
  console.log(body, 'request body')
  console.log(body, 'stripe signature')

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    console.log(event, '=== event')

    switch (event?.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        // Mock successful update
        console.log('Mock: user data updated successfully')
        return NextResponse.json({ message: 'Payment processed successfully' }, { status: 200 });
      default:
        // other events that we don't handle
        break;
    }
  } catch (err: any) {
    console.log(`⚠️ Webhook Error: ${err.message}`)
    return NextResponse.json({ message: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  return NextResponse.json({ message: 'Event processed' }, { status: 200 });
}