import Navbar from "../../../components/Shared/Navbar";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Info></Info>

        </div>
    );
};

export default Home;