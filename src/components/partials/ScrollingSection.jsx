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
              src="../../../public/fotoscroll.png"
              alt=""
            />
          </div>
          <div className="scroll-section">
            <img
              className="scroll-img"
              src="https://images-ext-2.discordapp.net/external/qWUjc-1AmSpMyvURwWgeR9LpfZatMfYcfAI3iqn_jjA/https/panadero.com/wp-content/uploads/2023/04/reemplazar-estufa-lena.jpg?width=1681&height=925"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollingSection;
