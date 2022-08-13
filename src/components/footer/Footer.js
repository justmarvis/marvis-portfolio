import './Footer.css'

function Footer() {

    let  country = ["Nigeria", "United States", "Canada", "United Kingdom", "Traveling Around Right Now"];
    let  modified = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (

        <div className="footer-container">
            <div className="left">
                <p className="copy_left">Copy right &copy; 2020 Marvis Igbineweka Portfolio Website. <span className="link">Portfolio site plan</span></p>
            </div>
            <div className="middle">
                <span>Recently Updated: {modified[1]}</span>
            </div>
            <div className="right">
                <span>Location: {country[0]}</span>
            </div>
        </div>
    );
}

export default Footer;