
document.addEventListener("DOMContentLoaded", function () {
    
    const imageH1 = document.querySelector(".imageh1");
    const imageH2 = document.querySelector(".imageh2");
    const imageSub = document.querySelector(".imageSub");
    const learnMore = document.querySelector(".learnmore");
    const logo = document.querySelector(".logo");
    const repeat = document.querySelector(".repeat");

    
    function startAnimations() {
        
        imageH1.style.animation = "slideInLeft .5s ease-in forwards";

        
        setTimeout(() => {
            imageH1.style.animation = "zoomOutRight .5s ease-in forwards";
        }, 2000); 

        
        setTimeout(startImageSubFadeIn, 2500); 
    }

    
    function startImageSubFadeIn() {
        imageSub.style.animation = "fadeInImageSub .5s ease-in forwards";

        
        setTimeout(startLearnMoreAndLogoAnimations, 500); 
    }

    
    function startLearnMoreAndLogoAnimations() {
        learnMore.style.animation = "fadeInLearnMore .5s ease-in forwards";
        logo.style.animation = "slideInLeftLogo .5s ease-in forwards";

        
        setTimeout(startRepeatAnimation, 500); 
    }

    
    function startRepeatAnimation() {
        
        repeat.style.display = "block";

        
        repeat.style.animation = "fadeInRepeat .5s ease-in forwards";
    }

    
    imageH1.style.opacity = "0";
    imageH1.style.left = "-150px"; 
    imageH2.style.opacity = "0";
    imageSub.style.opacity = "0";
    learnMore.style.opacity = "0";
    logo.style.opacity = "0";
    repeat.style.display = "none"; 

    
    setTimeout(startAnimations, 2000);
});
