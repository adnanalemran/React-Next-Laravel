
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router';
 

const LandingLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LandingLayout;