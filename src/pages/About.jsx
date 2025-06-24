import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

const services = [
    {
        name: 'Web Development',
        description: 'We build beautiful and functional websites for businesses and individuals.'
    },
    {
        name: 'Mobile Development',
        description: 'We build beautiful and functional mobile apps for businesses and individuals.'
    },
    {
        name: 'UI/UX Design',
        description: 'We design beautiful and functional user interfaces for businesses and individuals.'
    },
    {
        name: 'SEO',
        description: 'We optimize websites for search engines to improve their visibility and ranking.'
    },
    {
        name: 'Digital Marketing',
        description: 'We help businesses grow their online presence and reach their target audience.'
    },
    {
        name: 'Content Writing',
        description: 'We write high-quality content for businesses and individuals.'
    },
    {
        name: 'Social Media Management',
        description: 'We manage social media accounts for businesses and individuals.'
    }
]
const About = () => {

    const [search, setSearch] = useState('')
    const [filteredServices, setFilteredServices] = useState(services)
    useEffect(() => {
        console.log(search)
        const filteredServices = services.filter(service => service.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredServices(filteredServices)
    }, [search])
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

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredServices.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <form className="mt-12">
                    <input type="text" placeholder="Search services" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">Search</button>
                </form>
            </div>
        </div>
    )
}

export default About