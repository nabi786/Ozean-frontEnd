import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';





function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function HorizontalAccordian() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} class="horizontalAccordian">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Description" {...a11yProps(0)} sx={{ color: "white" }} />
                    <Tab label="Properties" {...a11yProps(1)} sx={{ color: "white" }} />
                    <Tab label="About us" {...a11yProps(2)} sx={{ color: "white" }} />
                    <Tab label="Details" {...a11yProps(3)} sx={{ color: "white" }} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >

                <Typography sx={{ color: "white !important", fontSize: "14px" }}>
                    Now you can swap which image displays as your NFB! Each NFB now includes an original gif, a glitched gif, and PFP(anmutig)!         A few other NFBs have even more like the destination gif & Skullrivative gifs! https://www.instagram.com/anmutig_studio

                    First of its kind animated & swappable displayed image NFT series
                    It includes 10,005 randomly generated NFTs that rest in peace on the ETH Blockchain.
                    59 unique animations (587 colorways each)85121 total

                    767 Unbroken
                    21 OG Rare
                    10 Infinity Rare
                    3 Cr8zy Rare

                    Created by Trevor Van Meter and pals
                    https://www.instagram.com/anmutig_studio
                    https://www.instagram.com/anmutig_studio
                </Typography>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography sx={{ color: "white !important", fontSize: "14px" }}>
                    Now you can swap which image displays as your NFB! Each NFB now includes an original gif, a glitched gif, and PFP(anmutig)!         A few other NFBs have even more like the destination gif & Skullrivative gifs! https://www.instagram.com/anmutig_studio

                    First of its kind animated & swappable displayed image NFT series
                    It includes 10,005 randomly generated NFTs that rest in peace on the ETH Blockchain.
                    59 unique animations (587 colorways each)85121 total

                    767 Unbroken
                    21 OG Rare
                    10 Infinity Rare
                    3 Cr8zy Rare

                    Created by Trevor Van Meter and pals
                    https://www.instagram.com/anmutig_studio
                    https://www.instagram.com/anmutig_studio
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography sx={{ color: "white !important", fontSize: "14px" }}>
                    Now you can swap which image displays as your NFB! Each NFB now includes an original gif, a glitched gif, and PFP(anmutig)!         A few other NFBs have even more like the destination gif & Skullrivative gifs! https://www.instagram.com/anmutig_studio

                    First of its kind animated & swappable displayed image NFT series
                    It includes 10,005 randomly generated NFTs that rest in peace on the ETH Blockchain.
                    59 unique animations (587 colorways each)85121 total

                    767 Unbroken
                    21 OG Rare
                    10 Infinity Rare
                    3 Cr8zy Rare

                    Created by Trevor Van Meter and pals
                    https://www.instagram.com/anmutig_studio
                    https://www.instagram.com/anmutig_studio
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Typography sx={{ color: "white !important", fontSize: "14px" }}>
                    Now you can swap which image displays as your NFB! Each NFB now includes an original gif, a glitched gif, and PFP(anmutig)!         A few other NFBs have even more like the destination gif & Skullrivative gifs! https://www.instagram.com/anmutig_studio

                    First of its kind animated & swappable displayed image NFT series
                    It includes 10,005 randomly generated NFTs that rest in peace on the ETH Blockchain.
                    59 unique animations (587 colorways each)85121 total

                    767 Unbroken
                    21 OG Rare
                    10 Infinity Rare
                    3 Cr8zy Rare

                    Created by Trevor Van Meter and pals
                    https://www.instagram.com/anmutig_studio
                    https://www.instagram.com/anmutig_studio
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Typography sx={{ color: "white !important", fontSize: "14px" }}>
                    Now you can swap which image displays as your NFB! Each NFB now includes an original gif, a glitched gif, and PFP(anmutig)!         A few other NFBs have even more like the destination gif & Skullrivative gifs! https://www.instagram.com/anmutig_studio

                    First of its kind animated & swappable displayed image NFT series
                    It includes 10,005 randomly generated NFTs that rest in peace on the ETH Blockchain.
                    59 unique animations (587 colorways each)85121 total

                    767 Unbroken
                    21 OG Rare
                    10 Infinity Rare
                    3 Cr8zy Rare

                    Created by Trevor Van Meter and pals
                    https://www.instagram.com/anmutig_studio
                    https://www.instagram.com/anmutig_studio
                </Typography>
            </TabPanel>
        </Box>
    );
}


export default HorizontalAccordian;