import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const BASE_API_URL = 'http://localhost:3000';
const AUTH_ME_URL = 'https://dummyjson.com/auth/me';
const REFRESH_ENDPOINT = `${BASE_API_URL}/api/refresh`;

export async function POST(request: NextRequest) {
  const accessToken = (await cookies()).get('dj-access')?.value;
  const refreshTokenCookie = (await cookies()).get('dj-refresh')?.value;

  const url = request.nextUrl.clone();

  async function refreshToken(refreshToken: string): Promise<Response | false> {
    try {
      const response = await fetch(REFRESH_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }

      return response;
    } catch (error) {
      console.error('Error refreshing token:', error);

      return false;
    }
  }

  try {
    const meResponse = await fetch(AUTH_ME_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    });

    if (meResponse.ok) {
      url.pathname = '/admin';

      return NextResponse.rewrite(url, meResponse);
    } else {
      console.warn('auth/me failed, attempting token refresh...');
    }
  } catch (error) {
    console.error('auth/me error:', error);
  }

  if (refreshTokenCookie) {
    const refreshed = await refreshToken(refreshTokenCookie);

    if (refreshed) {
      return NextResponse.next();
    }
  }

  console.error('Authentication failed: unable to refresh token');

  return NextResponse.json({ success: false }, { status: 401 });
}
