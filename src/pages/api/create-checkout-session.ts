import stripe from 'stripe'; // 必要に応じて初期化を修正
import dotenv from 'dotenv';

dotenv.config();

const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST({ request }: { request: Request }) {
  try {
    // リクエストのボディを取得
    const { quantity, userId } = await request.json();

    console.log('Environment Variables:', process.env.STRIPE_SECRET_KEY, process.env.STRIPE_ENDPOINT_SECRET);
    console.log('Received quantity:', quantity);
    console.log('Received userId:', userId);

    const lineItems = [
      {
        price: 'price_1QbyT5B9Kt3qFW4Su67dTnCK', // Stripe 価格ID
        quantity: quantity,
      },
    ];

    // Stripeセッションを作成
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: 'http://localhost:4242/api/success',
      cancel_url: 'http://localhost:4242/api/cancel',
      metadata: {
        userId,
        quantity,
      },
    });

    console.log('Created session:', session.id);

    // セッションIDを返却
    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}