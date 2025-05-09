import Header from './Header.js'
import "./component_css/contact.css"

export default function ContactPage() {
    return (
        <div>
            <Header />
            <div>
                <div className="contact-info-container">
                    <div className="contact-info">
                        <p>Contact Me</p>
                        <p>Email: stcla076@umn.edu</p>
                        <p>Phone number: 651-802-4664</p>
                    </div>
                </div>
            </div>
        </div>
    )
}