export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Anonymous Job Board Feedback
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A secure platform for job board owners to anonymously share and view feedback 
            on other job boards, traffic buyers, payment reliability, and business practices.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
              Sign Up as Job Board Owner
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-200">
              Browse Feedback
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Anonymous & Secure</h3>
            <p className="text-gray-600">Your identity remains protected while providing valuable feedback to the community.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Users Only</h3>
            <p className="text-gray-600">Only verified job board owners can submit feedback, ensuring quality and authenticity.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Ratings</h3>
            <p className="text-gray-600">Rate payment reliability, terms fairness, complaint handling, and overall trust.</p>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h4 className="font-semibold mb-2">Apply for Verification</h4>
              <p className="text-sm text-gray-600">Submit your job board documentation for admin review</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="font-semibold mb-2">Get Anonymous ID</h4>
              <p className="text-sm text-gray-600">Receive your unique anonymous identifier upon approval</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="font-semibold mb-2">Submit Feedback</h4>
              <p className="text-sm text-gray-600">Rate and review other job boards and traffic buyers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="font-semibold mb-2">Browse & Learn</h4>
              <p className="text-sm text-gray-600">Access comprehensive feedback from the community</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}