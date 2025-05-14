import { NextResponse } from 'next/server';

export async function POST() {
  const response = new NextResponse(JSON.stringify({ success: true }), {
    status: 200,
  });

  response.cookies.delete('dj-access');
  response.cookies.delete('dj-refresh');

  return response;
}
