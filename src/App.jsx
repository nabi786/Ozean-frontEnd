

// importing Pages
import Signup from './pages/Signup'
import Login from './pages/login'
import ResetPass from './pages/resetPass'
import HomePage from './pages/index'
import {Routes, Route} from 'react-router-dom'


function App() {
    return (
        
            <Routes>
                <Route  path='/signup' element={<Signup/>}/>
                <Route  path='/login' element={<Login/>} />
                <Route path='/reset-password' element={<ResetPass/>} />
                <Route index path='/' element={<HomePage/>} />
            </Routes>
        
    )
}



export default App