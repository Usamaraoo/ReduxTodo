import { RiDeleteBack2Fill } from 'react-icons/ri'
import { AiTwotoneEdit } from 'react-icons/ai'
import { removeSingleTodo, editTodo } from '../features/todo/todoSlice'
import { showAlert, hideAlert } from '../features/alert/alertSlice'
import { openForDetail } from '../features/modal/modalSlice'

import { useDispatch } from 'react-redux'

export default function SingleItem({ text }) {
    const dispatch = useDispatch()
    const textLimit = 60
    const openDetailModal = () => {
        // Dispatching clicked item text to set current to show on detail
        // dispatch(setCurrentItem(text))
        // Open the modal
        dispatch(openForDetail(text))
    }
    const deleteItem = () => {
        dispatch(removeSingleTodo(text))
        dispatch(
            showAlert({ text: 'Item removed successfully', color: 'text-green-300' })
        )
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }
    return (
        <div className='border border-gray-500 flex items-center justify-between px-4 py-2 rounded-lg transition ease-in-out    hover:scale-105  duration-300 '>
            <h1
                className='text-lg cursor-pointer hover:text-blue-300'
                //
                onClick={openDetailModal}
            >
                {text.length > textLimit ? `${text.substring(0, textLimit)} ....` : text}
            </h1>
            <div className='flex gap-3'>
                <AiTwotoneEdit
                    className='cursor-pointer'
                    onClick={() => dispatch(editTodo(text))}
                />
                <RiDeleteBack2Fill className='cursor-pointer' onClick={deleteItem} />
            </div>
        </div>
    )
}
