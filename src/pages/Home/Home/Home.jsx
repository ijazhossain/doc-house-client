import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
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
            <Reviews></Reviews>
            <Doctors></Doctors>
            <Contact></Contact>

        </div>
    );
};

export default Home;