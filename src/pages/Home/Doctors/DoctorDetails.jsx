import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionCover from "../../../components/Shared/SectionCover";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FaBehance, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
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
const DoctorDetails = () => {
    const { id } = useParams();
    const [doctorDetails, setDoctorDetails] = useState({})
    const [loading, setLoading] = useState(true);
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/doctors/${id}`)
            .then(res => res.json())
            .then(data => {
                setDoctorDetails(data);
                setLoading(false);
            })
    }, [id])
    if (loading) {
        return <div className="flex items-center justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }
    console.log(doctorDetails);
    return (
        <div className="bg-[#F3F3F3]">
            <SectionCover
                sectionTitle={"Home / Doctor Profile"}
                sectionName={"Doctor Profile"}
            ></SectionCover>
            <div className="w-[80%] mx-auto mt-[130px] flex rounded-[10px] text-[#6C6B6B]  gap-[30px] bg-white p-[35px]">
                <div>
                    <img className="w-[358px] h-[365px]" src={doctorDetails.img} alt="" />
                </div>
                <div>
                    <h2 className="text-[40px] font-bold text-[#0A0808] mb-[20px]">{doctorDetails.name}</h2>
                    <p className="mb-[10px]">{doctorDetails.designation}</p>
                    <div className="flex gap-[15px]">
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={doctorDetails.ratings}
                            itemStyles={customStyles}
                            readOnly
                        />
                        <span>(35)</span>
                    </div>
                    <p className="mb-5 mt-[10px]">
                        <FontAwesomeIcon className="me-5" icon={faLocationDot} />
                        {doctorDetails.location}
                    </p>
                    <div className="flex gap-[12px] mt-[30px] mb-[25px]">
                        <div className="bg-[#F7A582] p-3 rounded-full">
                            <FaFacebookF className="text-[20px] text-white"></FaFacebookF>
                        </div>
                        <div className="bg-[#F7A582] p-3 rounded-full">
                            <FaInstagram className="text-[20px] text-white"></FaInstagram>
                        </div>
                        <div className="bg-[#F7A582] p-3 rounded-full">
                            <FaTwitter className="text-[20px] text-white"></FaTwitter>
                        </div>
                        <div className="bg-[#F7A582] p-3 rounded-full">
                            <FaBehance className="text-[20px] text-white"></FaBehance>
                        </div>
                    </div>
                    <button className="border border-[#6C6B6B] px-[23px] py-[10px] rounded-[10px] text-xl font-semibold  me-[15px]">{doctorDetails?.expertise[0]}</button>
                    <button className="border border-[#6C6B6B] px-[23px] py-[10px] rounded-[10px] text-xl font-semibold mt-[20px]">{doctorDetails?.expertise[1]}</button>
                </div>

            </div>
            <div className="w-[80%] mx-auto mt-[130px] flex rounded-[10px] text-[#6C6B6B]  gap-[30px] bg-white p-[35px]">
                <div>
                    <h3>About Me</h3>
                    <p>{doctorDetails.about}</p>

                    <div className="flex items-start">
                        <div className="flex-1">
                            <h3>Education</h3>
                            {
                                doctorDetails.Education.map((item, index) => <div key={index}>
                                    <li>{item.institutionName}</li>
                                    <p>{item.Degree}</p>
                                    <p>{item.passingYear}</p>
                                </div>)
                            }

                            <h3>Work & Experience</h3>
                            {
                                doctorDetails.work.map((item, index) =>
                                    <div key={index}>
                                        <li>{item.hospitalName}</li>
                                        <p>{item.duration}</p>
                                    </div>
                                )
                            }
                            <h3>Services</h3>
                            {
                                doctorDetails.services.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </div>
                        <div className="flex-1">
                            <h3>Awards</h3>
                            {
                                doctorDetails.awards.map((item, index) => <div key={index}>
                                    <p>{item.date}</p>
                                    <li>{item.title}</li>
                                    <p>{item.details}</p>
                                </div>)
                            }
                            <h3>Specializations</h3>
                            {
                                doctorDetails.specializations.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;