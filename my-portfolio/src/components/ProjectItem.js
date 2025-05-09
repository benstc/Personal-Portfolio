
export default function ProjectItem({ title, imgName, description, link }) {
    function handleClick() {
        window.open(link, '_blank')
    }
    return (
        <div onClick={handleClick} className="project-item">
            <div>
                <p className="title">{title}</p>
                <p>{description}</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/pictures/${imgName}`} alt="Project screenshot" width="200px" />
        </div>
    )
}