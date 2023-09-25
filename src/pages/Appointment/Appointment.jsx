import { useEffect, useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import { format } from 'date-fns';
import AppointmentCard from "./AppointmentCard";
import BookingModal from "./BookingModal";
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAppointments(data)
            })
    }, [formattedDate])
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <div >
                <p className='text-[#F7A582] text-[22px] text-center mt-[50px]'>Available Services on {format(date, 'PP')}</p>
                <h2 className='text-[40px] font-bold text-center mt-3 mb-[50px]'>Please select a service</h2>
            </div>
            <div className="grid lg:grid-cols-3 text-center w-[90%] mx-auto gap-[22px] mt-[50px] mb-[130px]">
                {
                    appointments.map(appointment => <AppointmentCard
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></AppointmentCard>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default Appointment;