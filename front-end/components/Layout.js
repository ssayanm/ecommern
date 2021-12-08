import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div className="bg-pink-50  text-gray-800 font-body antialiased ">
      <Meta />
      <Header />
      <div className="z-0"> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
