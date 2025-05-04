import Header from './Header.js'

export default function AboutMe() {

    return (
        <div>
            <Header />
            <div className='about-me-page'>
                <div className='about-me-info'>
                    <div className='intro-photo'>
                        <div>
                            <p>I'm Ben</p>
                            <p>Aspiring Software Engineer</p>
                            <p>Creative Problem Solver</p>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/pictures/nerdy.jpeg`} alt="photo of me"/>
                    </div>
                    <p>About Me</p>
                </div>
            </div>
        </div>
    )
}