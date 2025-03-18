'use client';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import axios,{AxiosError} from 'axios';
import Link from 'next/link';

const SignupPage = () => {
//   const router = useRouter();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/signup`,
        formData
      );
      setStatus('success');
      setMessage(response.data.message || 'Welcome email has been sent. Please verify your email.');
    } catch (error) {
      const axiosError = error as AxiosError<{ error?: string }>;
      setStatus('error');
      setMessage(axiosError.response?.data?.error || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gblack">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-32">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h1>

        {status === 'success' ? (
          <div className="text-center">
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-green-600 mb-4">{message}</p>
            <p className="text-gray-600">
              Check your inbox for a verification email.{' '}
              {/* <span className="text-blue-500">Redirecting soon...</span> */}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-black mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-black mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-3 rounded text-white ${
                status === 'loading'
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-gray-800 hover:bg-gray-800'
              } transition`}
            >
              {status === 'loading' ? 'Signing Up...' : 'Sign Up'}
            </button>
            {status === 'error' && (
              <p className="text-red-600 mt-4 text-center">{message}</p>
            )}
          </form>
        )}

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;