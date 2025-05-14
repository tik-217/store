import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const refreshJson = (await cookies()).get('dj-refresh')?.value;

  if (!refreshJson) {
    return NextResponse.json(
      { success: false, message: 'Missing refresh token' },
      { status: 400 },
    );
  }

  try {
    const reqNewTokens = await fetch('https://dummyjson.com/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: refreshJson, expiresInMins: 10 }),
      credentials: 'include',
    });

    if (!reqNewTokens.ok) {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    const newTokensJson = await reqNewTokens.json();
    const data = (await newTokensJson) as {
      accessToken: string;
      refreshToken: string;
    };
    // console.log('data', data); // tokens
    const { accessToken, refreshToken } = newTokensJson;

    if (!data) {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    try {
      const response = new NextResponse(
        JSON.stringify({ success: true, data: { accessToken } }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
          },
        },
      );
      response.cookies.set('dj-access', accessToken, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 10,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      response.cookies.set('dj-refresh', refreshToken, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      return response;
    } catch {
      console.log('Cookie set error');
      return NextResponse.json({ success: false }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
