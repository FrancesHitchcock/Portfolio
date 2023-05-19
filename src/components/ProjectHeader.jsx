import { Link } from "react-router-dom"

export default function ProjectHeader(){
    return(
        <header>
            <div className="logo">
                 <span className="logo-span">@frances</span> 
            </div>
                <Link to="/" className="btn"><span><i className="fa-sharp fa-solid fa-left-long"></i> Projects</span></Link>
        </header>
    )
}