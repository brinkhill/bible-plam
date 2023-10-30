import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  const sara = await kv.hgetall('user:sara');
  const brink = await kv.hgetall('user:brink');
  return NextResponse.json({ sara, brink });
}