
import React, { useState } from 'react'
// importing Pages
import Signup from './pages/Signup'
import Login from './pages/login'
import ResetPass from './pages/resetPass'
import HomePage from './pages/index'
import HomePage2 from './pages/HomePage2'
import { Routes, Route } from 'react-router-dom'

import MyContext from './components/ContextAPI';



function App() {

    // state to open and close Left sideBar
        const [isOpen,setOpen] = useState(false);

        // state to pen and close RightSideBar
        const [isOpneRightSideBar, setOpenRightSideBar] = useState(false)

        const sidebarContextState = {
            // propertise to opne and close left sideBar
            isOpen: isOpen,
            newSetOpen : mewValue => setOpen(mewValue),
            openAndCloseSideBar : ()=>{
                setOpen(true)                
            },
            // propertise to close and opne Right SideBar
            isOpneRightSideBar : isOpneRightSideBar,
            closeRightSideBar : mewValue => setOpenRightSideBar(mewValue),
            openAndCloseRightBar  : ()=>{
                setOpenRightSideBar(true)
            }
        }
        

    return (
       
        <MyContext.Provider value={sidebarContextState}>

            <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/reset-password' element={<ResetPass />} />
                <Route index path='/' element={<HomePage />} />
                <Route path='/home2' element={<HomePage2 />} />
            </Routes>

        </MyContext.Provider>

    

    )



}



export default App