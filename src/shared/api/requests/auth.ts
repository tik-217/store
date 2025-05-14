'use server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function auth() {
  const accessToken = (await cookies()).get('dj-access')?.value;
  if (!accessToken) return null;

  try {
    const res = await fetch('https://dummyjson.com/auth/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: 'no-store',
    });

    if (!res.ok) {
      await axios({
        method: 'POST',
        url: `http://localhost:3000/api/logout`,
      });

      return null;
    }

    return res.json();
  } catch (err) {
    console.log(err);
    console.log('Auth error');
  }
}
