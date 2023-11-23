
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
                    <img src="/post/han6.jpg" className="rounded-xl lg:h-[300px] " />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/ras6.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/noe20.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/nor10.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/han5.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/hand.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/nor17.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/dis2.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/nor.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/ra2.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/ra4.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/ras6.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/ur6.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/post/ur5.jpg" className="rounded-xl h-[175px] lg:h-[300px]" />
                </SwiperSlide>
            </Swiper>

        </>
    );
}

export default Carosel;
