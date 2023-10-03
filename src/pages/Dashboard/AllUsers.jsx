import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate()
    const makeAdmin = (user) => {
        fetch(`http://localhost:5000/user/admin/${user?._id}`, {
            method: 'PUT',
            headers: { authorization: `BEAREER ${localStorage.getItem('accessToken')}` },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch(),
                        toast(`${user.email} is admin now`)

                }
            })
    }
    const { data: users = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users', {
                method: 'GET',
                headers: {
                    authorization: `BEAREER ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            if (data.error) {
                localStorage.removeItem('accessToken')
                logOut()
                navigate('/')
                return;
            }
            return data;


        }
    })

    return (
        <div className="w-[90%] mx-auto mt-[19px] ">
            <h2 className="text-[24px] font-bold mb-[30px]" >My Appointments:  {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>

                            <th>Email</th>
                            <th> Action</th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.email}</td>

                                <td>
                                    {user?.role === 'admin' ? 'ADMIN' : <button onClick={() => makeAdmin(user)} className="bg-[#07332F] font-semibold px-[21px] py-[9px] rounded-[5px] text-[#FFF]" >Make Admin</button>}
                                </td>
                                <td>
                                    <button className="bg-[#07332F] font-semibold px-[21px] py-[9px] rounded-[5px] text-[#FFF]" >Make user</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;