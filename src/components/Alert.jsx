import { useSelector } from 'react-redux'

export default function Alert() {
    const { show, alertText ,color} = useSelector((store) => store.alert)
    return (
        <div className={`fixed  left-1/2 transform -translate-x-1/2 top-20  px-5 md:px-20 py-3 z-20   transition-all scale-0  duration-1000 ${show && 'scale-100'} rounded-lg bg-gray-700 font-bold ${color} `}>
            {alertText}
        </div>
    )
}
