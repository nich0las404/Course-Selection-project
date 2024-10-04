import { useNavigate } from "react-router-dom";

function HeroPage(){
    const navigate = useNavigate()

    return (
        <div id="hero-section" className="hero-page">
            <div className="inner-hero-page">
            <div className="gif-background"></div>
            <div className="title-container">
                <h1 className="title">your journey starts <span className="title-span">here</span></h1>
            </div>
            </div>
            <div className="btn-container">
                <button class="btn" onClick={() => navigate('/main')}>
                <div class="btn__bg">
                    <span class="btn__bg__layer btn__bg__layer-first"></span>
                    <span class="btn__bg__layer btn__bg__layer-second"></span>
                    <span class="btn__bg__layer btn__bg__layer-third"></span>
                </div>

                <span class="btn__text-out">Join Now</span>
                <span class="btn__text-in">Join Now</span>
                </button>
            </div>
        </div>
      );
}

export default HeroPage;