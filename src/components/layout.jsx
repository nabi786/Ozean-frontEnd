
import { Box } from '@mui/material'
import SideBar from './SideBar';
import Header from './header';
import RightSideBar from './RightSideBar';
import Footer from './footer';
import MainBody from './mainBody';
import Filters from '../components/filters'


function Layout() {
    return (
        <>


            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Box >
                    <SideBar />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>

                    <Header />

                    <Box sx={{ display: "flex", paddingRight : "20px" }} className="mainBodyAndRightSideBar">



                        <Box>
                            <Filters/>
                            
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




export default Layout;