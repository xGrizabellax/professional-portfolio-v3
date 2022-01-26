





const header = document.querySelector('header')

const headerScroll = () => {
    if ("scrolling") {
    header.setAttribute('style', 'display: none;')
    }
}


window.addEventListener('scroll', headerScroll)