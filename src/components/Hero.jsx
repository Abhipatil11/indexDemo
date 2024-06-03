import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import Logo from "../images/phone.png"; // Assuming you want to use phone.png as logo
import { useEffect, useState } from "react";
import '../components/Hero.css'; // Custom CSS for z-index and other styles

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    document.querySelector("#booking-section").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container position-relative">
        <img className="bg-shape position-absolute" src={BgShape} alt="bg-shape" />
        <div className="hero-content text-center position-relative">
          <div className="hero-content__header d-flex justify-content-between align-items-center mb-4 fixed-phone">
            <a href="tel:8275829980">
              <img src={Logo} alt="logo" className="hero-content__logo" />
            </a>
            <a href="tel:8275829980" className="hero-content__phone">Call Us: 8275829980</a>
          </div>
          <div className="hero-content__text">
            <h1>JAY BHOLE</h1>
            <h1>
              TOURS <span>AND</span> TRAVELS our car rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="hero-content__text__btns d-flex justify-content-center">
              <Link
                onClick={bookBtn}
                className="btn btn-primary mr-3"
                to="/"
              >
                Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
              </Link>
              <Link className="btn btn-secondary" to="/">
                Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
              </Link>
              <a className="btn btn-secondary" href="tel:8275829980">
                Call Us &nbsp; <i className="fa-solid fa-phone"></i>
              </a>
              <a className="btn btn-secondary" href="tel:1234567890">
                Call Us &nbsp; <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
          <img src={HeroCar} alt="car-img" className="hero-content__car-img img-fluid mt-4" />
        </div>
      </div>
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""} position-fixed`}
        style={{ zIndex: 9999 }}
      >
        <i className="fa-solid fa-angle-up"></i>
      </div>
    </section>
  );
}

export default Hero;
