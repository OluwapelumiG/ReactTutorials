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
        createPost: (state, action) => {
            state.posts.push(action.payload)
        },
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id)
            if (index !== -1) {
                state.posts[index] = action.payload
            }
        }
    }
})

export const { createPost, updatePost } = blogSlice.actions

export default blogSlice.reducer 