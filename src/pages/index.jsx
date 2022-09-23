// material UI 
import { Box } from '@mui/material'

// components
import SideBar from '../components/SideBar';
import Header from '../components/header';
import Footer from '../components/footer';
import RightSideBar from '../components/RightSideBar';
import Filters from '../components/filters'
import Card from '../components/nftCard'




// home Page
function HomePage() {
    return (
        <>
            {/* outerBox */}
            <Box sx={{ display: "flex" }}>

                {/* sideBar */}
                <Box>
                    <SideBar />
                </Box>
                {/* sidebarEnd */}



                <Box sx={{
                    flexGrow: '1',
                    padding: "25px 25px"
                }}>
                    <Header />

                    <Box sx={{ display: "flex" }}>




                        {/* main conent Box */}
                        <Box className='mainBody' sx={{ flexGrow: "1"}}>

                            <Filters/>

                            <Box sx={{margin:"40px 0px"}}>
                            <Card/>
                            </Box>

                        </Box>







                        {/* right sideBar */}
                        <Box>
                            <RightSideBar />
                        </Box>

                    </Box>



                </Box>


                {/* footer */}

            </Box>
            <Footer />


        </>
    )
}



export default HomePage