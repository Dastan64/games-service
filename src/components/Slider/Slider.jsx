import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './Slider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={3}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 4,
        },
      }}
    >
      {data.length > 0 &&
        data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <DeveloperCard developer={item} />
            </SwiperSlide>
          );
        })}
      <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}>
        <img style={{ transform: 'rotate(180deg)' }} src={arrow} alt="" />
      </div>
      <div className={`swiper-button-next ${styles.swiperButtonNext}`}>
        <img src={arrow} alt="" />
      </div>
    </Swiper>
  );
};

export default Slider;
