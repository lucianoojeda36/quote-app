import AuthForm from '../../components/AuthForm';

export default function AuthPage() {
  const handleAuth = (userData: {
    access_token: string;
    user: { email: string };
  }) => {
    console.log(userData);
  };

  return (
    <div>
      <AuthForm onAuth={handleAuth} />
    </div>
  );
}
