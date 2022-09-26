
import { Box, Typography } from '@mui/material'
import SideBar from '../components/SideBar';
import Header from '../components/header';
import RightSideBar from '../components/RightSideBar';
import Footer from '../components/footer';
import MainBody from '../components/mainBody'
import HeroCard from '../components/heroCard'




function HomePage2() {
    return (
        <>


            <Box sx={{ display: "flex", alignItems: "flex-start" }} >
                <Box >
                    <SideBar />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>

                    <Header />

                    <Box sx={{ display: "flex", paddingRight : "20px" }} className="mainBodyAndRightSideBar">


                        {/* Main Body */}
                        
                        <Box>
                            <HeroCard/>

                            <Typography sx={{margin : "40px 15px 0px 15px", fontSize : "20px" , color : "white"}}>
                              Explore All NFT
                            </Typography>
                            <MainBody />
                        </Box>
        


                        <Box >
                            <RightSideBar />
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Footer />

        </>
    )
}




export default HomePage2;