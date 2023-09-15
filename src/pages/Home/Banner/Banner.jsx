import bgImg1 from '../../../assets/banner-1.png'
import bgImg2 from '../../../assets/banner-2.png'
import bgImg3 from '../../../assets/banner-3.png'
import bgDot from '../../../assets/banner-bg-1.png'
const Banner = () => {
    return (
        <div className='bg-[#07332F] h-[800px] '>
            <div className='w-[90%] mx-auto  lg:flex items-center justify-center h-full'>
                <div className='flex-1 text-[#f3f3f3]'>
                    <h1 className='text-[75px] font-semibold mb-5'>Your Best Medical Help Center</h1>
                    <p className='mb-7 font-semibold text-[18px]'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button className='px-[30px] py-[18px] bg-[#F7A582] rounded-[10px] text-[20px] font-bold'>All Services</button>
                </div>
                <div className='flex-1'>
                    <div className=' relative mt-[-150px]'>
                        <img className='absolute z-20 ' src={bgImg1} alt="banner image" />
                        <img className='absolute left-[300px] top-[-50px] z-40' src={bgImg2} alt="banner image" />
                        <img className='absolute top-[125px] left-[140px] z-30' src={bgImg3} alt="banner image" />
                        <img className='absolute top-[206px] z-10' src={bgDot} alt="banner image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;