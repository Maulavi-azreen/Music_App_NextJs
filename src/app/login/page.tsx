'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios , { AxiosError } from 'axios';
import Link from 'next/link';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
        formData
      );
      console.log("Response of API",response)
      // Assuming the API returns a token or success message
      setStatus('idle');
      router.push('/dashboard'); // Redirect to dashboard or home page
    } catch (error) {
      // Type error as AxiosError with a response shape
      const axiosError = error as AxiosError<{ error?: string }>;
      setStatus('error');
      setMessage(axiosError.response?.data?.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-20">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Log In</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
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
            <label htmlFor="password" className="block text-gray-700 mb-2">
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
            {status === 'loading' ? 'Logging In...' : 'Log In'}
          </button>
          {status === 'error' && (
            <p className="text-red-600 mt-4 text-center">{message}</p>
          )}
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;