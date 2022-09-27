

import { Box, Typography, Button } from '@mui/material'



function Graph() {
    return (
        <>
            <Box className='GraphBox'>
                <Box className='grpahContent'>
                    <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "flex-start" }}>

                        <Box>

                            <Typography sx={{ fontSize: "10px !important" }}>
                                All Time Avg Price
                            </Typography>
                            <Typography sx={{ fontSize: "16px !important", margin:"5px 0px" }}>
                            0.2556
                            </Typography>
                            <Typography sx={{ fontSize: "10px !important", color : '#827D9D'}}>
                            Last updated 1 hour ago
                            </Typography>
                        </Box>

                        <Typography>
                            <Button sx={{ fontSize: "10px !important" }}>View Report</Button>
                        </Typography>
                    </Box>
                </Box>

                {/* acutal graph */}
                <Box sx={{ overflow: 'hidden', borderRadius: "10px" }}>
                    <img src="https://res.cloudinary.com/learn2code/image/upload/v1664265019/Chart_Title_mdgpns.png" />
                </Box>


            </Box>

        </>
    )
}


export default Graph;