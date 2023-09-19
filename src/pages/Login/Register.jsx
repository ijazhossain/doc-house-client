import { Link } from 'react-router-dom';
import coverImg from '../../assets/login.png'
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
const Register = () => {
    const { createUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                // console.log('newUser', result.user);
                updateProfile(result.user, {
                    displayName: data.name, photoURL: data.photo
                }).then(() => {
                    sendEmailVerification(result.user)
                        .then(() => {
                            // Email verification sent!
                            Swal.fire({
                                title: 'Registration Successful, Please verify email',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        });
                }).catch((error) => {
                    console.log('user update', error.message);
                });

            })
            .catch(error => {
                console.log(error.message)
            })

    };
    return (
        <div className='flex h-full'>
            <div className='flex-1 bg-[#07332F] max-h-fit flex items-center justify-center'>
                <img src={coverImg} alt="" />
            </div>
            <div className='flex-1'>
                <div className='border border-[#e6e6e6] rounded-[10px] p-[50px] w-[80%] mx-auto mt-[50px]'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-[30px] text-center mb-[50px] font-bold'>Create account to Doc House</h2>

                        <label className='text-xl font-semibold' htmlFor="name">Name</label>
                        <input {...register("name", { required: true })} className='p-5 bg-[#F3F3F3] rounded-[10px] w-full mt-[10px] mb-[10px]' type="text" placeholder="Enter your name or address" />
                        {errors.name && <p className='text-red-600 mb-[24px]'>This field is required</p>}

                        <label className='text-xl font-semibold' htmlFor="name">PhotoUrl</label>
                        <input {...register("photo", { required: true })} className='p-5 bg-[#F3F3F3] rounded-[10px] w-full mt-[10px] mb-[10px]' type="text" placeholder="Enter your photoUrl" />
                        {errors.photo && <p className='text-red-600 mb-[24px]'>This field is required</p>}

                        <label className='text-xl font-semibold' htmlFor="email">Username or Email Address</label>
                        <input {...register("email", { required: true })} className='p-5 bg-[#F3F3F3] rounded-[10px] w-full mt-[10px] mb-[10px]' type="email" placeholder="Enter your username or address" />
                        {errors.email && <p className='text-red-600 mb-[24px]'>This field is required</p>}

                        <label className='text-xl font-semibold' htmlFor="password">Password</label>
                        <input {...register("password", { required: true })} className='p-5 bg-[#F3F3F3] rounded-[10px] w-full mt-[10px] mb-[10px]' type="password" placeholder="Enter your password" />
                        <input className='p-4 bg-[#F7A582] rounded-[10px] w-full mt-[10px] mb-[24px] text-white font-bold' type="submit" value="Create Account" />
                        {errors.password && <p className='text-red-600 mb-[24px]'>This field is required</p>}
                    </form>
                    <p className='text-lg text-center '>
                        Already Registered? Go to <Link className='text-[#F7A582] font-semibold' to="/login">SIGN IN</Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Register;