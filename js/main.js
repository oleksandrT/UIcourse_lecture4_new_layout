window.onload = function () {

    // Get elements
    var bannerSection = document.querySelector(".banner"),
        bannerSlider = bannerSection.querySelector(".slider"),
        bannerSliderContainer = bannerSlider.querySelector(".slider-container"),
        bannerSliderControls = bannerSection.querySelector(".slider-controls"),
        productsSection = document.querySelector(".products"),
        productsSlider = productsSection.querySelector(".slider"),
        productsSliderContainer = productsSlider.querySelector(".slider-container"),
        productsSliderControls = productsSection.querySelectorAll(".arrow");

    var bannerSlides = bannerSliderContainer.children,
        controlsParent = bannerSliderControls.children[0],
        bannerSlidesNum = bannerSlides.length,
        productsSlides = productsSliderContainer.children,
        productsSlidesNum = productsSlides.length;

    var slideWidth, productsSlideWidth;

    // Initialize slider
    initBannerSlider();
    initBannerSliderControls();
    initProductsSlider();
    initProductsSliderControls();

    // Reset slider when resize window
    window.onresize = function () {
        initBannerSlider();
        initProductsSlider();
    };



    function initBannerSlider() {
        slideWidth = bannerSlider.clientWidth;
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

    function initProductsSlider() {
        productsSliderWidth = bannerSlider.clientWidth;
        var containerWIdth = productsSlidesNum * productsSliderWidth / 3;
        for (var i = 0; i < productsSlidesNum; i++) {
            productsSliderContainer.children[i].style.width = productsSliderWidth/3 + 'px';
        }
        productsSliderContainer.style.width = containerWIdth + 'px';
        productsSliderContainer.style.marginLeft = '0px';
    }

    function initProductsSliderControls() {
        var n = productsSliderControls.length;
        for (var i = 0; i < n; i++) {
            var cls = productsSliderControls[i].className;
            if( cls.indexOf("left") > 0 ) {
                productsSliderControls[i].addEventListener("click", function () { moveProductsSlides("left") });
            } else if ( cls.indexOf("right") > 0 ) {
                productsSliderControls[i].addEventListener("click", function () { moveProductsSlides("right") });
            }
        }
    }

    function moveProductsSlides(direction) {
        var maxShift = -1 * productsSliderWidth * (productsSlidesNum / 3 - 1),
            currentMarginLeft = productsSliderContainer.style.marginLeft,
            currentMarginLeftVal = parseInt(currentMarginLeft.substr(0, currentMarginLeft.length - 2));
        console.log("productsSlidesNum: ", productsSlidesNum / 3 - 1);
        if ( direction == "left" )
        {
            if (currentMarginLeftVal <= maxShift)
            {
                productsSliderContainer.style.marginLeft = '0px';
            } else {
                productsSliderContainer.style.marginLeft = -1 * productsSliderWidth + 'px';
            }
        } else {
            if (currentMarginLeftVal >= 0)
            {
                productsSliderContainer.style.marginLeft = maxShift + 'px';
            } else {
                productsSliderContainer.style.marginLeft = (currentMarginLeftVal + productsSliderWidth) + 'px';
            }
        }
    }
};