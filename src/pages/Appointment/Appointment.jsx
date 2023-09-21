import { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import { format } from 'date-fns';
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <div >
                <p className='text-[#F7A582] text-[22px] text-center mt-[-50px]'>Available Services on {format(date, 'PP')}</p>
                <h2 className='text-[40px] font-bold text-center mt-3 mb-[50px]'>Please select a service</h2>
            </div>
        </div>
    );
};

export default Appointment;