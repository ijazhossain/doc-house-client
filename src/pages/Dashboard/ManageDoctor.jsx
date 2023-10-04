import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import DoctorModal from "./DoctorModal";

const ManageDoctor = () => {
    const [doctorDelete, setDoctorDelete] = useState(null);
    const handleDelete = (doctor) => {
        fetch(`http://localhost:5000/doctor/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `BEAREER ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`${doctor.name} is deleted successfully`)
                }
            })
    }
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['allDoctors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctor`, {
                method: 'GET',
                headers: {
                    authorization: `BEAREER ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;

        }
    })
    return (
        <div className="w-[90%] mx-auto mt-[19px] ">
            <h2 className="text-[24px] font-bold mb-[30px]" >All Doctors:  {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th> Email</th>
                            <th>
                                Specialty
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <img className="w-[40px] h-[40px] rounded-full" src={doctor.image} alt={doctor.name} />
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>


                                <td>
                                    <button className=" bg-[#E11244] font-semibold px-[21px] py-[9px] rounded-[5px] text-[#FFF]" onClick={
                                        async () => {
                                            await setDoctorDelete(doctor)
                                            document.getElementById('doctor-delete-modal').showModal()
                                        }}> Delete</button>


                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {doctorDelete && <DoctorModal
                doctorDelete={doctorDelete}
                setDoctorDelete={setDoctorDelete}
                handleDelete={handleDelete}
            ></DoctorModal>}
        </div>
    );
};

export default ManageDoctor;