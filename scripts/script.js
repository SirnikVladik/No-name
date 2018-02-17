var callToAction = document.querySelector(".callToAction");
var stayWithUs = document.querySelector(".stayWithUs");
var down = document.querySelector(".down");
var textBlock = document.querySelector(".text-block");


down.addEventListener('click', (event) => {
    let index = textBlock.getBoundingClientRect().top;
    window.scrollBy(0, index);
})

callToAction.addEventListener('click', function scrolling() {
    let index = stayWithUs.getBoundingClientRect().top/10;
    let x = 1;
        var timerId = setInterval(function name() {
            if(x > 0) {
                window.scrollBy(0, index);
                x = stayWithUs.getBoundingClientRect().top - index/10;
            } else {
                clearInterval(timerId);
            }
        }, 35);
});



function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
    }
}

