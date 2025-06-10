import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented, doubled, half } from '../store/counter'

const Landing = () => {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

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
                <button className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors' onClick={() => dispatch(incremented())}>Increase</button>
                <button className='bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors' onClick={() => dispatch(decremented())}>Decrease</button>
                <button className='bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors' onClick={() => dispatch(doubled())}>Double</button>
                <button className='bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors' onClick={() => dispatch(half())}>Half</button>
                <p>Counter: {counter}</p>
            </div>
        </div>
    )
}

export default Landing