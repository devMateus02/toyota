function cardperf(props) {
    return (
          <div className="cardperf"> 
             <div className="perf_content">
                <p className="perf_number">{props.number}</p>
                <h2 className="perf_title">{props.title}</h2>
                <h3 className="perf_subtitle">{props.subtitle}</h3>
                <p className="perf_description">{props.description}</p>
                <a className="perf-btn" href="#">Saiba mais <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 6L19 12L13 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
             </div>
          </div>
    )

}

export default cardperf;