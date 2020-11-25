function slider() {
    let counter = 0;
    let counterOurTrip = 0;
    const getAll = (id) => {
        return document.querySelectorAll(id);
    };
    //* auto rotate image in Fairy tail section every 4s //
    function sliderAutoRotateFairyTail() {
        counter += 1;
        if (counter > 2) {
            counter = 0;
        }
        const arrayOfImagesFairyTail = Object.values(
            getAll(".fairy-tail__item")
        );
        arrayOfImagesFairyTail.map((element) => {
            const el = element;
            el.style.transform = `translateX(-${counter * 100}%)`;
        });
        //* auto rotate image in Our Trip section every 4s //

        setTimeout(sliderAutoRotateFairyTail, 4000);
    }
    function sliderAutoRotateOurTrip() {
        counterOurTrip += 1;
        if (counterOurTrip > 2) {
            counterOurTrip = 0;
        }
        const arrayOfImagesOurTrip = Object.values(
            getAll(".our-trip__slider-item")
        );
        arrayOfImagesOurTrip.map((elem) => {
            const el = elem;
            el.style.transform = `translateX(-${counterOurTrip * 100}%)`;
        });
        setTimeout(sliderAutoRotateOurTrip, 4000);
    }
    //* clear timeout and change img on arrow click //
    function sliderRotateFairyTail(e) {
        if (e.target.classList.contains("arrow-forward")) {
            counter++;
            if (counter > 2) {
                counter = 0;
            }
            const arrayOfImages = Object.values(getAll(".fairy-tail__item"));
            arrayOfImages.map((element) => {
                const el = element;
                el.style.transform = `translateX(-${counter * 100}%)`;
            });
        } else {
            counter--;
            if (counter < 0) {
                counter = 2;
            }
            const arrayOfImages = Object.values(getAll(".fairy-tail__item"));
            arrayOfImages.map((element) => {
                const el = element;
                el.style.transform = `translateX(-${counter * 100}%)`;
            });
        }
    }
    function sliderRotateOurTrip(e) {
        if (e.target.classList.contains("arrow-forward")) {
            counterOurTrip++;
            if (counterOurTrip > 2) {
                counterOurTrip = 0;
            }
            const arrayOfImagesOurTrip = Object.values(
                getAll(".our-trip__slider-item")
            );
            arrayOfImagesOurTrip.map((elem) => {
                const el = elem;
                el.style.transform = `translateX(-${counterOurTrip * 100}%)`;
            });
        } else {
            counterOurTrip--;
            if (counterOurTrip < 0) {
                counterOurTrip = 2;
            }
            const arrayOfImagesOurTrip = Object.values(
                getAll(".our-trip__slider-item")
            );
            arrayOfImagesOurTrip.map((elem) => {
                const el = elem;
                el.style.transform = `translateX(-${counterOurTrip * 100}%)`;
            });
        }
    }
    Object.values(getAll(".fairy-tail__slider-arrow")).forEach((elem) => {
        elem.addEventListener("click", sliderRotateFairyTail);
    });
    Object.values(getAll(".our-trip__slider-arrow")).forEach((elem) => {
        elem.addEventListener("click", sliderRotateOurTrip);
    });
    sliderAutoRotateFairyTail();
    sliderAutoRotateOurTrip();
}

export default slider;
