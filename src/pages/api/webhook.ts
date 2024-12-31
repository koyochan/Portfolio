import ToggleTheme from '~/components/common/ToggleTheme.astro';

export async function GET() {
  return new Response('This end point is webhook!!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}