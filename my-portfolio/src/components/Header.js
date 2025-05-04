import "./component_css/header.css"
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    function handleLinkedInClick() {
        window.open('https://www.linkedin.com/in/ben-st-clair-58923a2b9', '_blank')
    }
    function handleGitHubClick() {
        window.open('https://github.com/benstc', '_blank')
    }

    return (
        <div className="header">
            <p>Ben St. Clair</p>
            <div className="header-right">
                <p onClick={() => navigate('/')}>About Me</p>
                <p onClick={() => navigate('/projects')}>Projects</p>
                <p onClick={() => navigate('/contact')}>Contact</p>
                <img onClick={handleLinkedInClick} src={`${process.env.PUBLIC_URL}/icons/linkedin.png`} alt="LinkedIn logo" height={'30px'} width={"30px"}/>
                <img onClick={handleGitHubClick} src={`${process.env.PUBLIC_URL}/icons/github.png`} alt="GitHub logo" height={'40px'} width={"40px"}/>
            </div>
        </div>
    )
} 