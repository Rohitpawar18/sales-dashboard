import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-88px)] bg-gradient-to-b from-white via-blue-50/40 to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-28">
          {/* Hero Icon - Larger and more prominent */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-1h2v19h-2zm4 4h2v15h-2z" />
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Sales Analytics
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dashboard</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10 sm:mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed">
            Monitor your sales performance in real-time with interactive charts, smart filters, and actionable insights.
          </p>

          {/* CTA Button */}
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 text-base sm:text-lg group hover:shadow-xl"
          >
            <span>Launch Dashboard</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10 sm:mb-14 lg:mb-16">Why Choose Our Dashboard?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {/* Feature 1 */}
            <div className="group h-full">
              <div className="h-full p-6 sm:p-7 lg:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Feature Icon Container */}
                <div className="flex justify-center mb-5 sm:mb-6 lg:mb-7">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                    <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Multiple Chart Types</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 text-center">Visualize your data with Bar, Line, and Pie charts. Switch between formats instantly to find the best view for your analysis.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group h-full">
              <div className="h-full p-6 sm:p-7 lg:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Feature Icon Container */}
                <div className="flex justify-center mb-5 sm:mb-6 lg:mb-7">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                    <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1H3zm0 3h14v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Smart Filtering</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 text-center">Filter your sales data by custom thresholds. Focus on high-value transactions and identify trends that matter most.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group h-full">
              <div className="h-full p-6 sm:p-7 lg:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Feature Icon Container */}
                <div className="flex justify-center mb-5 sm:mb-6 lg:mb-7">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                    <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Multi-Year Insights</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1 text-center">Compare and analyze sales trends across 2022, 2023, and 2024. Track growth patterns and make informed decisions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-10 lg:p-16 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to Analyze Your Sales?</h3>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Get instant access to powerful analytics tools and start making better business decisions today.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 text-base sm:text-lg group hover:shadow-xl"
          >
            <span>View Dashboard</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}