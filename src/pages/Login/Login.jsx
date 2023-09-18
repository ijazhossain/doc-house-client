import coverImg from '../../assets/login.png'
const Login = () => {
    return (
        <div className='flex'>
            <div className='flex-1 bg-[#07332F] h-screen flex items-center justify-center'>
                <img src={coverImg} alt="" />
            </div>
            <div className='flex-1'>
                <form className='border border-[#e6e6e6] rounded-[10px] p-[50px] w-[80%] mx-auto mt-[50px]'>
                    <h2 className='text-[30px] text-center mb-[50px] font-bold'>Sign in to Doc House</h2>
                    <label className='text-xl font-semibold' htmlFor="email">Username or Email Address</label>
                    <input className='p-5 bg-[#F3F3F3] rounded-[10px] w-full mt-[10px] mb-[24px]' type="email" placeholder="Enter your username or address" />
                    <label className='text-xl font-semibold' htmlFor="password">Password</label>
                    <input className='p-5 bg-[#F3F3F3] rounded-[10px] w-full mt-[10px] mb-[24px]' type="email" placeholder="Enter your password" />
                    <input className='p-5 bg-[#F7A582] rounded-[10px] w-full mt-[10px] mb-[24px] text-white font-bold' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;