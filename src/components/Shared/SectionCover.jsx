const SectionCover = ({ sectionTitle, sectionName }) => {
    return (
        <div className="h-[500px] bg-[#07332F] flex items-center text-white ">
            <div className="w-[90%] mx-auto">
                <p className="text-lg">{sectionTitle}</p>
                <h2 className="text-[45px] font-bold">{sectionName}</h2>
            </div>
        </div>
    );
};

export default SectionCover;