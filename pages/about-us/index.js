import HeroMain from "../../Components/AboutUs/Hero/HeroMain";
import SectionTwo from "../../Components/AboutUs/Section2/SectionTwo";
import BrandName from "../../Common/BrandName";
import Footer from "../../Common/Footer/Footer";


const index = () => {
    return (
        <>
            <div className="main-bg">
                <BrandName/>
                <div className="main_body"> 
                    <HeroMain />
                    <SectionTwo />
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default index;
