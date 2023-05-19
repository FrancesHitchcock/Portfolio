import {useEffect} from "react"

export default function Header(){

    useEffect(() => {
        const navToggle = document.querySelector(".nav-toggle")
        function toggleNavOpen(){
            document.body.classList.toggle("nav-open")
        }
        navToggle.addEventListener("click", toggleNavOpen)

        return function(){
            navToggle.removeEventListener("click", toggleNavOpen)
        }
    }, [])

    useEffect(() => {
        const navLinks = document.querySelectorAll(".nav-link")
        function closeNav(){
            document.body.classList.remove("nav-open")
        }
        navLinks.forEach(link => {
            link.addEventListener("click", closeNav)
        })
        return function(){
            navLinks.forEach(link => {
                link.removeEventListener("click", closeNav)
            })
        }

    }, [])

    return(
        <header id="home">
            <div className="logo">
                 <span className="logo-span">@frances</span> 
            </div>
            <button className="nav-toggle">
                <span className="hamburger" aria-label="toggle navigation"></span>
            </button>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#what-i-do">What I do</a></li>
                    <li className="nav-item"><a className="nav-link" href="#who-i-am">Who I am</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">My Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </header>
    )
}