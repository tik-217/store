import { NextResponse } from 'next/server';
import { LoginResponse } from '@/features/AdminForm';
import { axiosInstance } from '@/shared/api';

export async function POST(request: Request) {
  const userFormData = await request.json();

  return axiosInstance<LoginResponse>({
    method: 'POST',
    url: '/auth/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: userFormData,
  })
    .then(({ data }) => {
      const response = NextResponse.json({ success: true, data: data });

      response.cookies.set('dj-access', data.accessToken, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 10,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });
      response.cookies.set('dj-refresh', data.refreshToken, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      return response;
    })
    .catch((err) => NextResponse.json({ error: err }, { status: 401 }));
}
