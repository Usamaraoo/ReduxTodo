import SingleItem from './SingleItem'
import TodoForm from './TodoForm'
import { BiSad } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { changeModalState } from '../features/modal/modalSlice'
import { useEffect } from 'react'

export default function Home() {
    const dispatch = useDispatch()
    const { todoItems, total } = useSelector((store) => store.todo)
    useEffect(() => {
      
      if(window.localStorage.getItem('todos') === null)  window.localStorage.setItem('todos',JSON.stringify([]))
    }, [])
    
    return (
        <div className="w-5/6 mx-auto mt-5 ">
            {total > 1 && <div className='text-end mb-5 text-red-400'>
                <button className='px-8 py-1 bg-gray-800 rounded-lg' onClick={()=> dispatch(changeModalState())} >Clear all</button>
            </div>}
            <div className='flex justify-center flex-col sm:flex-row    '>
                <TodoForm />
                <div className='w-full-screen md:w-3/4 lg:w-2/4 px-2 '>
                    {total > 0 ? (
                        <div className='flex flex-col gap-3 sm:mt-4'>
                            {todoItems.map((item, i) => {
                                return <SingleItem {...item} key={i} />
                            })}
                        </div>
                    ) : (
                        <div className='tracking-widest text-4xl flex gap-2 items-center font-bold'>
                            <p> Empty </p>
                            <BiSad className='text-1   xl' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
