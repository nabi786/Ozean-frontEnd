

import { Box, Typography } from '@mui/material'


import Imag1 from '../assets/imgs/Rectangle 16 (1).png'


function NftCard() {
    return (
        <>

            <Box className='nftCard'>

                <Box>
                    <img src={Imag1} style={{ width: "100%" }} />
                </Box>

                <Box className='nftCardContent'>
                    <Typography sx={{ display: "flex", justifyContent: "space-between", fontSize : "12px"}}><span style={{color : "#00A2FD"}}>Crypto Hero Marce</span> <span style={{color:"gray"}}>Price</span></Typography>
                    <Typography sx={{ marginTop : "10px", display: "flex", justifyContent: "space-between" }}><span>Pit Stop Marce</span> <span>Price
                        $66565</span></Typography>
                    
                    <Typography sx={{ display: "flex", alignItems : "center", justifyContent: "space-between", marginTop: "20px", borderTop : "1px solid #282828", paddingTop : '25px'}}>
                        <span>Buy Now</span> <span style={{fontSize:"12px", color:"gray"}}>
                        2 Days Left</span>
                        </Typography>
                </Box>
            </Box>


        </>

    )

}


export default NftCard