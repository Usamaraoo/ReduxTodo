import Nav from './components/Nav'
import Home from './components/Home'
import Modal from './components/Modal'
import Alert from './components/Alert'
import { useSelector} from 'react-redux'
import { useEffect } from 'react'
// import { getTodoOnline } from './features/todo/todoSlice'

function App() {
    const { open } = useSelector((store) => store.modal)
    const { isLoading } = useSelector((store) => store.todo)
    // const dispatch = useDispatch()
    useEffect(() => {
        // dipatching extrareducer action which use thunk
        // dispatch(getTodoOnline('firstparam')) // not using param just example 
    }, [])

    return (
        <div className='min-h-screen bg-gray-900 text-gray-100  '>
            <Nav />
            {isLoading ? <p>Please wait.....</p>: <Home />}
            {open && <Modal />}
            <Alert />
        </div>
    )
}

export default App
