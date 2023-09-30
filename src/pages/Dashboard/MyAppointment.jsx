// import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyAppointment = () => {
    const { user, loading, logOut } = useAuth();
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    /* const { data: appointments = [] } = useQuery({
        queryKey: ['userAppointments', user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/patient-appointments?email=${user?.email}`, {
                headers: {
                    authorization: `BEAREER ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            console.log(data);
            return data;
        }
    }) */
    useEffect(() => {
        fetch(`http://localhost:5000/patient-appointments?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `BEAREER ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('accessToken')
                    logOut()
                    navigate('/')

                }
                return res.json()
            })
            .then(data => setAppointments(data))
    }, [user?.email])
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="w-[90%] mx-auto mt-[19px] ">
            <h2 className="text-[24px] font-bold mb-[30px]" >My Appointments:  {appointments?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th> Time</th>
                            <th>
                                Payment
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            appointments?.map((appointment, i) => <tr key={appointment._id}>
                                <th>{i + 1}</th>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>
                                    <button className="bg-[#07332F] font-semibold px-[21px] py-[9px] rounded-[5px] text-[#FFF]" >Pay</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;