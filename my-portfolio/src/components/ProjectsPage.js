import Header from './Header.js'
import ProjectItem from "./ProjectItem.js"
import projectData from '../data/projects.json'
import "./component_css/projects.css"


export default function ProjectsPage() {
    const projects = projectData.projects
    
    return (
        <div>
            <Header />
            <h1 className="page-title">Projects</h1>
            <div className="projects-page">
                <div className="project-items-container">
                    {projects.map((project, index) => (
                        <ProjectItem title={project.title} imgName={project.imgName} description={project.description}/>
                    ))}
                </div>
            </div>
        </div>
    )
}