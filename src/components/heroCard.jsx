


import React from 'react'

import { Box, Typography, Button } from '@mui/material';


import NFTCard from '../components/nftCard'

import {useNavigate} from 'react-router-dom'

function HeroCard() {

    let navigate = useNavigate()

    return (
        <>
            <Box sx={{ display: "flex", justifyContent :"space-between" }} className="heroCard">

                <Box className='HeroCardBox1' sx={{display : "flex",flexGrow : "1" ,justifyContent : "center", flexDirection : "column", paddingRight : "10px"}}>
                    <Typography className='heroCardTitle'>
                        The Most  Finest NFT in the World.
                    </Typography>

                    <Typography sx={{ fontSize: "12px", margin: "20px 0px", color: "#827D9D" }} >
                        NFT art are all the hype now.
                    </Typography>

                    <Button sx={{width:"120px", borderRadius: "50px", padding:"10px 20px"}} onClick={()=> navigate('/nft-detail')}>
                        Buy Now
                    </Button>
                </Box>


                <Box sx={{ display: "flex", justifyContent: "space-between", width:"60%"}} className="heroSecSideCard">
                    <Box>
                        <NFTCard img="https://res.cloudinary.com/learn2code/image/upload/v1663998318/Rectangle_16_xvyzb2.png" isInMainList = "false"/>
                    </Box>
                    <Box sx={{marginLeft : "10px"}}>
                        <NFTCard img="https://res.cloudinary.com/learn2code/image/upload/v1664257356/Rectangle_16_2_b9eofu.png" isInMainList="false"/>
                    </Box>
                </Box>

            </Box>

        </>
    )
}



export default HeroCard;