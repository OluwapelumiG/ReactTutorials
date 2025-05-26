import React from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
    return (
        <div>
            <Navbar />

            <div className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                            Welcome to Our Platform
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Your one-stop solution for all your needs. Get started today and experience the difference.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing 