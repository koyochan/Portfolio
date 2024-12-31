export async function GET() {
  return new Response('This end point is create-checkout-session!!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}