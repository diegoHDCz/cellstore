
export function teste(req: Request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}