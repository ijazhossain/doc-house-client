import { format } from 'date-fns';
const BookingModal = ({ treatment, date }) => {
    console.log(treatment.name);
    const { name, slots } = treatment;
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <h4 className="font-bold text-lg">{name}</h4>
                <form className='flex flex-col gap-[23px]'>
                    <input className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px]' type="text" value={format(date, 'PP')} />
                    <select className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px]'>
                        {slots.map((slot, index) => <option
                            key={index}
                            value={slot}
                        >{slot}</option>)}
                    </select>
                    <input className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px]' type="text" placeholder="Full Name" />
                    <input className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px]' type="phone" placeholder="Phone Number" />
                    <input className='w-full border border-[#CFCFCF] py-[13px] px-[11px] rounded-[10px]' type="email" placeholder="Email" />
                    <input className='w-full bg-[#07332F] text-[#D4D9E3] font-bold py-[13px] px-[11px] rounded-[10px]' type="submit" value="SUBMIT" />
                </form>

            </div>
        </dialog>
    );
};

export default BookingModal;