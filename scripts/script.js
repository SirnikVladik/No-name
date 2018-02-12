var callToAction = document.querySelector(".callToAction");
var stayWithUs = document.querySelector(".stayWithUs");

callToAction.addEventListener('click', function scrolling() {
    var index = stayWithUs.getBoundingClientRect().top/10;
    if (index > 0) {
        var timerId = setTimeout(function name() {
            window.scrollBy(0, index);
            scrolling(stayWithUs);
        }, 10);
    }
});




function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
    }
}

