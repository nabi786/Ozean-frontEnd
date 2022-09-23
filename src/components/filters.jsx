

import { Box, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


import img1 from '../assets/imgs/Group 26.png'
import img2 from '../assets/imgs/Group 27.png'




// filters
function Filters() {
    return (
        <>
            <Box className='filtersBox'>

                <Typography sx={{ color: "white" }}>
                    1,548,931 Results
                </Typography>


                {/* tags */}
                <Box sx={{
                    display: "flex",
                    alignItems: 'center'
                }}>
                    <Typography sx={{
                        backgroundColor: "#202425",
                        borderRadius: "50px",
                        padding: "10px 30px",
                        color: "white",
                        fontSize: "12px",
                        position: "relative",
                        margin: "10px",
                      
                    }}>

                        ETH
                        <CloseIcon sx={{
                            position: "absolute",
                            top: "50%",
                            right: "0%",
                            transform: "translate(-50%,-50%)",
                            fontSize: "14px",
                         
                        }} />
                    </Typography>


                    <Typography sx={{
                        backgroundColor: "#202425",
                        borderRadius: "50px",
                        padding: "10px 30px",
                        color: "white",
                        fontSize: "12px",
                        position: "relative",
                        margin: "10px",
                       
                    }}>

                        ETH
                        <CloseIcon sx={{
                            position: "absolute",
                            top: "50%",
                            right: "0%",
                            transform: "translate(-50%,-50%)",
                            fontSize: "14px",
                            
                        }} />
                    </Typography>


                    <Typography sx={{
                        backgroundColor: "#202425",
                        borderRadius: "50px",
                        padding: "10px 30px",
                        color: "white",
                        fontSize: "12px",
                        position: "relative",
                        margin: "10px"
                    }}>

                        MVC
                        <CloseIcon sx={{
                            position: "absolute",
                            top: "50%",
                            right: "0%",
                            transform: "translate(-50%,-50%)",
                            fontSize: "14px"
                        }} />
                    </Typography>


                    <Typography sx={{
                        backgroundColor: "#202425",
                        borderRadius: "50px",
                        padding: "10px 30px",
                        color: "white",
                        fontSize: "12px",
                        position: "relative",
                        margin: "10px"
                    }}>

                        Block chain
                        <CloseIcon sx={{
                            position: "absolute",
                            top: "50%",
                            right: "0%",
                            transform: "translate(-50%,-50%)",
                            fontSize: "14px"
                        }} />
                    </Typography>


                    <Typography sx={{
                        color: "#00A2FD"
                    }}>
                        Clearn all
                    </Typography>



                    <Box sx={{
                        display : "flex",
                        marginLeft: "auto"
                    }}>
                        {/* working */}
                        <Box>
                            <img src={img1} />
                        </Box>
                        <Box>
                            <img src={img2} />
                        </Box>
                    </Box>

                </Box>




            </Box>

        </>
    )
}



export default Filters