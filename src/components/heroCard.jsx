


import React from 'react'

import { Box, Typography, Button } from '@mui/material';


import NFTCard from '../components/nftCard'


function HeroCard() {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent :"space-between" }} className="heroCard">
                <Box className='HeroCardBox1' sx={{display : "flex",flexGrow : "1" ,justifyContent : "center", flexDirection : "column", paddingRight : "10px"}}>
                    <Typography className='heroCardTitle'>
                        The Most  Finest NFT <br />in the World.
                    </Typography>

                    <Typography sx={{ fontSize: "12px", margin: "20px 0px", color: "#827D9D" }} >
                        NFT art are all the hype now.
                    </Typography>

                    <Button sx={{width:"100px"}}>
                        Buy Now
                    </Button>
                </Box>


                <Box sx={{ display: "flex", justifyContent: "space-between", width:"60%"}}>
                    <Box>
                        <NFTCard img="https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_5_nikowk.png" isInMainList = "false"/>
                    </Box>
                    <Box sx={{marginLeft : "10px"}}>
                        <NFTCard img="https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_1_dmo39v.png" isInMainList="false"/>
                    </Box>
                </Box>

            </Box>

        </>
    )
}



export default HeroCard;