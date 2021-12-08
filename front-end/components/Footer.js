import Social from "./Social";

const Footer = () => {
  return (
    <footer className="relative  pt-8 pb-6 bg-black text-white">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 text-center md:text-left">
            <h4 className="text-4xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 ">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <Social />
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6 mt-8 lg:mt-0">
              <div className="w-full lg:w-4/12 ml-auto text-center md:text-left">
                <span className="block uppercase text-sm font-semibold mb-2 text-pink-600">
                  Useful Links
                </span>
                <ul className="">
                  <li>
                    <a
                      className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="/about-pleasant"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-50  hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="/posts"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="/contact-pleasant"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold py-1">
              Copyright © {new Date().getFullYear()} ZoroShop <br />
              Website designed by{" "}
              <a
                href="https://www.sayanmukherjee.com/"
                className="text-indigo-500 hover:text-gray-900"
              >
                Sayan Mukherjee
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
