
const AppointmentCard = ({ appointment, setTreatment }) => {
    // console.log(appointment);
    const { img, name, slots } = appointment;

    return (
        <div style={{ boxShadow: '3px 4px 10px 2px rgba(0, 0, 0, 0.05)' }} className="rounded-[10px]  p-[60px]">
            <div className="w-[138px] h-[138px] rounded-full bg-[#FD47550D] flex items-center justify-center mb-[30px] mx-auto">
                <img src={img} alt="appointment img" />
            </div>
            <h4 className=" text-[#3B3A3A] text-[25px] font-bold">{name}</h4>
            <p className="mt-[10px] text-[14px] font-semibold">{slots[0]}</p>
            <button onClick={() => {
                document.getElementById('my_modal_3').showModal();
                setTreatment(appointment)
            }
            } className="btn bg-[#F7A582] py-[15px] mt-[55px] px-[23px] text-white rounded-[10px] text-[14px] font-bold">Book Appointment</button>

        </div>
    );
};

export default AppointmentCard;