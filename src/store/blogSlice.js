import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    loading: false,
    error: null
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id)
            if (index !== -1) {
                state.posts[index] = action.payload
            }
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { addPost, updatePost, deletePost, setLoading, setError } = blogSlice.actions

export default blogSlice.reducer 