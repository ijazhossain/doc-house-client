import clockImg from '../../../assets/clock.png';
import locationImg from '../../../assets/location.png';
import contactImg from '../../../assets/contact.png';
import InfoCard from './InfoCard';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-[130px]'>
            <InfoCard cardTitle="Opening Hours" description='Open 9.00 am to 5.00pm Everyday' img={clockImg} bgColor="bg-[#07332F]"></InfoCard>
            <InfoCard cardTitle="Our Locations" description='Dhanmondi 17, Dhaka -1200, Bangladesh' img={locationImg} bgColor="bg-[#F7A582]"></InfoCard>
            <InfoCard cardTitle="Contact Us" description='+000 123 456789' img={contactImg} bgColor="bg-[#07332F]"></InfoCard>
        </div>
    );
};

export default Info;