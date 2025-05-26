import React from 'react'

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    OUT TUTORIAL APP
                </div>
                <div className="space-x-4">
                    <a href="/" className="text-white hover:text-gray-300">Home</a>
                    <a href="/about" className="text-white hover:text-gray-300">About</a>
                    <a href="/login" className="text-white hover:text-gray-300">Login</a>
                </div>
            </div>
        </nav>
    )
}