import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
const Navbar = () => {
    const { user, logOut } = useAuth();
    const [navbarColor, setNavbarColor] = useState('bg-transparent');
    const [textColor, setTextColor] = useState('text-white');


    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavbarColor('bg-white');
            setTextColor('text-black');
        } else {
            setNavbarColor('bg-transparent');
            setTextColor('text-white');
        }
    };
    const handleLogout = () => {
        logOut()
        localStorage.removeItem('accessToken')
            .then(() => {
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`navbar fixed ${navbarColor} z-50`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/' className={`flex items-center gap-[10px] ${textColor}`}>
                    <img className='w-[61px] h-[61px]' src={logo} alt="" />
                    <p className='text-[35px] font-bold'><span className='text-[#F7A582] '>Doc</span> House</p>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 ${textColor}`}>
                    <li>
                        <Link className='font-semibold text-lg' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='font-semibold text-lg' to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className='font-semibold text-lg' to='/appointment'>Appointment</Link>
                    </li>
                    <li>
                        {user && <Link className='font-semibold text-lg' to='/dashboard/my-appointment'>Dashboard</Link>}
                    </li>
                    <li>
                        {user ? <Link onClick={handleLogout} className='font-semibold text-lg' to='/login'>Logout</Link> : <Link className='font-semibold text-lg' to='/login'>Login</Link>}
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;