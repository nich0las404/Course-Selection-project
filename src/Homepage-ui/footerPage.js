import ContactFooter from "./contact";
function FooterPage(){
    return(
        <>
            <div className="footer-container">
                <div className="gif-background gif-background2"></div>
                <h1 className="footer-title">
                "Success starts the moment you stop making excuses"
                </h1>
                <button class="chronicle-button">
                    <span className="chronicle-span">
                        <em>
                            Start Now
                        </em>
                    </span>
                    <span className="chronicle-span">
                        <em className="chronicles-em">
                            Click here
                        </em>
                    </span>
                </button>
            </div>
            <ContactFooter/>
        </>
    )
}

export default FooterPage;