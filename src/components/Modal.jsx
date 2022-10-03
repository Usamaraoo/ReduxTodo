import { useDispatch } from 'react-redux'
import { changeModalState, closeForDetail } from '../features/modal/modalSlice'
import { clearTodo, removeSingleTodo } from '../features/todo/todoSlice'
import { showAlert, hideAlert } from '../features/alert/alertSlice'
import { useSelector } from 'react-redux'

export default function Modal() {
    const dispatch = useDispatch()
    const { todoDetail,text } = useSelector((store) => store.modal)
    return (
        // modal bg
        <div className=''>
            <div
                className=' bg-black bg-opacity-50 fixed bottom-0  top-0 left-0 right-0  z-0 '
                onClick={() =>{ dispatch(changeModalState())
                dispatch(closeForDetail())
                }}
            ></div>
            {/* actual modal */}
            {/* Conditionally showing if its delete all modal or item detail modal */}
            {todoDetail ? (
                // Detail modal
                <div className='bg-black fixed  left-1/2 transform -translate-x-1/2 top-40  w-3/4 lg:w-4/6 px-10 py-5 text-start rounded-lg tracking-widest z-10 '>
                    <p>{text}</p>

                    <div className='text-center'>
                        <button
                            className=' text-red-400 bg-gray-900 px-3 py-1 rounded-lg mt-5'
                            onClick={() => {
                                dispatch(removeSingleTodo(text))
                                dispatch(changeModalState())
                                dispatch(closeForDetail())
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ) : (
                // delete all modal
                <div className='bg-black absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-4 px-3 w-3/4 md:w-2/4 lg:w-2/6 text-center rounded-lg tracking-widest z-10'>
                    <h1>Are you sure you want to delete all items</h1>
                    <div className='flex justify-center gap-6 mt-5'>
                        <button
                            className=' text-red-400 bg-gray-900 px-3 py-1 rounded-lg'
                            onClick={() => {
                                dispatch(clearTodo())
                                dispatch(changeModalState())
                                dispatch(
                                    showAlert({
                                        text: 'All todo items deleted',
                                        color: 'text-green-300',
                                    })
                                )
                                setTimeout(() => {
                                    dispatch(hideAlert())
                                }, 2000)
                            }}
                        >
                            Yes
                        </button>
                        <button
                            className='bg-gray-900 px-3 py-1 rounded-lg'
                            onClick={() => dispatch(changeModalState())}
                        >
                            No
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
