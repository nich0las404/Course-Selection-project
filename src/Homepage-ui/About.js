import CodingFacts from "./coding-facts";
import Testimonials from "./testimonials";

function aboutPage(){
    return(
        <div className="about-page">
            <CodingFacts/>
            <Testimonials/>
        </div>
    )
}
export default aboutPage;