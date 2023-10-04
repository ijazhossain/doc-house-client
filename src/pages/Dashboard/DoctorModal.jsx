

const DoctorModal = ({ doctorDelete, setDoctorDelete, handleDelete }) => {
    return (
        <dialog id="doctor-delete-modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure?</h3>
                <p className="py-4">You want to delete <span className="uppercase font-bold">DR. {doctorDelete.name}</span>, Once you delete you can not be able to retrieve this.</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => {
                            handleDelete(doctorDelete)
                            setDoctorDelete(null)
                        }} className="bg-[#E11244] font-semibold px-[21px] py-[9px] rounded-[5px] text-[#FFF] mr-3" >Delete</button>
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default DoctorModal;