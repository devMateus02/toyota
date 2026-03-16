import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import Load from "./components/Loader";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Performance from "./components/performance";
import Detalhe from "./components/detalhe"
import "./App.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
function App() {
useEffect(() => {
  const overlay = document.querySelector(".intro-overlay");
  const bg = document.querySelector(".intro-bg");
  const logo = document.querySelector(".logo-wrapper");
  const paths = document.querySelectorAll(".logo-wrapper path");
  const main = document.querySelector(".main-wrapper");
  

  if (!overlay || !bg || !logo || !main) return;

  function animateHeroText() {
    const title = document.querySelector(".split-title");
    const description = document.querySelector(".split-description");

    if (!title || !description) return;

    gsap.set([title, description], { opacity: 1 });

    const splitTitle = new SplitText(title, { type: "chars" });
    const splitDesc = new SplitText(description, { type: "words" });

    gsap.from(splitTitle.chars, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.04,
      duration: 1.5,
      delay:.5,
      ease: "power3.out"
    });

    gsap.from(splitDesc.words, {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 2,
      delay:.7,
      ease: "power3.out",
    
    });
  }

  const tl = gsap.timeline({
    onComplete: animateHeroText
  });

  // estado inicial
  gsap.set(overlay, { display: "flex", opacity: 1 });
  gsap.set(bg, { opacity: 1 });

  // prepara o SVG para desenhar
  paths.forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });
  });

  tl

  // ✏️ desenhar SVG

  .to(paths, {
     strokeDashoffset: 0,
      delay: 2,
      duration: 2.5,
      stagger: 0.9,
      ease: "power2.out",
  })

  // aparecer preenchimento da logo
  .to(logo, {
    opacity: 1,
    duration: 0.2
  })

  // zoom da logo
  .to(logo, {
    scale:0.7,
    duration: .5,
    ease: "power1.out"
  })
  .to(logo, {
    scale: 6,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })



  // fundo preto desaparece
  .to(bg, {
    opacity: 0,
    duration: 1
  }, "-=0.4")

  // overlay desaparece
  .to(overlay, {
    opacity: 0,
    duration: 0.4,
    onComplete: () => {
      gsap.set(overlay, { display: "none" });
    }
  })

  // blur sai da página
  .to(main, {
    "--blur": "0px",
    duration: 2,
    ease: "power3.out"
  });

}, []);
  return (


<>
  <div className="intro-overlay">
    <div className="intro-bg" />
    <Load />
  </div>

  <div className="main-wrapper">
    <Navbar />
    <Hero />
    <Performance />
    <Detalhe/>
   <section class="next-section">
   
   </section>
  </div>
</>

);
}

export default App;