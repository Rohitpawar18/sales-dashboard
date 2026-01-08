import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-88px)] bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl mb-8 shadow-xl">
            <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-1h2v19h-2zm4 4h2v15h-2z" />
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Sales Analytics
            <span className="block text-blue-600">Dashboard</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Monitor your sales performance in real-time with interactive charts, smart filters, and actionable insights.
          </p>

          {/* CTA Button */}
          <Link
            href="/dashboard"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg text-lg group"
          >
            <span>Launch Dashboard</span>
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Our Dashboard?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group">
              <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-11 h-11 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Chart Types</h3>
                <p className="text-gray-600 leading-relaxed">Visualize your data with Bar, Line, and Pie charts. Switch between formats instantly to find the best view for your analysis.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-11 h-11 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1H3zm0 3h14v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Filtering</h3>
                <p className="text-gray-600 leading-relaxed">Filter your sales data by custom thresholds. Focus on high-value transactions and identify trends that matter most.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-11 h-11 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Year Insights</h3>
                <p className="text-gray-600 leading-relaxed">Compare and analyze sales trends across 2022, 2023, and 2024. Track growth patterns and make informed decisions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 text-white text-center shadow-xl">
          <h3 className="text-4xl font-bold mb-8">Ready to Analyze Your Sales?</h3>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get instant access to powerful analytics tools and start making better business decisions today.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg text-lg group"
          >
            <span>View Dashboard</span>
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}