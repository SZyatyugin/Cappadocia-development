function slider() {
    let counter = 0;
    let timer;
    const getAll = (id) => {
        return document.querySelectorAll(id);
    };
    //* auto rotate image every 4s //
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
        timer = setTimeout(sliderAutoRotate, 4000);
    }
    //* clear timeout and change img on arrow click //
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
    sliderAutoRotate();
}

export default slider;
