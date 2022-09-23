

import { Box, Typography,   } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';



// importing Images

import Activity from '../assets/imgs/Activity.png'
import Notification from '../assets/imgs/Notification.png'
import profile from '../assets/imgs/profile.png'



// main header

function Header() {
    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor : ""
            }}>

                <Typography sx={{
                    color: "white"

                }} className="headerTitle">


                    Sell extraordinary NFTs


                </Typography>

                <Box>

                    {/* serach Box */}
                    <Box sx={{
                        display: "flex",
                    }}>

                        <Box className="headerSearch">
                            <input type="search" placeholder='search...' />
                            <SearchIcon sx={{
                                position: "absolute",
                                right: "0%",
                                top: "50%",
                                zIndex: '1',
                                color : "white",
                                transform : "translate(-50%,-50%)",
                                cursor  : "pointer"
                            }} />
                        </Box>


                        <Box sx={{
                            display: "flex",

                        }}>

                            <Box sx={{
                                display: 'flex',
                                marginLeft: "20px",
                                marginRight: "20px"
                            }}>
                                <Box className='headerIcon'
                                    sx={{ marginRight: "10px" }}>
                                    <img src={Activity} />
                                </Box>
                                <Box className='headerIcon'>
                                    <img src={Notification} />
                                </Box>

                            </Box>


                            <Box
                            sx={{
                                display :'flex',
                                justifyContent : "center",
                                alignItems : 'center',
                                color : "#F63983"
                            }}>

                                <ArrowDropDownIcon/>

                                <Box sx={{
                                    width: "50px",
                                    height: '50px',
                                    borderRadius: '50px',
                                    cursor : "pointer"
                                }}>
                                    <img src={profile} style={{ width: '100%' }} />
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