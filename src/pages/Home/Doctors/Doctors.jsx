import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import SectionTitle from "../../../components/Shared/SectionTitle";

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
            <SectionTitle title="Our Expert Doctors" description="Presenting profiles of three highly skilled and dedicated healthcare professionals who have made significant contributions to their respective fields. These doctors are recognized for their expertise, commitment to patient care, and outstanding achievements in their careers."></SectionTitle>
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