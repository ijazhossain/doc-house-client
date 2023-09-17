import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faDollar, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FaBeer, FaDollarSign } from 'react-icons/fa';
const StarDrawing = (
    <path
        d="M398.799,141.794c-43.394-3.977-86.776-6.52-130.158-8.418C258.835,99.302,242.633-4.751,193.173,0.169
    c-39.659,3.944-61.012,90.515-73.08,130.306c-32.333,0.283-64.692,1.062-97.09,2.416c-14.735,0.615-27.908,17.9-18.207,31.732
    c19.157,27.316,44.198,49.389,70.487,70.103c-11.83,38.196-21.665,77.499-29.759,116.53c-3.504,16.91-5.31,32.212,3.881,44.82
    c2.411,9.987,12.018,18.494,22.429,18.029c51.805-2.313,93.872-44.738,133.991-77.119c33.156,26.317,66.309,52.64,99.475,78.951
    c12.835,10.183,37.057,5.178,35.798-14.828c-3.039-48.158-15.477-96.473-30.599-144.041c32.951-25.229,65.899-50.459,99.11-75.353
    C426.818,168.817,420.858,143.814,398.799,141.794z"
    />
);
const customStyles = {
    itemShapes: StarDrawing,
    activeFillColor: '#F2871D',
    inactiveFillColor: '#a1a1a1',
};
const DoctorCard = ({ doctor }) => {
    console.log(doctor);
    const { _id, name, thumbnailImg, visit, designation, location, ratings } = doctor;
    return (
        <div className="text-[#6C6B6B] p-5 border border-[#E6E6E6] rounded-[10px] ">
            <img className=" w-full" src={thumbnailImg} alt="doctor thumbnail" />

            <h3 className="text-xl font-bold text-[#131313] mt-5">{name}</h3>
            <p className="my-[10px]">{designation}</p>
            <Rating
                style={{ maxWidth: 100 }}
                value={ratings}
                itemStyles={customStyles}
                readOnly
            />
            <hr className="my-5" />

            <p>
                <FontAwesomeIcon className="me-5" icon={faLocationDot} />
                {location}
            </p>
            <p className="my-[10px]">
                <FontAwesomeIcon className="me-5" icon={faCalendar} />
                Available On Mon, 23 December
            </p>
            <p>
                <FontAwesomeIcon className="me-5" icon={faCircleDollarToSlot} />
                ${visit}
            </p>
            <button className="text-xl font-bold py-[14px] rounded-[10px] border border-[#F7A582] hover:bg-[rgb(247,165,130)] w-full text-[#F7A582] hover:text-white mt-5">View Profile</button>

        </div>
    );
};

export default DoctorCard;