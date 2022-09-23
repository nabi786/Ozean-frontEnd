

// importing mateiral u
import { Box, Typography } from '@mui/material'




// improting images

import WalletImg from '../assets/imgs/Wallet.png'
import CircleImg from '../assets/imgs/Circle.png'
import Bookmark from '../assets/imgs/Bookmark.png'
import ChipImg from '../assets/imgs/Chip.png'
import { fontWeight } from '@mui/system'
import Financelogo from '../assets/imgs/Finance logo.png'


function RightSideBar() {
    return (
        <>
            {/* right side bar */}
            <Box className="rightSideBar" sx={{
                marginTop: "60px",
                width: '250px',}}>

                {/*item      */}
                <Box className='rightSideBarBox'>

                    <Box>
                        <Typography sx={{
                            color: "#00A2FD", textTransform: "upperCase",
                        }}>
                            Wallet Holders
                        </Typography>
                        <br />
                        <Box>

                            <Typography>
                                <img src={WalletImg} style={{ marginRight: "10px" }} />
                                $10,00,5952
                            </Typography>
                        </Box>
                    </Box>

                </Box>


                        
                <Box className='rightSideBarBox shoppingCard'>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Typography sx={{
                            color: "white", textTransform: "upperCase",
                            fontWeight: "bold"
                        }}>
                            $4,435
                        </Typography>
                        <Box>

                            <img src={ChipImg} />

                        </Box>
                    </Box>

                   

                    <Box sx={{marginTop : '10px'}}>
                        <Typography sx={{
                            fontWeight: "200",
                            fontSize : '12px',
                            
                        }}>
                            Сredit limit
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                            $5,000
                        </Typography>
                    </Box>





                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop : "10px",
                        alignItems : "flex-end"
                     }}>
                        <Typography sx={{
                            color: "white",
                            fontSize: "12px",
                            fontWeight: '200',
                            

                        }}>
                            Daily Shopping Card  **** 2450
                        </Typography>
                        <Box>

                            <img src={Financelogo} />

                        </Box>
                    </Box>

                </Box>





                <Box className='rightSideBarBox'>

                    <Typography sx={{ textTransform: "uppercase", color: "#00A2FD", }}>Top Creator NFT</Typography>


                    <Box className='rightSideBarCreatorList'>

                        <Box className='topCreateBoxItem' sx={{
                            display: 'flex',
                            alignItems: "centers",

                        }}>
                            <Box sx={{ marginRight: "10px" }}>
                                <img src={CircleImg} />
                            </Box>
                            <Box>
                                <Typography>
                                    Meka Vers
                                </Typography>
                                <Typography sx={{
                                    fontSize: "12px", color: "gray"
                                }}>
                                    @meka
                                </Typography>
                            </Box>
                            <Box sx={{
                                marginLeft: 'auto',
                                display: "flex", justifyConent: "center", alignItems: 'center'
                            }}>
                                <img src={Bookmark} />
                            </Box>
                        </Box>


                        <Box className='topCreateBoxItem' sx={{
                            display: 'flex',
                            alignItems: "centers",

                        }}>
                            <Box sx={{ marginRight: "10px" }}>
                                <img src={CircleImg} />
                            </Box>
                            <Box>
                                <Typography>
                                    Meka Vers
                                </Typography>
                                <Typography sx={{
                                    fontSize: "12px", color: "gray"
                                }}>
                                    @meka
                                </Typography>
                            </Box>
                            <Box sx={{
                                marginLeft: 'auto',
                                display: "flex", justifyConent: "center", alignItems: 'center'
                            }}>
                                <img src={Bookmark} />
                            </Box>
                        </Box>


                        <Box className='topCreateBoxItem' sx={{
                            display: 'flex',
                            alignItems: "centers",

                        }}>
                            <Box sx={{ marginRight: "10px" }}>
                                <img src={CircleImg} />
                            </Box>
                            <Box>
                                <Typography>
                                    Meka Vers
                                </Typography>
                                <Typography sx={{
                                    fontSize: "12px", color: "gray"
                                }}>
                                    @meka
                                </Typography>
                            </Box>
                            <Box sx={{
                                marginLeft: 'auto',
                                display: "flex", justifyConent: "center", alignItems: 'center'
                            }}>
                                <img src={Bookmark} />
                            </Box>
                        </Box>


                        <Box className='topCreateBoxItem' sx={{
                            display: 'flex',
                            alignItems: "centers",

                        }}>
                            <Box sx={{ marginRight: "10px" }}>
                                <img src={CircleImg} />
                            </Box>
                            <Box>
                                <Typography>
                                    Meka Vers
                                </Typography>
                                <Typography sx={{
                                    fontSize: "12px", color: "gray"
                                }}>
                                    @meka
                                </Typography>
                            </Box>
                            <Box sx={{
                                marginLeft: 'auto',
                                display: "flex", justifyConent: "center", alignItems: 'center'
                            }}>
                                <img src={Bookmark} />
                            </Box>
                        </Box>

                    </Box>


                </Box>







                <Box className='rightSideBarBox'>

                    <Typography sx={{ textTransform: "uppercase", color: "#00A2FD", }}>Recent Sold</Typography>


                    <Box className='rightSideBarCreatorList'>

                        

                        <Box className='topCreateBoxItem' sx={{
                            display: 'flex',
                            alignItems: "centers",

                        }}>
                            <Box sx={{ marginRight: "10px" }}>
                                <img src={CircleImg} />
                            </Box>
                            <Box>
                                <Typography>
                                    Meka Vers
                                </Typography>
                                <Typography sx={{
                                    fontSize: "12px", color: "gray"
                                }}>
                                    Has been sold <span style={{color : '#00A2FD'}}>2 ETH.</span>

                                </Typography>
                                <Typography sx={{fontSize : "12px", color : "gray"}}>
                                    27 Oct 2021 at 07:05 PM
                                </Typography>
                            </Box>
                            
                        </Box>

                    </Box>


                </Box>







            </Box>

        </>
    )
}


export default RightSideBar