


import {Box, Typography} from '@mui/material'
import SideBar from '../SideBar';
import Header from '../header';
import RightSideBar from '../RightSideBar';

function Layout(){
        return(
            <>

                    <SideBar/>


                    <Box>
                        <Header />
                        <RightSideBar/>
                    </Box>
                
            </>
        )
}

export default Layout;