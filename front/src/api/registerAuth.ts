'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useRegister = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const registerAuth = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || 'Error durante el registro');
        return false;
      }

      localStorage.setItem('token', data.token);

      router.push('/');

      return true;
    } catch {
      setErrorMessage('Error en la conexión');
      return false;
    }
  };

  return { registerAuth, errorMessage };
};
