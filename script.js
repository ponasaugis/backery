let burgerBtn = document.getElementById('burgerBtn')
let topMenu = document.getElementById('topMenu')
let active = document.getElementsByClassName('.active')
let activeNav = document.getElementById('nav')
// let test = document.getElementsByClassName('nav')

console.log(activeNav)

burgerBtn.addEventListener('click', function () {
	topMenu.classList.toggle('active')
	activeNav.classList.toggle('activeBg')

	// activeNav.classList.toggle('navBackground')
	// activeNav.style.backgroundColor = 'rgba(86,83,76, 0.95)'
	console.log('paspaudziau')
	
});