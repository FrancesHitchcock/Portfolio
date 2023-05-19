
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ProjectHeader from "../components/ProjectHeader"
import Footer from "../components/Footer"
import ProjectIntroduction from "../components/ProjectIntroduction"
import ProjectDetail from "../components/ProjectDetail"

import portfolioData from "../data/portfolioData"

export default function Project(){
    const paramsTitle = useParams().title

    const paramsTitleIndex = portfolioData.findIndex(item => item.title === paramsTitle)

    const previousTitleIndex = paramsTitleIndex === 0 ? 0 : paramsTitleIndex - 1
    const nextTitleIndex = paramsTitleIndex === portfolioData.length -1 ? portfolioData.length -1 : paramsTitleIndex + 1

    const previousTitle = portfolioData[previousTitleIndex].title
    const nextTitle = portfolioData[nextTitleIndex].title

    const firstProject = paramsTitleIndex === 0
    const lastProject = paramsTitleIndex === (portfolioData.length - 1)

    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })

    const targetProject = portfolioData.find(project => project.title === paramsTitle)
    
    return(
        <div className="wrapper">
            <ProjectHeader />
            <main>
                <ProjectIntroduction 
                    targetProject={targetProject}
                />
                <ProjectDetail 
                    targetProject={targetProject}
                />

                <div className="project-navigation-container">
                    {!firstProject && <span className="project-navigation-span link-to-previous"><Link to={`/${previousTitle}`} className="project-navigation-link">&lt; </Link></span>}
                    {!lastProject && <span className="project-navigation-span link-to-next"><Link to={`/${nextTitle}`} className="project-navigation-link">&gt;</Link></span>}
                </div>

            </main>
            <Footer />
        </div>
    )
}