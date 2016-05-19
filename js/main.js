window.onload = function () {

    // Get elements
    var bannerSection = document.querySelector(".banner"),
        bannerSlider = bannerSection.querySelector(".slider"),
        bannerSliderContainer = bannerSlider.querySelector(".slider-container"),
        bannerSliderControls = bannerSection.querySelector(".slider-controls"),
        productsSection = document.querySelector(".products"),
        productsSlider = productsSection.querySelector(".slider"),
        productsSliderContainer = productsSlider.querySelector(".slider-container"),
        productsSliderControls = bannerSection.querySelectorAll(".arrow");

    var bannerSlides = bannerSliderContainer.children,
        controlsParent = bannerSliderControls.children[0],
        bannerSlidesNum = bannerSlides.length,
        slideWidth = bannerSlider.clientWidth;

    initBannerSlider();
    initBannerSliderControls();

    window.onresize = function () {
        initBannerSlider();
    };

    function initBannerSlider() {
        var containerWIdth = bannerSlidesNum * slideWidth;
        for (var i = 0; i < bannerSlidesNum; i++) {
            bannerSliderContainer.children[i].style.width = slideWidth + 'px';
        }
        bannerSliderContainer.style.width = containerWIdth + 'px';
    }

    function initBannerSliderControls() {
        for (var i = 0; i < bannerSlidesNum; i++) {
            var spanEl = document.createElement("span"),
                liEl = document.createElement("li");
            liEl.appendChild(spanEl);
            liEl.setAttribute("data-num", i);
            controlsParent.appendChild(liEl);
        }

        controlsParent.children[0].className = "active";

        for (var i = 0; i < bannerSlidesNum; i++) {
            controlsParent.children[i].addEventListener("click", function () { moveSlides(this) });
        }
    }

    function moveSlides(self) {
        if (self.className == "active") return;

        bannerSliderContainer.style.marginLeft = -1 * (self.getAttribute("data-num") * slideWidth) + 'px';

        for (var i = 0; i < bannerSlidesNum; i++) {
            controlsParent.children[i].className = "";
        }

        self.className = "active";

    }

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