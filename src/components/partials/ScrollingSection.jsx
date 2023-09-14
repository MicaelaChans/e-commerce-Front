import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useState } from "react";
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
        translateX: "-295vw",
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
              src="https://media.adeo.com/marketplace/LMES/81874643/1830365.png?width=3000&height=3000&format=jpg&quality=80&fit=bounds"
              alt=""
            />
          </div>

          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://media.adeo.com/marketplace/LMES/17195094/1831403.jpeg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className={`scroll-img desktop ${
                isMobile ? "hide-on-desktop" : ""
              }`}
              src="https://img.interempresas.net/fotos/P2950841.jpeg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className={`scroll-img mobile ${
                isMobile ? "" : "hide-on-mobile"
              }`}
              src="https://media.adeo.com/marketplace/LMES/81874643/1830365.png?width=3000&height=3000&format=jpg&quality=80&fit=bounds"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollingSection;
