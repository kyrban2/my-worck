// находим кнопку
const button = document.querySelector('#btn-mobile-nav')
const mobileBtnImg = document.querySelector('#mobile-nav-img')
const mobileNav = document.querySelector('#mobile-nav')
const header = document.querySelector('#header')

button.addEventListener('click', function () {
	button.classList.toggle('nav-open')
	mobileNav.classList.toggle('mobile-nav-open')
	header.classList.toggle('header-white-bg')
	document.body.classList.toggle('no-scroll')
	if (button.classList.contains('nav-open')) {
		mobileBtnImg.src = './img/icons/close-mobile.svg'
	} else {
		mobileBtnImg.src = './img/icons/open-mobile.svg'
	}
})
