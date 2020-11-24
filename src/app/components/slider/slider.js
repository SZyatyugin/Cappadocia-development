function slider() {
    let counter = 0;
    const getAll = (id) => {
        return document.querySelectorAll(id);
    };
    function sliderAutoRotate() {
        counter += 1;
        if (counter > 2) {
            counter = 0;
        }
        const arrayOfImages = Object.values(getAll(".fairy-tail__item"));
        arrayOfImages.map((element) => {
            const el = element;
            el.style.transform = `translateX(-${counter * 100}%)`;
        });
    }
    const timer = setTimeout(sliderAutoRotate, 4000);
    function sliderRotate(e) {
        clearTimeout(timer);
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
    Object.values(getAll(".fairy-tail__slider-arrow")).forEach((elem) => {
        elem.addEventListener("click", sliderRotate);
    });
}

export default slider;
