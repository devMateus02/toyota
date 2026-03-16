import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro() {
  const pathsRef = useRef([]);

  useEffect(() => {
    const paths = pathsRef.current;

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    const tl = gsap.timeline();

    tl.to(paths, {
      strokeDashoffset: 0,
      delay: 1,
      duration: 2.5,
      stagger: 0.9,
      ease: "power2.out",
    });

    tl.to(".toyota-logo", {
      filter: "drop-shadow(0 0 25px rgba(255,255,255,0.2))",
      duration: 0.6,
    });

    tl.to(".scroll", {
      opacity: 1,
      duration: 1.0,
    });
  }, []);

  return (
    <>
     <section className="intro-wrap">
      <div className="intro-section">
         <div className="logo-wrapper">
          <div className="glow-bg"></div>

          <svg
            className="toyota-logo"
            viewBox="0 0 24 24"
            stroke="#9e9e9e"
            fill="none"
            style={{ width: "600px" }}
          >
            <path
              ref={(el) => (pathsRef.current[0] = el)}
              d="M2 12a10 7 0 1 0 20 0 10 7 0 1 0 -20 0"
              strokeWidth=".5"
            />
            <path
              ref={(el) => (pathsRef.current[1] = el)}
              d="M9 12c0 3.866 1.343 7 3 7s3 -3.134 3 -7 -1.343 -7 -3 -7 -3 3.134 -3 7z"
              strokeWidth=".5"
            />
            <path
              ref={(el) => (pathsRef.current[2] = el)}
              d="M6.415 6.191C5.527 6.694 5 7.321 5 8c0 1.657 3.134 3 7 3s7 -1.343 7 -3c0 -0.678 -0.525 -1.304 -1.41 -1.806"
              strokeWidth=".5"
            />
          </svg>

       
        </div>
      </div>
     </section>
      
       
    </>
  );
}