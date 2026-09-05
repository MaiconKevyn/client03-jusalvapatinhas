import type { APIRoute } from 'astro'

export const GET: APIRoute = () =>
  Response.json(
    { status: 'ok', timestamp: new Date().toISOString() },
    { headers: { 'Cache-Control': 'no-store' } },
  )
