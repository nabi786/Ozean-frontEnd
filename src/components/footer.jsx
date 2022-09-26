

import {Box, Typography} from '@mui/material'

function Footer(){
    return(<>

            <Box sx={{
                padding : "20px",
                display : 'flex',
                justifyContent : "center",
                alignItems : 'center',
                color: "white",
                backgroundColor : "#030a1d",
                width:"100%",
                marginTop : "50px"
            }}>

            <Typography>
            © 2022 Lowin NFT, Inc
            </Typography>

            </Box>
    
    </>)
}



export default Footer