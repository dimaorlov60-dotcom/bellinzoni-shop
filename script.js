
/* =========================
   PRODUCT CAROUSEL
========================= */

let currentProduct = 0;


const products =
    document.querySelectorAll(".product");


const dots =
    document.querySelectorAll(".dot");


function showProduct(index) {

    if (index < 0) {

        index =
            products.length - 1;

    }


    if (index >= products.length) {

        index = 0;

    }


    currentProduct = index;


    products.forEach(
        (product, i) => {

            product.classList.toggle(
                "active",
                i === currentProduct
            );

        }
    );


    dots.forEach(
        (dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentProduct
            );

        }
    );

}


function nextProduct() {

    showProduct(
        currentProduct + 1
    );

}


function previousProduct() {

    showProduct(
        currentProduct - 1
    );

}



/* =========================
   LANGUAGE
========================= */

let currentLanguage = "it";


function setLanguage(language) {

    currentLanguage = language;


    const elements =
        document.querySelectorAll(
            "[data-it]"
        );


    elements.forEach(
        element => {

            const text =
                element.getAttribute(
                    `data-${language}`
                );


            if (text) {

                element.textContent = text;

            }

        }
    );


    const itButton =
        document.getElementById(
            "itButton"
        );


    const enButton =
        document.getElementById(
            "enButton"
        );


    itButton.classList.toggle(
        "active",
        language === "it"
    );


    enButton.classList.toggle(
        "active",
        language === "en"
    );


    document.documentElement.lang =
        language;

}



/* =========================
   MOBILE SWIPE
========================= */

let touchStartX = 0;

let touchEndX = 0;


const carousel =
    document.querySelector(
        ".product-container"
    );


carousel.addEventListener(
    "touchstart",
    function(event) {

        touchStartX =
            event.changedTouches[0]
                .screenX;

    }
);


carousel.addEventListener(
    "touchend",
    function(event) {

        touchEndX =
            event.changedTouches[0]
                .screenX;

        handleSwipe();

    }
);


function handleSwipe() {

    const difference =
        touchStartX - touchEndX;


    if (difference > 50) {

        nextProduct();

    }


    if (difference < -50) {

        previousProduct();

    }

}



/* =========================
   AUTO CAROUSEL
========================= */

setInterval(
    function() {

        nextProduct();

    },
    7000
);
