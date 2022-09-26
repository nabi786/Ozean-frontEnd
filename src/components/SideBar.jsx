
import logo from '../assets/imgs/Ozen Logo 1.png'
import { Box, Typography, Drawer, useMediaQuery } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Accordian from '../components/Accordian'


// importing Images
import UserImg from '../assets/imgs/3 User.png'
import Bag from '../assets/imgs/Bag.png'
import Discount from '../assets/imgs/Discount.png'
import MoreCircle from '../assets/imgs/More Circle.png'
import Paper from '../assets/imgs/Paper.png'
import Dashboard from '../assets/imgs/Dashboard.png'
import Chart from '../assets/imgs/Chart.png'
import RectangleImg from '../assets/imgs/Rectangle 10.png'
import { useContext} from 'react';

// import { MyContext } from '../App'

import MyContext from './ContextAPI';



// side bar
function SideBar(prop) {

    // using contenxt APi
    const contextObject = useContext(MyContext)
    
    const matches = useMediaQuery('(max-width:1024px)', { noSsr: true });

    var varientValue = 'permanent';
    if (matches == true) {
        varientValue = 'temporary';
    }


    return (
        <>

            <Drawer open={contextObject.isOpen} onClose={()=> contextObject.newSetOpen(false)} variant={varientValue}>
                <Box

                    sx={{
                        width: "280px",
                        padding: "25px 20px",
                        backgroundColor: 'black',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>

                    <Box sx={{
                        width: "100%",
                        // border : "1px solid white"
                    }}>

                        <Box className='logoBox'
                            sx={
                                {
                                    width: '150px',
                                    margin: "auto"
                                }
                            }
                        >
                            <img src={logo} alt="icon"/>
                        </Box>

                        <Box
                            sx={{
                                marginTop: '50px'
                            }}>


                            {/* items */}
                            <Box className='sideBarBox'

                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>

                                <AddIcon className='sideBarIcon'
                                    sx={{
                                        color: 'blue',
                                        backgroundColor: '#003452',
                                        padding: "2px",
                                        borderRadius: '5px',
                                        width: "30px",
                                        height: "30px",
                                        cursor: "pointer",
                                        fontWeight: "bold"
                                    }} />

                                <Typography sx={{
                                    fontWeight: "500"
                                }}>
                                    Create NFT
                                </Typography>
                            </Box>



                            {/* items */}
                            <Box className='sideBarBox'>
                                <Accordian
                                    title={"Marketplace"}
                                    icon={Dashboard}

                                />
                                <Accordian
                                    title='Stats'
                                    icon={Chart}
                                />
                                <Accordian
                                    title='Resource'
                                    icon={Paper}
                                />
                            </Box>

                            <Box className='sideBarBox'>
                                <Accordian
                                    icon={Dashboard}
                                    title="Status" />
                                <Accordian
                                    icon={Chart}
                                    title="Price" />
                                <Accordian
                                    icon={UserImg}
                                    title="Collections" />
                                <Accordian
                                    icon={MoreCircle}
                                    title="Chains" />
                                <Accordian
                                    icon={Bag}
                                    title="Categories" />
                                <Accordian
                                    icon={Discount}
                                    title="On Sale" />
                            </Box>



                            <Box className='sideBarBox' sx={{
                                padding: '0px'
                            }
                            }>
                                <img src={RectangleImg} style={{ width: '100%' }} alt="icon" />

                                <Box sx={{
                                    padding: "10px 20px",
                                    display: "flex",
                                    justifyContent: 'space-between',
                                    alignItems: "center"
                                }}>
                                    <Box>
                                        <Typography sx={{
                                            fontSize: "12px",
                                            color: "#827D9D"
                                        }}>
                                            Crypto Hero Macro
                                        </Typography>
                                        <Typography>
                                            Crypto Hero Macro
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <img src={Discount} alt="icon"/>
                                    </Box>
                                </Box>
                            </Box>


                        </Box>

                    </Box>
                </Box>
            </Drawer>

        </>
    )
}



export default SideBar;