import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'
import { showAlert, hideAlert } from '../features/alert/alertSlice'
import { useSelector } from 'react-redux'

export default function TodoForm() {
    const { update, currentItem, todoItems } = useSelector((store) => store.todo)

    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('')
    const todoLimit = 300
    const formTodo = () => {
        console.log()

        // checking input length
        if (inputText.length >= 10 && inputText.length <= todoLimit) {
            //    checking it the input item is unique or not
            if (todoItems.filter((i) => i.text === inputText).length > 0) {
                dispatch(
                    showAlert({
                        text: 'This item already exists',
                        color: 'text-red-300',
                    })
                )
            } else {
                // it state is update run the update function otherwise add
                if (update) {
                    dispatch(updateTodo(inputText))
                    dispatch(
                        showAlert({
                            text: 'Todo Updated successfully',
                            color: 'text-green-300',
                        })
                    )
                } else {
                    dispatch(addTodo(inputText))
                    dispatch(
                        showAlert({
                            text: 'Todo added successfully',
                            color: 'text-green-300',
                        })
                    )
                }
                setInputText('')
            }
        } else {
            dispatch(
                showAlert({
                    text: `Todo should not be less than 10 or more ${todoLimit} words`,
                    color: 'text-red-300',
                })
            )
        }
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }

    useEffect(() => {
        setInputText(currentItem)
    }, [update, currentItem])
    return (
        <div className='  rounded-sm p-3  flex-grow w-12/12 md:w-10/12 lg:w-5/12'>
            {/* Add todo form */}
            <div className='flex flex-col justify-center items-end gap-3   '>
                <textarea
                    rows={5}
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                    type='text'
                    placeholder='Type...'
                    className='min-w-full bg-transparent border-gray-600 border rounded-lg px-3 py-2 tracking-widest'
                />
                <button
                    className='bg-gray-800 px-5 py-2 rounded-lg tracking-widest font-bold text-sm w-24 text-green-300'
                    type='submit'
                    onClick={formTodo}
                >
                    {update ? 'Update' : 'ADD'}
                </button>
            </div>
        </div>
    )
}
