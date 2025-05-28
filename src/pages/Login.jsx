import Navbar from '../components/Navbar'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if (!email || !password) {
            alert('Please enter both email and password')
            setLoading(false)
            return
        }

        console.log('Email:', email)
        console.log('Password:', password)
        // TODO: Implement login logic
        // TODO: Redirect to home page

        setTimeout(() => {
            setLoading(false)
            window.location.href = '/'
        }, 1000);

    }

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
                    <p className="text-sm text-gray-500 mb-6 text-center">
                        Email: {email}
                        <br />
                        Password: {password}
                    </p>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {loading && <p className="text-sm text-gray-500 mb-6 text-center">Loading...</p>}
                        {!loading && (
                            <button
                                disabled={loading}
                                onClick={handleSubmit}
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Sign In
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login 