export async function GET() {
  return new Response('This is the cancel endpoint', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}