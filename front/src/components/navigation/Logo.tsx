import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href="/"
      className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
    >
      Quote App
    </Link>
  );
};
