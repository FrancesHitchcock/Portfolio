import { Link } from "react-router-dom"


export default function ProjectDetail({targetProject}){
    return(
        <section className="project-page-section">
            <h2 className="project-page-title">{targetProject.title}</h2>
            <p className="section-subtitle project-page-subtitle">{targetProject.subtitle}</p>
            <h3 className="project-page-skills">{targetProject.skills.join(", ")}</h3>
            <div className="project-page-body">{targetProject.description}</div>
            <span className="link-span">{targetProject.linkText}: <a href={targetProject.siteUrl} target="_blank">{targetProject.siteUrl}</a></span>
            <span className="link-span">See my code at GitHub: <a href={targetProject.gitHubRepoUrl} target="_blank">{targetProject.gitHubRepoUrl}</a></span>
        </section>
    )
}