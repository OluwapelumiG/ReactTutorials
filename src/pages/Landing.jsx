import Navbar from '../components/Navbar'

const Landing = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Tutorial App</h1>
                        <p className="text-xl text-gray-600 mb-8">Learn and grow with our comprehensive tutorials</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing 