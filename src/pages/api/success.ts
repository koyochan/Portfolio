export async function GET() {
  return new Response('This end point is success!!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}