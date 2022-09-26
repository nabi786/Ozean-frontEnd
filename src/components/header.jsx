


import { Box, Typography, } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


// importing Images

import Activity from '../assets/imgs/Activity.png'
import Notification from '../assets/imgs/Notification.png'
import profile from '../assets/imgs/profile.png'


import MyContext from './ContextAPI'
import { useContext } from 'react';

// main header

function Header(prop) {

    var contextValue = useContext(MyContext)


    return (
        <>
            <Box className="header" sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: '25px 20px'
            }}>

                <Typography sx={{
                    color: "white",
                    display: "flex"
                }} className="headerTitle">


                    Sell extraordinary NFTs
                    <Box sx={{ cursor: 'pointer', marginLeft: "10px" }} className="responsieMenuBtn">


                        {/* Menu Button */}
                        <MenuIcon onClick={contextValue.openAndCloseSideBar} />

                    </Box>


                </Typography>

                <Box className='headerSearchAndIcons'>

                    {/* serach Box */}
                    <Box sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between"
                    }}
                        className="headerSearchAndIconInnerBox">

                        <Box className="headerSearch">
                            <input type="search" placeholder='search...' />
                            <SearchIcon sx={{
                                position: "absolute",
                                right: "0%",
                                top: "50%",
                                zIndex: '1',
                                color: "white",
                                transform: "translate(-50%,-50%)",
                                cursor: "pointer"
                            }} />
                        </Box>


                        <Box sx={{
                            display: "flex",

                        }}>

                            <Box sx={{
                                display: 'flex',
                                marginLeft: "20px",
                                marginRight: "20px"
                            }} className='headerIconBox'>
                                <Box className='headerIcon'
                                    sx={{ marginRight: "10px" }}>
                                    <img src={Activity} alt="icon" />
                                </Box>
                                <Box className='headerIcon'>
                                    <img src={Notification} alt="icon" />
                                </Box>

                            </Box>


                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    color: "#F63983"
                                }} className='headerIconBox'>

                                <ArrowDropDownIcon />

                                <Box sx={{
                                    width: "50px",
                                    height: '50px',
                                    borderRadius: '50px',
                                    cursor: "pointer"
                                }} className="headerProfileBox">
                                    <img src={profile} style={{ width: '100%' }} alt="icon" />
                                </Box>

                                {/* RightSideBar  */}
                                <Box className='responsieMenuBtn'>
                                    <Box onClick={contextValue.openAndCloseRightBar} sx={{ marginLeft: "20px", cursor: "pointer", width: "50px", height: "50px", display: 'flex', justifyContent: "center", alignItems: "center", color: "white", borderRadius: "50px", backgroundColor : "#202425"}} className="rightSideBarMenuBtn">

                                        <KeyboardArrowLeftIcon />
                                    </Box>
                                </Box>
                            </Box>




                        </Box>

                    </Box>
                </Box>

            </Box>
        </>
    )
}



export default Header