import locationImg from '../../../assets/location.png';
import contactImg from '../../../assets/contact.png';

const Contact = () => {


    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="w-[90%] bg-[#07332F] mx-auto text-white my-[130px] rounded-[10px] p-[100px] flex items-center gap-8">
            <div className='w-[40%]'>
                <h2 className='text-[40px] font-bold mb-5'>Contact With Us</h2>
                <p className='mb-8 leading-[26px] text-justify'>Feel free to reach out to us with any questions, inquiries, or feedback. We are here to assist you and provide you with the information you need. Simply fill out the form below, and one of our representatives will get back to you as soon as possible. Your communication is important to us, and we look forward to hearing from you</p>
                <p className='mb-6'>
                    <img className='inline-block w-[30px] mr-4' src={contactImg} alt="" />
                    +88 01750 14 14 14
                </p>
                <p>
                    <img className='inline-block w-[30px] mr-4' src={locationImg} alt="" />
                    Dhanmondi, Dhaka, Bangladesh
                </p>
            </div>
            <form onSubmit={handleFormSubmit} className='w-[60%]' >
                <div className='grid grid-cols-2 gap-6'>
                    <input className='bg-[#133d39] px-[20px] text-white py-[19px] rounded-[10px]' type="text" placeholder='Name' />
                    <input className='bg-[#133d39] px-[20px] text-white py-[19px] rounded-[10px]' type="email" placeholder='Email' />
                    <input className='bg-[#133d39] px-[20px] text-white py-[19px] rounded-[10px]' type="phone" placeholder='Mobile Number' />
                    <input className='bg-[#133d39] px-[20px] text-white py-[19px] rounded-[10px]' type="text" placeholder='Doctor Name' />
                    <input className='bg-[#133d39] px-[20px] text-white py-[19px] rounded-[10px]' type="date" placeholder='Date' />
                    <input className='bg-[#133d39] px-[20px] text-white py-[19px] rounded-[10px]' type="time" placeholder='Time' />
                </div>
                <input className='text-xl font-bold bg-[#f7a582] rounded-[10px] w-full mt-[42px] text-center py-[18px]' type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default Contact;