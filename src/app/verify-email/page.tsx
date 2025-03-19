'use client';

import { Suspense } from 'react'; // Import Suspense
import VerifyEmailContent from './VerifyEmailContent'; // Child component

// Force dynamic rendering to avoid prerendering errors
export const dynamic = 'force-dynamic';

const VerifyEmailPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Email Verification</h1>
        <Suspense fallback={<p className="text-gray-600">Loading...</p>}>
          <VerifyEmailContent />
        </Suspense>
      </div>
    </div>
  );
};

export default VerifyEmailPage;