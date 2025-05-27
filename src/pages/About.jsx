import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Our Company</h1>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-600 mb-6">
                        Welcome to Our Tutorial App, where we're passionate about making learning accessible to everyone.
                        Founded in 2024, we've been dedicated to creating high-quality educational content that helps
                        people achieve their learning goals.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        Our mission is to provide comprehensive, easy-to-follow tutorials that empower learners to
                        master new skills and advance their careers. We believe in the power of education to transform
                        lives and create opportunities.
                    </p>
                    <p className="text-lg text-gray-600">
                        Join our growing community of learners and start your journey towards success today.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About