let burgerBtn = document.getElementById('burgerBtn')
let topMenu = document.getElementById('topMenu')
// let active = document.getElementsByClassName('.active')
let activeNav = document.getElementById('nav')


burgerBtn.addEventListener('click', function () {
	topMenu.classList.toggle('active')
	activeNav.classList.toggle('activeBg')
		
});