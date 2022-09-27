

import { Box, Typography, Button, Grid } from '@mui/material'


// importing components
import Graph from './graphs';
import HorizontalAccordian from './horizontalAccordian';

import Cards from './nftCard';

import Carousel from './carousel';



function SingleNFT() {
    return (
        <>

            {/* single nft dteials page */}
            <Box sx={{ flexGrow: '1', marginLeft: "15px" }}>

                {/* Section 1 */}
                <Box sx={{ display: 'flex', justifyContent: "center" }} className="nftDetialsSec">

                    {/* single NFT image */}
                    <Box className="nftDetialsSecItem">
                        <img src="https://res.cloudinary.com/learn2code/image/upload/v1664262484/Rectangle_19_wromw9.png" />
                    </Box>

                    {/* Single NFT detials */}
                    <Box className="nftDetialsSecItem" sx={{ padding: "10px" }}>

                        <Typography className='nftDetialsText'>Crypto Hero Macro</Typography>
                        <Typography className='nftDetialsText' sx={{ marginBottom: "20px", fontSize: "20px !important", color: "white !important" }}>Crypto Hero Marce</Typography>

                        <Box className='nftDetialsText' sx={{ display: 'flex', marginBottom: "30px" }}>
                            <Typography sx={{ color: "#827D9D", fontSize: "12px" }}>Owned by</Typography>
                            <Typography sx={{ marginLeft: "3px", fontSize: "12px" }}> Anmutigstudio</Typography>
                        </Box>
                        <Typography className='nftDetialsText'>Current Price</Typography>
                        <Typography className='nftDetialsText' sx={{ color: "white !important", fontSize: "20px !important" }}>0.2($679.38)</Typography>

                        <Box sx={{ display: 'flex', justifyContent: "flex-start" }} >
                            <Button>Buy Now</Button>
                            <Button>Make Offer</Button>
                        </Box>
                        <Typography className='nftDetialsText' sx={{ color: "#827D9D !important" }}>Sale ends february 21,2022</Typography>


                        {/* graph */}
                        <Graph />
                    </Box>
                </Box>

                {/* horizontal Accordian */}
                <HorizontalAccordian />


                <Box className="moreCollection" sx={{width:"100%"}}>
                    <Typography sx={{color : 'white', fontSize : "16px"}}>More Collections</Typography>

                    
                    
                    
                    <Grid container spacing={{ xs: 2, md: 2, lg: 2 }} sx={{ paddingTop: "10px" }}>

                        <Grid item xs={12} sm={4} md={6} lg={4} xl={3}>
                            <Cards img="https://res.cloudinary.com/learn2code/image/upload/v1664257356/Rectangle_16_2_b9eofu.png" isInMainList="true" />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6} lg={4} xl={3}>
                            <Cards img="https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_1_dmo39v.png" isInMainList="true" />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6} lg={4} xl={3}>
                            <Cards img="https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_2_idmdyp.png" isInMainList="true" />
                        </Grid>
                    </Grid>

                </Box>

            </Box>

        </>
    )

}


export default SingleNFT