import Nav from './components/Nav'
import Home from './components/Home'
import Modal from './components/Modal'
import Alert from './components/Alert'
import { useSelector } from 'react-redux'


function App() {
    const {open } = useSelector((store) => store.modal)
    return (
        <div className='min-h-screen bg-gray-900 text-gray-100  '>
            <Nav />
            <Home/>
            {open && <Modal/>}
            <Alert/>

        </div>
    )
}

export default App
