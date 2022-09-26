

import { Box, Typography } from '@mui/material'


import Imag1 from '../assets/imgs/Rectangle 16 (1).png'


function NftCard(prop) {
    return (
        <>

            <Box className='nftCard'>

                <Box>
                    <img src={prop.img} style={{ width: "100%" }} />
                </Box>

                <Box className='nftCardContent'>

                    {(() => {
                        if (prop.isInMainList == "false") {
                            return (
                                <>
                                    <Typography sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}><span style={{ color: "#00A2FD" }}>Crypto Hero Marce</span> <span style={{ color: "gray" }}>Price</span></Typography>
                                    <Typography sx={{ marginTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span>Pit Stop Marce</span> <span>Price
                                        $66565</span></Typography>
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <Typography sx={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}><span style={{ color: "#00A2FD" }}>Crypto Hero Marce</span> <span style={{ color: "gray" }}>Price</span></Typography>
                                    <Typography sx={{ marginTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span>Pit Stop Marce</span> <span>Price
                                        $66565</span></Typography>
                                </>
                            )
                        }
                    })()}


                    {(() => {
                        if (prop.isInMainList == "true") {
                            return (
                                <>
                                    <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px", borderTop: "1px solid #282828", paddingTop: '25px' }}>
                                        <span>Buy Now</span> <span style={{ fontSize: "12px", color: "gray" }}>
                                            2 Days Left</span>
                                    </Typography>
                                </>
                            )
                        }
                    })()}

                </Box>
            </Box>


        </>

    )

}


export default NftCard