
export default function ProjectItem({ title, imgName, description }) {
    return (
        <div className="project-item">
            <div>
                <p className="title">{title}</p>
                <p>{description}</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/pictures/${imgName}`} alt="Project screenshot" width="200px" />
        </div>
    )
}