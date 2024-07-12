import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const productPrices = {
  'robot-landing': 'price_1PP4DJGLPOPU9PEJ67Zo2mpJ', // replace with your actual price ID
  'chrome-extension': 'price_1PP4DJGLPOPU9PEJ67Zo2mpJ', // replace with your actual price ID
};

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
  try {

    // you can implement some basic check here like, is user valid or not
    const data = await request.json();
    const { priceId, projectId } = data;
    console.log(priceId, projectId, '=========== data from request')

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1
          }
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_HOST}/payment/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_HOST}/payment/cancel`,
        payment_intent_data: {
          metadata: {
            projectId
          }
        }
      });
    return NextResponse.json({ result: checkoutSession, ok: true });
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Server', { status: 500 });
  }
}
