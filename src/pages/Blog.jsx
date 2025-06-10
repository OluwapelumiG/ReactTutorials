import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { addPost, updatePost, deletePost } from '../store/blogSlice'

const Blog = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.blog.posts)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingPost, setEditingPost] = useState(null)
    const [blogForm, setBlogForm] = useState({
        title: '',
        content: '',
        author: ''
    })

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
        if (!isModalOpen) {
            setBlogForm({
                title: '',
                content: '',
                author: ''
            })
            setEditingPost(null)
        }
    }

    const handleChange = (e) => {
        setBlogForm({ ...blogForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (editingPost) {
            dispatch(updatePost({ ...blogForm, id: editingPost.id }))
        } else {
            dispatch(addPost({ ...blogForm, id: Date.now() }))
        }
        toggleModal()
    }

    const handleEdit = (post) => {
        setEditingPost(post)
        setBlogForm({
            title: post.title,
            content: post.content,
            author: post.author
        })
        setIsModalOpen(true)
    }

    const handleDelete = (postId) => {
        dispatch(deletePost(postId))
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
                            {posts.map((post) => (
                                <tr key={post.id}>
                                    <td className="px-6 py-4 border-b">{post.title}</td>
                                    <td className="px-6 py-4 border-b">{post.content}</td>
                                    <td className="px-6 py-4 border-b">{post.author}</td>
                                    <td className="px-6 py-4 border-b">
                                        <button
                                            onClick={() => handleEdit(post)}
                                            className="text-blue-500 hover:text-blue-700 mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">{editingPost ? 'Edit Blog' : 'Add New Blog'}</h2>
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
                                        name="title"
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
                                        name="content"
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
                                        name="author"
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
                                    onClick={handleSubmit}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    {editingPost ? 'Update' : 'Save'}
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
