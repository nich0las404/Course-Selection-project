import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function HeroPage(){
    const navigate = useNavigate();
    const [heroTitle, setHeroTitle] = useState('');

    useEffect(() => {
        function textTypingEffect(text,i = 0){
            if(i === 0){
                setHeroTitle('')
            }

            setHeroTitle(text.substring(0, i + 1));
      
            if(i === text.length - 1){
              return;
            }
            // Final execution animation
            setTimeout(
              () => textTypingEffect(text, i + 1)
              , 80
            );
        };
            textTypingEffect('Your journey starts');
    }, []);
    return (
        <div id="hero-section" className="hero-page">
            <div className="gif-background hero-background-animation"></div>
            <div className="title-container">
                <h1 className="title">{heroTitle}<span className="title-span"> here</span></h1>
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