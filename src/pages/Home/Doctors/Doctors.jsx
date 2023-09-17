import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setDoctors(data)
            })
    }, [])
    return (
        <div className="w-[90%] mx-auto">
            <div className="w-[80%] mx-auto text-center">
                <h2 className="text-[40px] font-bold mb-5">Our Expert Doctors</h2>
                <p className="leading-[26px] mb-[70px]">Presenting profiles of three highly skilled and dedicated healthcare professionals who have made significant contributions to their respective fields. These doctors are recognized for their expertise, commitment to patient care, and outstanding achievements in their careers.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    doctors.map(doctor => <DoctorCard
                        key={doctor._id}
                        doctor={doctor}
                    ></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default Doctors;