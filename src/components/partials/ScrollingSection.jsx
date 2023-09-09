import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollingSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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
          end: "2000 top",
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
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-secction-inner">
          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://cdn.elobservador.com.uy/072019/1563303471992.jpg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://cdn.elobservador.com.uy/072019/1563303471992.jpg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://cdn.elobservador.com.uy/072019/1563303471992.jpg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://cdn.elobservador.com.uy/072019/1563303471992.jpg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://cdn.elobservador.com.uy/072019/1563303471992.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollingSection;
