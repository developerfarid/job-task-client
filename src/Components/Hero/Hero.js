import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Hero.moduler.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    FreeMode, Navigation, Thumbs
} from 'swiper';
import { Container } from "react-bootstrap";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const Hero = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const heroArray = [
        {
            id: 1,
            img: "https://deasil.moldthemes.com/wp-content/uploads/2019/11/np_mountain-2376962_1920.jpg",
            text: "THE MOST IMPORTANT INFO ON YOUR MOBILE DURING A VISIT",
            sub: "MUSEUM GUIDES / DIRECTIONS / TIPS&INFO"

        },
        {
            id: 2,
            text: "FIND EASILY INTERESTING PLACE CLOSE TO YOU",
            sub: "GET DIRECTIONS / MUST SEE PLACES / EAT & DRINK",
            img: "https://deasil.moldthemes.com/wp-content/uploads/2019/11/np_mount-everest-1502349_1920.jpg"
        },
        {
            id: 3,
            sub: "WE OFFER A VARIETY OF SERVICES AND OPTIONS",
            text: "DISCOVER FANTASTIC PLACES",
            img: "https://deasil.moldthemes.com/wp-content/uploads/2019/11/np_annapurna-sanctuary-1983908_1920.jpg"
        }
    ]
    return (
        <div>
            <>

                <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} loop={true} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">

                    {
                        heroArray.map((item) => (
                            <SwiperSlide style={{ background: `url(${item.img})` }}>
                                <div className="hero" >
                                    <Container>
                                        <p>{item.sub}</p>
                                        <h1>{item.text}</h1>
                                    </Container>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={3} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                    {
                        heroArray.map((item) => (
                            <SwiperSlide><img alt="" src={item.img} /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Hero;