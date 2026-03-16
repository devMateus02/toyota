import herovideo from '../assets/hero_video.mp4'



function Hero() {
    return (
        <section className="hero-section">
            <div className='linear_gradiente'></div>
            <div className="video-hero">
                <video src={herovideo} autoPlay loop muted></video>
            </div>
           <div className='hero_text'>
             <h1 className="intro-title split-title">Elegância em movimento</h1>
            <p className="intro-description split-description">A nova experiência hibrida</p>
           </div>
        </section>
    );
}
export default Hero;