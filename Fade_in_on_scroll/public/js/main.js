const div_fadein = document.querySelectorAll(".fade-in");

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args);
    };
}

function checkSlide(e) {
    div_fadein.forEach(div => {
        const fadein_at = (window.scrollY + window.innerHeight) - (div.scrollHeight / 3);
        const div_bottom = div.offsetTop + div.scrollHeight;
        const is_halfshown = fadein_at > div.offsetTop;
        const isNotScrolledPast = window.scrollY < div_bottom;
        if (is_halfshown && isNotScrolledPast) {
            div.classList.add("active");
            div.classList.add("visible");
        } else {
            div.classList.remove("active");
        }
    })
}
window.addEventListener("scroll", debounce(checkSlide));