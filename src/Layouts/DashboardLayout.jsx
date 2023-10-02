import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
    const [admin] = useAdmin();
    // console.log(admin);
    return (
        <div className="drawer lg:drawer-open bg-[#f1f5f9]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col 
            ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="w-[200px] btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#FFF] text-base-content">
                    {/* Sidebar content here */}
                    {admin && <li><Link to='/dashboard/allUsers'>All Users</Link></li>}
                    <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                    <li><Link to='/dashboard/myAppointment'>My Appointment</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;