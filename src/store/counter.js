import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
        doubled: state => {
            state.value *= 2
        },
        half: state => {
            state.value /= 2
        }
    }
})

export const { incremented, decremented, doubled, half } = counterSlice.actions

export default counterSlice.reducer