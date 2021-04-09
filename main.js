const myImage = document.querySelector('.my_image')
const myInfo = document.querySelector('.my_info')
const clickMent = document.querySelector('.click_ment')
infoHide = true

myImage.addEventListener('click', () => {
    infoHideOrShow()
})

// navbar 메뉴 클릭 시 이동
const navbarMenu = document.querySelector('.navbar_menu')
navbarMenu.addEventListener('click', (event) => {
    const link = event.target.dataset.link
    const scrollTo = document.querySelector(`.${link}`)

    scrollTo.scrollIntoView({behavior: 'smooth'})
})

function infoHideOrShow() {
    if(infoHide == true) {
        myInfo.classList.remove('hide')
        infoHide = false
        clickMent.classList.add('hide')
    } 
    else {
        myInfo.classList.add('hide')
        infoHide = true
        clickMent.classList.remove('hide')
    }
}