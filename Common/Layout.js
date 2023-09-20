import BrandName from "./BrandName";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <BrandName />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
