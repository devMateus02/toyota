function navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
    <svg
       className=""
        viewBox="0 0 24 24"
        stroke="#e9e9e9"
        fill="none"
        style={{ width: "60px" }}
      >
        <path
         
          d="M2 12a10 7 0 1 0 20 0 10 7 0 1 0 -20 0"
          strokeWidth="1"
        />
        <path
          
          d="M9 12c0 3.866 1.343 7 3 7s3 -3.134 3 -7 -1.343 -7 -3 -7 -3 3.134 -3 7z"
          strokeWidth="1"
        />
        <path
         
          d="M6.415 6.191C5.527 6.694 5 7.321 5 8c0 1.657 3.134 3 7 3s7 -1.343 7 -3c0 -0.678 -0.525 -1.304 -1.41 -1.806"
          strokeWidth="1"
        />
      </svg>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div>
              
<button className="Btn-nav">
Saiba mais

</button>

            </div>
        </nav>
    )
}
export default navbar;