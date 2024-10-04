import HeroContent from "./Content-ui/hero-content-page";
import ContentNavbar from "./Content-ui/content-navbar";
import ContactFooter from "./Homepage-ui/contact";
function MainContent(){
    return (
        <>
        <ContentNavbar/>
        <HeroContent/>
        <ContactFooter/>
        </>
    )
}
export default MainContent;