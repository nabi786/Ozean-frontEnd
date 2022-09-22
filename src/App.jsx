

// importing Pages
import Signup from './pages/Signup'
import Login from './pages/login'
import {Routes, Route} from 'react-router-dom'


function App() {
    return (
        
            <Routes>
                <Route  path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        
    )
}



export default App