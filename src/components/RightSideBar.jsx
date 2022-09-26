

// importing mateiral u
import { Box, Typography, Drawer,useMediaQuery } from '@mui/material'




// improting images

import WalletImg from '../assets/imgs/Wallet.png'
import CircleImg from '../assets/imgs/Circle.png'
import Bookmark from '../assets/imgs/Bookmark.png'
import ChipImg from '../assets/imgs/Chip.png'
import Financelogo from '../assets/imgs/Finance logo.png'



import MyContext from './ContextAPI';
import { useContext } from 'react'


function RightSideBar() {

    var contextObj = useContext(MyContext)

    const matches = useMediaQuery('(max-width:1024px)', { noSsr: true });

    var varientValue = 'permanent';
    var useAnchor = ""
    if (matches == true) {
        varientValue = 'temporary';
        useAnchor = "right"
    }
    
    

    return (
        <>

            <Drawer  open={contextObj.isOpneRightSideBar} onClose={()=> contextObj.closeRightSideBar(false)} variant={varientValue} anchor="right">

                {/* right side bar */}
                <Box className="rightSideBar" sx={{
                    width: '250px',
                }}>

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
                                    <img src={WalletImg} style={{ marginRight: "10px" }} alt="icon" />
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

                                <img src={ChipImg} alt="icon" />

                            </Box>
                        </Box>



                        <Box sx={{ marginTop: '10px' }}>
                            <Typography sx={{
                                fontWeight: "200",
                                fontSize: '12px',

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
                            marginTop: "10px",
                            alignItems: "flex-end"
                        }}>
                            <Typography sx={{
                                color: "white",
                                fontSize: "12px",
                                fontWeight: '200',


                            }}>
                                Daily Shopping Card  **** 2450
                            </Typography>
                            <Box>

                                <img src={Financelogo} alt="icon" />

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
                                    <img src={CircleImg} alt="icon" />
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
                                    <img src={Bookmark} alt="icon" />
                                </Box>
                            </Box>


                            <Box className='topCreateBoxItem' sx={{
                                display: 'flex',
                                alignItems: "centers",

                            }}>
                                <Box sx={{ marginRight: "10px" }}>
                                    <img src={CircleImg} alt="icon" />
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
                                    <img src={Bookmark} alt="icon" />
                                </Box>
                            </Box>


                            <Box className='topCreateBoxItem' sx={{
                                display: 'flex',
                                alignItems: "centers",

                            }}>
                                <Box sx={{ marginRight: "10px" }}>
                                    <img src={CircleImg} alt="icon" />
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
                                    <img src={Bookmark} alt="icon" />
                                </Box>
                            </Box>


                            <Box className='topCreateBoxItem' sx={{
                                display: 'flex',
                                alignItems: "centers",

                            }}>
                                <Box sx={{ marginRight: "10px" }}>
                                    <img src={CircleImg} alt="icon" />
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
                                    <img src={Bookmark} alt="icon" />
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
                                    <img src={CircleImg} alt="icon" />
                                </Box>
                                <Box>
                                    <Typography>
                                        Meka Vers
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: "12px", color: "gray"
                                    }}>
                                        Has been sold <span style={{ color: '#00A2FD' }}>2 ETH.</span>

                                    </Typography>
                                    <Typography sx={{ fontSize: "12px", color: "gray" }}>
                                        27 Oct 2021 at 07:05 PM
                                    </Typography>
                                </Box>

                            </Box>

                        </Box>


                    </Box>







                </Box>
            </Drawer>
        </>
    )
}


export default RightSideBar