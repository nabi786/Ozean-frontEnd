
import { Box, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardImg from '../assets/imgs/Dashboard.png'



function Accordian(props) {
    return (
        <Box>

            <Accordion className='accordainSideBar'
                sx={{
                    backgroundColor: "#030a1d",
                    color: "white"
                }}>

                <Box sx={{
                    display : 'flex',
                    alignItems : "center"
                }}>
                    <Box sx={{
                        marginRight : '15px'
                    }}>
                        <img src={props.icon}/>
                    </Box>

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{
                            color: 'white',
                            maringLeft :  "auto",
                            color : 'blue'
                        }} />}
                        aria-controls="panel1a-content"

                        sx={{
                            flexGrow : '1',
                            maring : '0px',
                            padding : '0px'
                        }}

                    >
                        <Typography className="accordianTitle" sx={{
                            padding : '0px',
                            maring : '0px'
                        }}> {props.title} </Typography>
                    </AccordionSummary>
                </Box>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}


export default Accordian