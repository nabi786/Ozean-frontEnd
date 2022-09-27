




import { useNavigate } from 'react-router-dom'
import { Button, Box, Typography } from "@mui/material"

function Err(prop) {

    let navigate = useNavigate();

    return (
        <>

            <Box sx={{width: "100%", height: "100vh", display  : "flex", justifyContent : "center", alignItems : "center", position : "relative", overflow : "hidden"}}>
                <img src="https://res.cloudinary.com/learn2code/image/upload/v1664261312/Group_34891_1_xhzjcj.png" alt="erroPageBg" className='bakgroundImg'/>
                <Box sx={{display  :"flex", flexDirection : "column" , justifyContent : "center"}}>
                    <h1 className='errorPageErr'>
                        {prop.type}
                    </h1>

                    <Typography className='errPageTextOne'>
                        Oops! This Page is Not Found.
                    </Typography>
                    <Typography className='errorPageTextTwo'>
                        The requested page dose not exist
                    </Typography>

                    <Button className='errorPageButton' onClick={()=> navigate('/')}>
                        Back To Home
                    </Button>
                </Box>

            </Box>
        </>
    )

}


export default Err