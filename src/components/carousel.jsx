import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import nftCard from './nftCard'

import { Box } from '@mui/material'

const carouselSlider = ({ images }) => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,

    };


    return (
        <>

            <Box className="carouSelBox">
                <div style={{ width: "500px", margin : "auto"}}>

                    <Slider {...settings}>
                        <img src="https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_5_nikowk.png" />
                        <img src="https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_5_nikowk.png" />
                        <img src="https://res.cloudinary.com/learn2code/image/upload/v1663998127/Rectangle_16_5_nikowk.png" />
                    </Slider>
                </div>
            </Box>
        </>
    )
}


export default carouselSlider;