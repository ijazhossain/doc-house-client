
const SectionTitle = ({ description, title }) => {
    return (
        <div className="w-[80%] mx-auto text-center mt-[130px]">
            <h2 className="text-[40px] font-bold mb-5">{title}</h2>
            <p className="leading-[26px] mb-[70px]">{description}</p>
        </div>
    );
};

export default SectionTitle;