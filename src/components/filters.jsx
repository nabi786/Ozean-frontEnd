

import { Box, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


import img1 from '../assets/imgs/Group 26.png'
import img2 from '../assets/imgs/Group 27.png'




// filters
function Filters() {
    return (
        <>
            <Box className='filtersBox'>

                <Typography sx={{ color: "white",paddingLeft:"12px"}}>
                    1,548,931 Results
                </Typography>


                {/* tags */}
                <Box sx={{
                    display: "flex",
                    alignItems: 'center'
                }}>

                    <Box className='tagsList'>


                    <Typography sx={{
                            backgroundColor: "#202425",
                            borderRadius: "50px",
                           
                            color: "white",
                            fontSize: "12px",
                            position: "relative",
                            margin: "10px",
                            display : "flex",
                            justifyContent : "space-between",
                            alignItems : "center",
                            padding : "5px 8px"
                         }} className="tags">

                            Block chain
                            <CloseIcon sx={{
                                fontSize : '10px',
                                marginLeft : "5px"
                            }} />
                        </Typography>


                        <Typography sx={{
                            backgroundColor: "#202425",
                            borderRadius: "50px",
                           
                            color: "white",
                            fontSize: "12px",
                            position: "relative",
                            margin: "10px",
                            display : "flex",
                            justifyContent : "space-between",
                            alignItems : "center",
                            padding : "5px 8px"
                         }} className="tags">

                            Block chain
                            <CloseIcon sx={{
                                fontSize : '10px',
                                marginLeft : "5px"
                            }} />
                        </Typography>


                        <Typography sx={{
                            backgroundColor: "#202425",
                            borderRadius: "50px",
                           
                            color: "white",
                            fontSize: "12px",
                            position: "relative",
                            margin: "10px",
                            display : "flex",
                            justifyContent : "space-between",
                            alignItems : "center",
                            padding : "5px 8px"
                         }} className="tags">

                            Block chain
                            <CloseIcon sx={{
                                fontSize : '10px',
                                marginLeft : "5px"
                            }} />
                        </Typography>


                        <Typography sx={{
                            backgroundColor: "#202425",
                            borderRadius: "50px",
                           
                            color: "white",
                            fontSize: "12px",
                            position: "relative",
                            margin: "10px",
                            display : "flex",
                            justifyContent : "space-between",
                            alignItems : "center",
                            padding : "5px 8px"
                         }} className="tags">

                            Block chain
                            <CloseIcon sx={{
                                fontSize : '10px',
                                marginLeft : "5px"
                            }} />
                        </Typography>


                        <Typography sx={{
                            color: "#00A2FD"
                        }}>
                            Clearn all
                        </Typography>
                    </Box>


                    <Box sx={{
                        display: "flex",
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