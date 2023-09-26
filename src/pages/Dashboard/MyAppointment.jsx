import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";

const MyAppointment = () => {
    const { user } = useAuth();
    const { data: appointments = [] } = useQuery({
        queryKey: ['userAppointments', user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/patient-appointments?email=${user.email}`)
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className="w-[90%] mx-auto mt-[19px] ">
            <h2 className="text-[24px] font-bold mb-[30px]" >My Appointments:  {appointments.length}</h2>
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
                            appointments.map((appointment, i) => <tr key={appointment._id}>
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