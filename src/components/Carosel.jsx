
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../pages/Carosel.css';

// import required modules
import { Pagination, } from 'swiper/modules';

function Carosel() {
    return (
        <>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/public/post/han6.jpg" className="rounded-xl " />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/ras6.jpg" className="rounded-xl " />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/noe20.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/nor10.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/han5.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/hand.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/nor17.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/dis2.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/nor.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/ra2.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/ra4.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/ras6.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/ur6.jpg" className="rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/post/ur5.jpg" className="rounded-xl" />
                </SwiperSlide>
            </Swiper>

        </>
    );
}

export default Carosel;
