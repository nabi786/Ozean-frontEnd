
import { Box } from '@mui/material'
import SideBar from '../components/SideBar';
import Header from '../components/header';
import RightSideBar from '../components/RightSideBar';
import Footer from '../components/footer';

import SingleNft from '../components/singleNft'




function SingleNFTPage() {
    return (
        <>

            <Box className="fullBody">

                <Box sx={{ display: "flex", alignItems: "flex-start" }} >
                    <Box >
                        <SideBar />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>

                        <Header />

                        <Box sx={{ display: "flex", paddingRight: "20px" }} className="mainBodyAndRightSideBar">


                            {/* Main Body */}
                            <Box sx={{ marginTop: "35px" }}>
                                <SingleNft />
                            </Box>



                            <Box >
                                <RightSideBar />
                            </Box>
                        </Box>

                    </Box>
                </Box>
                <Footer />
            </Box>
        </>
    )
}




export default SingleNFTPage;