window.onload = function () {

    // Get elements
    var bannerSection = document.querySelector(".banner"),
        productsSection = document.querySelector(".products"),
        bannerSlider = bannerSection.querySelector(".slider"),
        productsSlider = productsSection.querySelector(".banner"),
        bannerSliderControls = bannerSection.querySelector(".slider-controls"),
        productsSliderControls = bannerSection.querySelectorAll(".arrow");

    

    /*var slider = document.querySelector(".slider-wrapper"),
        btnLeft = document.querySelector(".arrow-left"),
        btnRight = document.querySelector(".arrow-right"),
        slideW = slider.children[0].clientWidth,
        slidesN = slider.children.length,
        maxShift = - (slideW * (slidesN - 1));

    slider.style.marginLeft = "0px";

    btnLeft.addEventListener("click", function() {moveSlides('left')});
    btnRight.addEventListener("click", function() {moveSlides('right')});
    window.addEventListener("resize", updateVariables);

    function moveSlides(direction) {
        var currentMarginLeft = slider.style.marginLeft;
        var currentMarginLeftVal = parseInt(currentMarginLeft.substr(0, currentMarginLeft.length - 2));
        if ( direction == "left" )
        {
            if (currentMarginLeftVal <= maxShift)
            {
                slider.style.marginLeft = "0px";
            } else {
                slider.style.marginLeft = currentMarginLeftVal - slideW + "px";
            }
        } else {
            if (currentMarginLeftVal >= 0)
            {
                slider.style.marginLeft = maxShift + "px";
            } else {
                slider.style.marginLeft = currentMarginLeftVal + slideW + "px";
            }
        }
    }

    function updateVariables() {
        slideW = slider.children[0].clientWidth;
        currentMarginLeft = "0px";
        slider.style.marginLeft = "0px";
        maxShift = - (slideW * (slidesN - 1));
    }*/

};