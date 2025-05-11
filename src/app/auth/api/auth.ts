import { cookies } from 'next/headers';

export async function auth() {
  const accessToken = (await cookies()).get('dj-access')?.value;
  if (!accessToken) return null;

  const res = await fetch('https://dummyjson.com/auth/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: 'no-store',
  });

  if (!res.ok) return null;

  return res.json();
}
