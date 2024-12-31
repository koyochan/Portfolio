export async function GET() {
  return new Response('This end point is cancel!!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}