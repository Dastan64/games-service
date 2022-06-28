import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import arrow from '../../assets/images/arrow-next.svg';
import styles from './Screenshots.module.css';

const Screenshots = ({ screenshots }) => {
    return (
        <div className={styles.screenshotsSlider}>
            <Swiper
                spaceBetween={20}
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
                        slidesPerView: 2,
                    },
                    1920: {
                        slidesPerView: 4,
                    },
                }}
            >
                {screenshots.length > 0 &&
                    screenshots.map((screenshot) => {
                        return (
                            <SwiperSlide key={screenshot.id}>
                                <div className={styles.screenshotContainer} key={screenshot.id}>
                                    <img
                                        className={styles.screenshot}
                                        src={screenshot.image}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}>
                    <img style={{ transform: 'rotate(180deg)' }} src={arrow} alt=""/>
                </div>
                <div className={`swiper-button-next ${styles.swiperButtonNext}`}>
                    <img src={arrow} alt=""/>
                </div>
            </Swiper>
        </div>
    );
};

export default Screenshots;
