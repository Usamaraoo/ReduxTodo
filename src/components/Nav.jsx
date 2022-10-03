import React from 'react'
import { FcTodoList } from 'react-icons/fc'
import { useSelector } from 'react-redux'

export default function Nav() {
    const { total } = useSelector((state) => state.todo)
    return (
        <div>
            <div className='items-center border-b border-gray-600 text-gray-400 rounded-b-lg  tracking-widest py-4 px-2 md:px-28 flex justify-between'>
                <div className='font-bold text-2xl'>Redux Todo</div>
                   {/* <FcTodoList className='text-2xl' /> */}

                <button
                    type='button'
                    className='inline-flex relative items-center p-3 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                   <FcTodoList className='text-2xl' />
                    <span className='sr-only'>Notifications</span>
                    <div className='inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-gray-500 rounded-full dark:border-gray-900'>
                        {total}
                    </div>
                </button>
            </div>
        </div>
    )
}
