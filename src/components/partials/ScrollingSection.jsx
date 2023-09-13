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
        translateX: "-217vw",
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
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner position-relative d-flex"
        >
          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://cdn.palbincdn.com/users/18409/images/BOHEME-CATALOGO-WEB-1645121171.jpg"
              alt=""
            />
          </div>

          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://i.blogs.es/a08dd1/estufas/1366_2000.jpg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://cdn.palbincdn.com/users/18409/images/BERGEN-CATALOGO-WEB-1645118598.jpg"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://fotografias.flooxernow.com/clipping/cmsimages02/2017/05/17/6A6AA009-4B58-4942-9CF9-C8F1573BCF8A/98.jpg?crop=1600,900,x0,y85&width=1900&height=1069&optimize=high&format=webply"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollingSection;
