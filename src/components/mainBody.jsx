

import { Grid, Box } from '@mui/material';
import Card from './nftCard';

import Filters from './filters';

function MainBody() {
    return (
        <>
            <Box className="mainBodyBox">
                <Grid container spacing={{ xs: 2, md: 5, lg: 3 }} sx={{paddingTop : "25px"}}>

                    <Grid item xs={12} sm={4} md={6} lg={4} xl={3}>
                        <Card img='https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_xxfckg.png' isInMainList = "true"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={6} lg={4} xl={3}>
                        <Card img='https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_3_z56ik9.png' isInMainList = "true"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={6} lg={4} xl={3}>
                        <Card img='https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_1_dmo39v.png' isInMainList = "true"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={6} lg={4} xl={3}>
                        <Card img='https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_2_idmdyp.png' isInMainList = "true"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={6} lg={4} xl={3}>
                        <Card img='https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_5_nikowk.png' isInMainList = "true"/>
                    </Grid>

                    <Grid item xs={12} sm={4} md={6} lg={4} xl={3}>
                        <Card img='https://res.cloudinary.com/learn2code/image/upload/v1663998318/Rectangle_16_xvyzb2.png' isInMainList = "true"/>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}



export default MainBody