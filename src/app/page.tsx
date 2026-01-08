import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Sales Analytics Dashboard
        </h1>
        <p className="text-gray-600 mb-8">
          A modern dashboard built with Next.js 15, TypeScript, and atomic design principles.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
        </Link>
        
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Features:</h2>
          <ul className="text-left space-y-2 text-gray-600">
            <li>✅ Atomic Design Structure</li>
            <li>✅ Sales Charts for 2022-2024</li>
            <li>✅ Interactive Filters</li>
            <li>✅ Multiple Chart Types</li>
            <li>✅ TypeScript Support</li>
            <li>✅ Tailwind CSS Styling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}