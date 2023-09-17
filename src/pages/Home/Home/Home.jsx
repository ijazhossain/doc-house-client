import Navbar from "../../../components/Shared/Navbar";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Info from "../Info/Info";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Info></Info>
            <Doctors></Doctors>

        </div>
    );
};

export default Home;