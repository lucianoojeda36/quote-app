'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import * as dotenv from 'dotenv';
import { LoginForm } from '@/components/auth/LoginForm';
import QuotesPage from '@/pages/QuotePage';

dotenv.config();

export default function HomePage() {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const [queryClient] = useState(() => new QueryClient());

  if (!token) {
    return <LoginForm />;
  }

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        <QuotesPage />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
