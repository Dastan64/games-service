import React from 'react';
import arrow from "../../assets/images/arrow-next.svg";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import DeveloperCard from "../DeveloperCard/DeveloperCard";
import styles from "./DevelopersList.module.css";
import {Navigation} from "swiper";

const DevelopersList = ({developers}) => {
    return (
        <div className={styles.developersSlider}>
            <Swiper modules={[Navigation]} slidesPerView={3} navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
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
                    }}>
                {developers.length > 0 && developers.map(developer => {
                        return (
                            <SwiperSlide key={developer.id}>
                                <DeveloperCard developer={developer}/>
                            </SwiperSlide>
                        )
                    }
                )}
                <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}>
                    <img style={{transform: 'rotate(180deg)'}} src={arrow} alt=""/>
                </div>
                <div className={`swiper-button-next ${styles.swiperButtonNext}`}>
                    <img src={arrow} alt=""/>
                </div>
            </Swiper>
        </div>
    );
};

export default DevelopersList;