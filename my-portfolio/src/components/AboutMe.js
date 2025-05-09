import Header from './Header.js'
import './component_css/aboutme.css'

export default function AboutMe() {

    return (
        <div>
            <Header />
            <div className='about-me-page'>
                <div className='about-me-info'>
                    <div className='intro-photo'>
                        <div>
                            <p>Hi, I'm Ben</p>
                            <p>Software Engineer in the Making</p>
                            <p>Driven by Creativity & Curiosity</p>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/pictures/professional.jpeg`} alt="me with glasses" height={'450px'}/>
                    </div>
                    <p>
                        I'm a recent graduate from the University of Minnesota, graduating with a BS in Computer Science.
                        I enjoy making projects to learn and sharpen my skills in software. Check out my projects in the Projects tab!
                    </p>
                </div>
            </div>
        </div>
    )
}