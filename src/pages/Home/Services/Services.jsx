import bgImg from '../../../assets/service-bg.png'
import { useEffect, useState } from 'react';
const Services = () => {
    const [service, setService] = useState('Cavity Protection')
    const [serviceData, setServiceData] = useState({})
    const handleLinkClick = (name) => {
        console.log(name);
        setService(name)
    }
    useEffect(() => {
        fetch(`http://localhost:5000/demoServices/${service}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServiceData(data)
            })
    }, [service])
    return (
        <div className='lg:flex  justify-center gap-6 w-[90%] mx-auto mt-[130px]'>
            <img className="flex-1 " src={bgImg} alt="cover img" />
            <div className="flex-1" >
                <h2 className='text-[40px] font-bold'>Our Services</h2>
                <p className='leading-[26px] mt-5 mb-7'>Welcome to our Doc House comprehensive range of services designed to cater to all your oral health needs. At Doc House, our dedicated team of experienced professionals is committed to ensuring your smile health, beauty, and functionality. Our services encompass preventive dentistry, restorative treatments, and cosmetic enhancements, along with orthodontics, oral surgery, and pediatric dentistry. We also specialize in periodontal care and provide emergency dental services when you need us most. Whether you are seeking routine check-ups or more specialized treatments, we are here to deliver the highest standard of dental care. Your journey to a healthy, confident smile begins with us. Schedule an appointment today and experience the exceptional care and expertise that sets Doc House apart.</p>
                <div id="demoServices" className='border border-[#E6E6E6] flex justify-between rounded-[10px]'>

                    <button onClick={() => handleLinkClick('Cavity Protection')} className={`px-4 py-7 text-lg font-bold ${service === 'Cavity Protection' ? 'selected' : ''
                        }`}>Cavity Protection</button>


                    <button onClick={() => handleLinkClick('Cosmetic dentistry')} className='focus:bg-[#f7a582] focus:rounded-[10px] px-4 py-7 text-lg font-bold'>Cosmetic Dentistry</button>




                    <button onClick={() => handleLinkClick('Oral Surgery')} className='focus:bg-[#f7a582] focus:rounded-[10px] px-4 py-7 text-lg font-bold bg-transparent'>Oral Surgery</button>

                </div>
                <img className='mt-[50px] rounded-[10px] w-full' src={serviceData?.img} alt="" />
                <h3 className='text-[40px] mt-7 mb-5'>{serviceData?.name}</h3>
                <p className='leading-[26px]'>{serviceData?.description}</p>
                <button className='border-[#f7a582] border rounded-[10px] px-[27px] py-[14px] text-[#f7a582] text-xl mt-5 font-bold'>More Details</button>
            </div>
        </div>
    );
};

export default Services;