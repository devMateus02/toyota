import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"
import Cardperf from "../reusable/cardperf"

gsap.registerPlugin(ScrollTrigger, SplitText)

function Performance(){

const textRef = useRef(null)

useEffect(()=>{

const cards = gsap.utils.toArray(".performance-card")

// estado inicial dos cards
cards.forEach((card,i)=>{
gsap.set(card,{
zIndex: cards.length - i,
opacity: i === 0 ? 1 : 0,
y: i === 0 ? 0 : 120
})
})

// timeline dos cards
const tl = gsap.timeline({
scrollTrigger:{
trigger:".sec-performance",
start:"top top",
end:"bottom bottom",
scrub:1.2
}
})

cards.forEach((card,i)=>{

if(i === 0) return

tl.to(card,{
y:0,
opacity:1,
duration:1
})

tl.to(cards[i-1],{
opacity:0,
duration:1
},"<")

})

// animação do texto (uma vez)
ScrollTrigger.create({
trigger:".sec-performance",
start:"top 70%",
once:true,

onEnter:()=>{

const split = new SplitText(textRef.current,{type:"words"})

gsap.from(split.words,{
y:60,
opacity:0,
stagger:0.05,
duration:0.8,

ease:"power3.out"
})

gsap.from(".car-feature",{
x:40,
opacity:0,
stagger:0.15,
duration:0.6
})

}

})

},[])

return(

<section className="sec-performance">

<div className="performance-wrapper">

<div className="car-container">

<img src="corolla-cinza.png" className="corollacar"/>

<div className="car-text" ref={textRef}>

<p className="car-category">
Corolla Hybrid 2026
</p>



<div className="car-side-features">

<p className="car-feature">
<span className="bullet"></span>
Potência instantânea
</p>

<p className="car-feature">
<span className="bullet"></span>
Em harmonia com o fluxo de energia
</p>

</div>

</div>

</div>

<div className="cards-container">

<div className="performance-card">
<Cardperf
number="01"
title="PERFORMANCE"
subtitle="Potência híbrida inteligente"
description="Resposta imediata, eficiência energética e equilíbrio em cada trajeto"
/>
</div>

<div className="performance-card">
<Cardperf
number="02"
title="DESIGN"
subtitle="Linhas esportivas"
description="Design moderno e agressivo"
/>
</div>

<div className="performance-card">
<Cardperf
number="03"
title="TECNOLOGIA"
subtitle="Conectividade total"
description="Experiência digital avançada"
/>
</div>

</div>

</div>

</section>

)

}

export default Performance