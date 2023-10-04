import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // console.log(image_hosting_token);
    const onSubmit = (data) => {
        // console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(`https://api.imgbb.com/1/upload?key=${image_hosting_token}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.log(imageUrl);
                    const imageUrl = imgData.data.display_url;
                    const newDoc = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imageUrl
                    }
                    console.log(newDoc);
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `BEAREER ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newDoc)
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                reset();
                                toast.success('New doctor added')
                            } else {
                                toast.error('New doctor don not added')
                            }
                        })
                }

            })
    }
    const { data: services = [] } = useQuery({
        queryKey: ['service'], queryFn: async () => {
            const res = await fetch("http://localhost:5000/appointment");
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })
    return (
        <div
            className=' w-[80%] mx-auto mt-[30px]'
        >
            <h2 className="text-[24px] font-bold mb-[30px]" >Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}
                className='rounded-[20px] p-[50px] mt-[50px] bg-white'
            >
                <label className='text-xl font-semibold' htmlFor="name">Name</label>
                <input {...register("name", { required: true })} className='p-5 border border-[#CFCFCF] rounded-[10px] w-full mt-[20px] mb-[20px]' type="text" placeholder="Enter your name or address" />
                {errors.name && <p className='text-red-600 mb-[24px]'>This field is required</p>}

                <label className='text-xl font-semibold' htmlFor="email">Username or Email Address</label>
                <input {...register("email", { required: true })} className='p-5 border border-[#CFCFCF] rounded-[10px] w-full mt-[20px] mb-[20px]' type="email" placeholder="Enter your username or address" />
                {errors.email && <p className='text-red-600 mb-[24px]'>This field is required</p>}
                <label className='text-xl font-semibold' htmlFor="email">Specialty</label>
                <select {...register("specialty", { required: true })} className="block mt-[20px] mb-[20px] select select-bordered w-full max-w-xs">
                    {
                        services.map(service => <option
                            key={service._id}
                        >{service.name}</option>)
                    }


                </select>


                <label className='text-xl font-semibold' htmlFor="password">Doctor&apos;s Photo</label>
                <input {...register("image", { required: true })} type="file" className="block mt-[20px] mb-[20px] file-input file-input-bordered w-full max-w-xs" />

                <input className='cursor-pointer p-4 bg-[#07332F] rounded-[10px] w-full mt-[20px] mb-[24px] text-white font-bold' type="submit" value="Add Doctor" />

            </form>
        </div>
    );
};

export default AddDoctor;