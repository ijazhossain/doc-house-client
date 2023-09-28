import { Link, useLocation, useNavigate } from 'react-router-dom';
import coverImg from '../../assets/login.png';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useToken from '../../Hooks/useToken';
import { useEffect } from 'react';
const Login = () => {
    const { user, signIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(location);


    const [token] = useToken(user);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    const onSubmit = data => {
        // console.log(data)
        signIn(data.email, data.password)
            .then((result) => {
                console.log(result.user)
                // navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='flex'>
            <div className='flex-1 bg-[#07332F] h-screen flex items-center justify-center'>
                <img src={coverImg} alt="" />
            </div>
            <div className='flex-1'>
                <div className='border border-[#e6e6e6] rounded-[10px] p-[50px] w-[80%] mx-auto mt-[50px]'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-[30px] text-center mb-[50px] font-bold'>Sign in to Doc House</h2>
                        <label className='text-xl font-semibold' htmlFor="email">Username or Email Address</label>
                        <input {...register("email", { required: true })} className='p-5 bg-[#F3F3F3] rounded-[10px] w-full mt-[10px] mb-[10px]' type="email" placeholder="Enter your username or address" />
                        {errors.email && <p className='text-red-600 mb-[24px]'>This field is required</p>}

                        <label className='text-xl font-semibold' htmlFor="password">Password</label>
                        <input {...register("password", { required: true })} className='p-5 bg-[#F3F3F3] rounded-[10px] w-full mt-[10px] mb-[10px]' type="password" placeholder="Enter your password" />
                        {errors.password && <p className='text-red-600 mb-[24px]'>This field is required</p>}

                        <input className='p-4 bg-[#F7A582] rounded-[10px] w-full mt-[10px] mb-[24px] text-white font-bold' type="submit" value="Login" />
                    </form>
                    <p className='text-lg text-center '>
                        New To Doc House? <Link className='text-[#F7A582] font-semibold' to="/register">Create New Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;