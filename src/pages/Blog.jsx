import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../store/blogSlice'

export default function Blog() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()
    const blogPosts = useSelector(state => state.blog.posts)
    const [currentBlogPost, setCurrentBlogPost] = useState({
        title: '',
        description: '',
        author: ''
    })

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
        if (!isModalOpen) {
            setIsEditing(false)
            setCurrentBlogPost({ title: '', description: '', author: '' })
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCurrentBlogPost(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEditing) {
            dispatch(updatePost(currentBlogPost))
        } else {
            dispatch(createPost(currentBlogPost))
        }
        setCurrentBlogPost({ title: '', description: '', author: '' })
        setIsModalOpen(false)
        setIsEditing(false)
    }

    const handleEdit = (postItem) => {
        setCurrentBlogPost(postItem)
        setIsEditing(true)
        toggleModal()
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Navbar />
            <div className="flex flex-row justify-between py-4">
                <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
                <button
                    className="bg-blue-500 text-white px-4 py-1 rounded-md"
                    onClick={toggleModal}
                >
                    Add Post
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 border-b text-left">ID</th>
                            <th className="px-6 py-3 border-b text-left">Title</th>
                            <th className="px-6 py-3 border-b text-left">Description</th>
                            <th className="px-6 py-3 border-b text-left">Author</th>
                            <th className="px-6 py-3 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogPosts.map((postItem, id) => (
                            <tr key={id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 border-b">{id + 1}</td>
                                <td className="px-6 py-4 border-b">{postItem.title}</td>
                                <td className="px-6 py-4 border-b">{postItem.description}</td>
                                <td className="px-6 py-4 border-b">{postItem.author}</td>
                                <td className='px-6 py-4 border-b'>
                                    <button onClick={() => handleEdit(postItem)} className='bg-blue-500 text-white px-4 py-1 rounded-md mr-2'>Edit</button>
                                    <button className='bg-red-500 text-white px-4 py-1 rounded-md'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Post' : 'Add New Post'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={currentBlogPost.title}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={currentBlogPost.description}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Author</label>
                                <input
                                    type="text"
                                    name="author"
                                    value={currentBlogPost.author}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    {isEditing ? 'Update Post' : 'Add Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}