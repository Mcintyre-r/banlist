import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">FFXIV Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link 
          href="/figma" 
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Figma</h2>
          <p className="text-gray-600">Ban List Prototype</p>
        </Link>
        
        <Link 
          href="/mit" 
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
        >
          <h2 className="text-2xl font-semibold mb-2 text-green-600">Mitigation</h2>
          <p className="text-gray-600">Timeline & Mitigation Planner</p>
        </Link>
        
        <Link 
          href="/loot" 
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
        >
          <h2 className="text-2xl font-semibold mb-2 text-purple-600">Loot</h2>
          <p className="text-gray-600">Loot Distribution Sheet</p>
        </Link>
      </div>
    </main>
  );
}
