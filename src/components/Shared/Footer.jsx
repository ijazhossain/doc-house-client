import { Link } from "react-router-dom";
import logo from '../../assets/black-logo.png'
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className="bg-[#F3F3F3] pt-[100px]">
            <div className="w-[90%] mx-auto grid grid-cols-5 gap-[100px]">
                <div className="col-span-2">

                    <Link to='/' className={`flex items-center gap-[10px] `}>
                        <img className='w-[61px] h-[61px]' src={logo} alt="" />
                        <p className='text-[35px] font-bold'><span className='text-[#F7A582] '>Doc</span> House</p>
                    </Link>

                    <p className="leading-[26px] my-[30px] text-justify text-[#3B3A3A]">
                        At Doc House, we value your connection with us. Keep up to date with the latest news, updates, and offers by following us on social media. Subscribe to our newsletter to receive exclusive content and special promotions directly to your inbox. We appreciate your continued support and look forward to serving you.
                    </p>
                    <button className="text-xl font-bold py-[14px] rounded-[10px] border border-[#F7A582] hover:bg-[rgb(247,165,130)] w-full text-[#F7A582] hover:text-white mt-5">Appointment</button>
                </div>
                <ul className="flex flex-col gap-6 text-[#6C6B6B]">
                    <h3 className="text-[25px] font-bold">Quick Links</h3>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Doctors</li>
                    <li>Departments</li>
                    <li>Contact Us</li>
                    <li>My Account</li>
                </ul>
                <ul className="flex flex-col gap-6 text-[#6C6B6B]">
                    <h3 className="text-[25px] font-bold">Services</h3>
                    <li>Pediatric Clinic</li>
                    <li>Diagnosis Clinic</li>
                    <li>Cardiac Clinic</li>
                    <li>Laboratory Analysis</li>
                    <li>Gynecological Clinic</li>
                    <li>Personal Counseling</li>
                    <li>Dental Clinic</li>
                </ul>
                <ul className="flex flex-col gap-6 text-[#6C6B6B]">
                    <h3 className="text-[25px] font-bold">Working Hours</h3>
                    <li>Monday - 10 am to 7 pm</li>
                    <li>Tuesday - 10 am to 7 pm</li>
                    <li>Wednesday - 10 am to 7 pm</li>
                    <li>Thursday - 10 am to 7 pm</li>
                    <li>Friday - 10 am to 7 pm</li>
                    <li>Saturday - 10 am to 7 pm</li>
                    <li>Sunday - 10 am to 7 pm</li>
                </ul>

            </div>
            <hr className="mt-[70px] bg-[#CECECE] h-[1px] w-[90%] mx-auto" />
            <p className="text-center py-[50px] text-[#6C6B6B]">Copyright © {year} - All right reserved by Doc House Ltd</p>
        </div>
    );
};

export default Footer;