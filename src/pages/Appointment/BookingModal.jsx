import { format } from 'date-fns';
const BookingModal = ({ treatment, date }) => {
    // console.log(treatment.name);
    const { name, slots } = treatment;
    const selectedDate = format(date, 'PP');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        console.log(name, phone, email);

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
                    <input className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]' type="text" defaultValue={date} />
                    <select name="slot" className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]'>
                        {slots?.map((slot, index) => <option
                            key={index}
                            defaultValue={slot}
                        >{slot}</option>)}
                    </select>
                    <input name="name" className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]' type="text" placeholder="Full Name" />
                    <input name="phone" className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]' type="phone" placeholder="Phone Number" />
                    <input name="email" className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px] bg-[#E6E6E6]' type="email" placeholder="Email" />
                    <input className='w-full bg-[#07332F] text-[#D4D9E3] font-bold py-[13px] px-[11px] rounded-[10px]' type="submit" value="SUBMIT" />
                </form>

            </div>
        </dialog>
    );
};

export default BookingModal;