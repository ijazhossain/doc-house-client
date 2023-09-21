import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from '../../../components/Shared/SectionTitle';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            });
    }, []);

    const swiperSettings = {
        cssMode: true,
        navigation: true,
        pagination: true,
        mousewheel: true,
        keyboard: true,
        modules: [Navigation, Pagination, Mousewheel, Keyboard],
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    };

    return (
        <div className='w-[90%] mx-auto'>
            <SectionTitle
                title="What Our Patients Says"
                description="Our community of users, ranging from healthcare advocates and parents to IT professionals and small business owners, has shared their feedback to help you make informed decisions about your healthcare needs. Read on to discover the insights, ratings, and comments from individuals who have benefited from our platform."
            ></SectionTitle>
            <Swiper {...swiperSettings} className="mySwiper">
                {reviews.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className='w-[90%] mx-auto py-[50px] border border-[#E6E6E6] px-[50px] rounded-[10px]'
                        >
                            <div className='flex items-center gap-6 mb-6'>
                                <img src={item.img} alt="" />
                                <div className='flex-grow'>
                                    <h3 className='text-xl font-bold'>{item.name}</h3>
                                    <p>{item.designation}</p>
                                </div>
                                <FaQuoteLeft className='text-[#F7A582] text-[41px] font-semibold'></FaQuoteLeft>
                            </div>
                            <p className='text-lg leading-[26px]'>{item.comment}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
