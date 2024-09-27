import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from '../store/slices/counterSlice';
import { RootState } from '../store/store';

export default function Contador() {
    const { counter } = useSelector((state: RootState) => state.counter);

    const dispatch = useDispatch()
    return (
        <div className="flex flex-col items-center justify-center">
            {/* min-h-screen bg-gray-100 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Counter</h1>
                <div className="flex items-center space-x-4">
                    <button
                        className='bg-gray-500 rounded-lg text-white p-2'
                        onClick={() => { dispatch(decrement()) }}
                    >
                        -
                    </button>
                    <span className="text-4xl font-bold w-20 text-center" aria-live="polite">
                        {
                            counter
                        }
                    </span>
                    <button
                        className='bg-gray-500 rounded-lg text-white p-2'
                        onClick={() => { dispatch(increment()) }}
                    >
                        +
                    </button>
                    <button
                        className='bg-purple-600 rounded-lg text-white p-2'
                        onClick={() => { dispatch(incrementBy(2)) }}
                    >
                        +2
                    </button>
                </div>
            </div>
        </div>
    )
}
