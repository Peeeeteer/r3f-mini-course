import { NextResponse } from "next/server";
import { Stripe } from "stripe";

import { createClient } from "@/utils/supabase/server";

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);

// Stripe will give you a webhook secret when setting up webhooks.
// We'll get this later and add it to the .env.local file when testing
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: Request) {
  const payload = await req.text(); // Get raw data of body
  const signature = req.headers.get("stripe-signature");

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature!, webhookSecret);

    switch (event?.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const userId = paymentIntent.metadata?.userId
        const projectId = paymentIntent.metadata?.projectId

        if (userId && projectId) {
          const supabase = createClient()
          const { error } = await supabase.rpc('update_user_projects', {
            u_id: userId,
            p_id: projectId
          })

          if (error) return NextResponse.json({ message: error.message }, { status: 400 });
          console.log('user data updated successfully')

          return NextResponse.json({ message: 'it works' }, { status: 200 });
        }

        
        return NextResponse.json({ message: `it works but can't update user info` }, { status: 500 });
      default:
        // other events that we don't handle
        break;
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json({ message: err.message }, { status: 400 });
    }
  }

  return NextResponse.json({ received: true });
}