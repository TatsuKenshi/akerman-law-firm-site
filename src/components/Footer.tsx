import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-8 bg-sky-900 text-white">
      {/* content section */}
      <section className="max-w-[1200px] mx-auto h-full flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>Advokat Sara Akerman</h4>
          <div className="h-[4px] w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>O Nama</h4>
          <div className="h-[4px] w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
          <p>
            Sediste Kancelarije: <br /> Ruzveltova 10, 11000 Beograd
          </p>
          <p>
            Radno Vreme: <br /> Ponedeljak - Petak 09h-17h
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>Kontakt</h4>
          <div className="h-[4px] w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
          <p>
            Telefon: <br /> (+381)64/123-45-67
          </p>
          <p>
            Email adresa: <br /> www.sarakerman@gmail.com
          </p>
          <p>
            Nadjite nas na: <br />{" "}
            <span className="flex">
              <span className="mr-8">
                <FaFacebook />
              </span>
              <span className="mr-8">
                <FaInstagram />
              </span>
              <span>
                <FaTwitter />
              </span>
            </span>
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>Linkovi</h4>
          <div className="h-[4px] w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
          <p>
            <Link to="/workareas">Work Areas</Link>
          </p>
        </div>
        <div className="h-[4px] w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 mx-auto my-2"></div>
      </section>

      {/* copyright section */}
      <section className="max-w-[1200px] mx-auto text-center">
        <h5 className="mr-1">
          &copy; {new Date().getFullYear()}
          <span className="ml-1">Sara Akerman</span>
        </h5>
        <h5 className="ml-1">All rights reserved.</h5>
      </section>
    </footer>
  );
};

export default Footer;
