'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IRequest {
  email: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loginAuth = async ({ email, password }: IRequest) => {
    setErrorMessage(null);

    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          setErrorMessage('Usuario no encontrado. Redirigiendo al registro...');
          setTimeout(() => router.push('/register'), 2000);
        } else {
          setErrorMessage(data.message || 'Error durante el login');
        }
      } else {
        localStorage.setItem('token', data.token);
        router.push('/');
      }
    } catch (error) {
      setErrorMessage('Error en la conexión. Inténtalo nuevamente.');
      console.error('Error en el login:', error);
    }
  };

  return { loginAuth, errorMessage };
};
