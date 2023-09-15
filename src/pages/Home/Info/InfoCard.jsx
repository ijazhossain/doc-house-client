const InfoCard = ({ img, cardTitle, description, bgColor }) => {
    return (
        <div className={`${bgColor} rounded-[10px] text-white flex gap-5 px-[35px] py-[50px]`}>
            <img className="w-[50px] h-[50px]" src={img} alt="clock Image" />
            <div>
                <h3 className="text-[25px] font-bold">{cardTitle}</h3>
                <p className="text-xl">{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;