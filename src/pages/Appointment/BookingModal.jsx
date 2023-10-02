import { format } from 'date-fns';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { user } = useAuth()
    // console.log(treatment.name);
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'PP');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const slot = form.slot.value
        const bookings = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientName: user?.displayName,
            patient: user?.email,
            phone
        }
        // console.log(bookings);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success && data.result.insertedId) {
                    refetch()
                    toast.success(`Appointment is set ${formattedDate} at ${slot}`)
                } else {
                    toast.error(`Already have an appointment ${formattedDate} at ${slot}`)
                }
                setTreatment(null)
            })

    }
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-[#07332F] text-white">✕</button>
                </form>

                <h4 className="font-bold text-[28px] mb-[30px]">{name}</h4>
                <form onSubmit={handleFormSubmit} className='flex flex-col gap-[23px]'>
                    <input className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]' type="text" defaultValue={formattedDate} readOnly />
                    <select name="slot" className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]'>
                        {slots?.map((slot, index) => <option
                            key={index}
                            defaultValue={slot}
                        >{slot}</option>)}
                    </select>
                    <input name="name" className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]' type="text" placeholder="Full Name" defaultValue={user?.displayName ? user?.displayName : ''} readOnly />
                    <input name="email" className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]' type="email" placeholder="Email" defaultValue={user?.email ? user?.email : ''} readOnly />
                    <input name="phone" className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]' type="phone" placeholder="Phone Number" />
                    <input className='w-full bg-[#07332F] text-[#D4D9E3] font-bold py-[13px] px-[11px] rounded-[10px]' type="submit" value="SUBMIT" />
                </form>

            </div>
        </dialog>
    );
};

export default BookingModal;