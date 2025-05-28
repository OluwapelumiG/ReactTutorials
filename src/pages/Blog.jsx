import { useState } from 'react'
import Navbar from '../components/Navbar'

const Blog = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [blogForm, setBlogForm] = useState({
        title: '',
        content: '',
        author: ''
    })

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleChange = (e) => {
        setBlogForm({ ...blogForm, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Blog Posts</h1>
                    <button
                        onClick={toggleModal}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add New Blog
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 border-b text-left">Title</th>
                                <th className="px-6 py-3 border-b text-left">Content</th>
                                <th className="px-6 py-3 border-b text-left">Author</th>
                                <th className="px-6 py-3 border-b text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 border-b">
                                    Book of React
                                </td>
                                <td className="px-6 py-4 border-b">
                                    Content
                                </td>
                                <td className="px-6 py-4 border-b">
                                    Author
                                </td>
                                <td className="px-6 py-4 border-b">
                                    <button
                                        className="text-blue-500 hover:text-blue-700 mr-2"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Edit Blog</h2>
                                <button
                                    onClick={toggleModal}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        value={blogForm.title}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Enter title"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                                    <textarea
                                        value={blogForm.content}
                                        onChange={handleChange}
                                        placeholder="Enter content"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows="4"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                                    <input
                                        value={blogForm.author}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Enter author name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end space-x-3">
                                <button
                                    onClick={toggleModal}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Blog
