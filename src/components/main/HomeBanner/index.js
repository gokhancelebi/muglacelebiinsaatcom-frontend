// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

import slider_image from '../../../assets/img/banner1.png';

export default () => {
    return (
        <div className="home-banner">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src={slider_image}/></SwiperSlide>

            </Swiper>
        </div>
    );
};