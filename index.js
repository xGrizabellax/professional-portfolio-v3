document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", rollup)
});

function rollup(ev) {
    console.log(window.scrollY);
    if (window.scrollY > 300) {
        document.body.classList.remove("med");
        document.body.classList.add("up");
    } else if (window.scrollY > 60) {
        document.body.classList.add("med");
    } else {
        document.body.classList.remove("med");
        document.body.classList.remove("up")
    }
}

// const debounce = func => {
//  let timer;
//  return event => {
//      if (timer) {
//          clearTimeout(timer);
//      }
//      timer = setTimeout(func, 10, event)
//  }
// }




// const header = document.querySelector('header')

// const headerScroll = () => {
//     if ("scrolling") {
//     header.setAttribute('style', 'display: none;')
//     }
// }


// window.addEventListener('scroll', headerScroll)