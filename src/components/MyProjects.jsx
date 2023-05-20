

import ProjectTile from "./ProjectTile"
import portfolioData from "../data/portfolioData"

export default function MyProjects(props){
    const portfolioItems = portfolioData.map(item => {
        return (
            <ProjectTile 
                key={item.id}
                item={item}
                saveScroll={props.saveScroll}
            />
        )
    })
    
    return(
        <section className="projects-section" id="projects">
            <h2 className="section-title section-title-projects">My Projects</h2>
            <p className="section-subtitle projects-subtitle">Click on a project for more detail.</p>
            <div className="portfolio">
                {portfolioItems}
            </div>
        </section>
    )
}