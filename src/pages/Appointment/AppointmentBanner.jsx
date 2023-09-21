import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import SectionCover from '../../components/Shared/SectionCover';
import chairImg from '../../assets/chair.png'
import bgImg from '../../assets/appointment-bg.png'
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <SectionCover sectionTitle="Home / Appointment" sectionName="Appointment"></SectionCover>
            <div style={{
                backgroundImage: `url('${bgImg}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // height: '800px',
                backgroundPosition: '0px -150px'


            }}>
                <div className='w-[90%] mx-auto lg:flex items-center justify-center gap-[100px] py-[130px]'>
                    <DayPicker
                        className='bg-white p-6 rounded-[10px]'
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <img className='mt-[50px] lg:mt-[0px] lg:w-1/2 ' src={chairImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default AppointmentBanner;