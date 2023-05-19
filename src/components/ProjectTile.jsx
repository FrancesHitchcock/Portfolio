
import {Link} from "react-router-dom"

export default function ProjectTile({saveScroll, item}){

    // function saveScroll(){
    //     sessionStorage.setItem("scrollHeight", window.pageYOffset)
    //     console.log(window.pageYOffset)
    // }

    return(
        <Link className="project-tile-link" to={`/${item.title}`} onClick={saveScroll}>
            <div className="project-tile">
                <h4 className="project-tile-title">{item.title}</h4>
                <span className="project-tile-subtitle">{item.subtitle}</span>
                <div className="project-image-container">
                    <img className="project-image" src={`/images/${item.img}`} />
                </div>
                <span className="project-tile-skillset">Skillset: {item.skills.join(", ")}</span>
            </div>
        </Link>
    )
}