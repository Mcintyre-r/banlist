'use client';

import { useEffect } from 'react';


export default function LootPage() {


  useEffect(() => {
    window.location.href = 'https://docs.google.com/spreadsheets/d/1HckA6lOvUALP2dhsJM0Jvq2ME9p8rrY_9wOHpZXQ-IY/edit?usp=sharing';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Redirecting to Loot Sheet...</h1>
        <p className="text-gray-600">If you are not redirected automatically, <a href="https://docs.google.com/spreadsheets/d/1HckA6lOvUALP2dhsJM0Jvq2ME9p8rrY_9wOHpZXQ-IY/edit?usp=sharing" className="text-blue-600 hover:underline">click here</a>.</p>
      </div>
    </div>
  );
} 