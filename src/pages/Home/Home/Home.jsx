import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Info from "../Info/Info";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Info></Info>
            <Doctors></Doctors>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;