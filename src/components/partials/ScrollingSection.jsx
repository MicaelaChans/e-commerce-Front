import "../../../src/Scroll.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState } from "react";
import "../../styles/ScrollSection.css";
function ScrollingSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 1,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer bk">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner position-relative d-flex"
        >
          <div className="scroll-section">
            <img
              className={`scroll-img desktop ${
                isMobile ? "hide-on-desktop" : ""
              }`}
              src="https://hips.hearstapps.com/hmg-prod/images/salon-colorido-con-chimenea-exenta-bauhaus-1602585438.jpg"
              alt=""
            />
            <img
              className={`scroll-img mobile ${
                isMobile ? "" : "hide-on-mobile"
              }`}
              src="https://hips.hearstapps.com/hmg-prod/images/salon-colorido-con-chimenea-exenta-bauhaus-1602585438.jpg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className={`scroll-img desktop ${
                isMobile ? "hide-on-desktop" : ""
              }`}
              src="https://www.jotul.co.uk/sites/uk/files/styles/desktop_homepage_story_background/public/2019-01/home_0.jpg?itok=Fcr9kT-k"
              alt=""
            />
            <img
              className={`scroll-img mobile ${
                isMobile ? "" : "hide-on-mobile"
              }`}
              src="../../../public/fotomobilefaltante.png"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className={`scroll-img desktop ${
                isMobile ? "hide-on-desktop" : ""
              }`}
              src="https://www.theheatingcentre.co.uk/wp-content/uploads/2022/03/Flavel-Arundel-multifuel-stove.jpg"
              alt=""
            />
            <img
              className={`scroll-img mobile ${
                isMobile ? "" : "hide-on-mobile"
              }`}
              src="https://media.adeo.com/marketplace/LMES/17195094/1831403.jpeg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className={`scroll-img desktop ${
                isMobile ? "hide-on-desktop" : ""
              }`}
              src="https://www.contura.eu/images/18.3c96363e1671040fdb269b/1542619585651/contura-330g-wood-burning-stove-design-house.jpg"
              alt=""
            />
            <img
              className={`scroll-img mobile ${
                isMobile ? "" : "hide-on-mobile"
              }`}
              src="https://www.contura.eu/images/18.5c7f7d6917826b21fa83a03/1617785576319/contura-556g-style-black-woodburning-stove.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    //
  );
}

export default ScrollingSection;
