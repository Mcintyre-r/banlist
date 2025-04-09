'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FigmaPage() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = 'https://www.figma.com/proto/eLRXml1PUYJij96MjY0134/Ban-List?show-proto-sidebar=1';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Redirecting to Figma...</h1>
        <p className="text-gray-600">If you are not redirected automatically, <a href="https://www.figma.com/proto/eLRXml1PUYJij96MjY0134/Ban-List?show-proto-sidebar=1" className="text-blue-600 hover:underline">click here</a>.</p>
      </div>
    </div>
  );
} 