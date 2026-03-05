'use client';

import { useEffect } from 'react';


export default function MitPage() {


  useEffect(() => {
    window.location.href = 'https://docs.google.com/spreadsheets/d/1FmG8NL2DybieW9FuZrPF7w6iABFtGVEzwwoFPCjslZc/htmlview?gid=161526414&pru=AAABm_2EK_E*ZJjdxnP6OrMGY7fZM7ufwA#gid=1324709415';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Redirecting to Mitigation Sheet...</h1>
        <p className="text-gray-600">If you are not redirected automatically, <a href="https://docs.google.com/spreadsheets/d/1FmG8NL2DybieW9FuZrPF7w6iABFtGVEzwwoFPCjslZc/htmlview?gid=161526414&pru=AAABm_2EK_E*ZJjdxnP6OrMGY7fZM7ufwA#gid=1324709415" className="text-blue-600 hover:underline">click here</a>.</p>
      </div>
    </div>
  );
} 
