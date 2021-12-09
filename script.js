let burgerBtn = document.getElementById('burgerBtn')
let topMenu = document.getElementById('topMenu')
let activeNav = document.getElementById('nav')
let burgerBtninn = document.querySelector(".burgerBtnInner")

let ghostLetter = document.querySelector(".ghostLetter")
let readBtn = document.getElementById('readBtn')
let closeBtn = document.getElementById('closeBtn')
console.log(readBtn)

burgerBtn.addEventListener('click', function () {
	topMenu.classList.toggle('active')
	activeNav.classList.toggle('activeBg')
	// activeNav.style.backgroundColor = 'blue';
	burgerBtninn.classList.toggle('active')
	console.log(activeNav.classList)
		
});

readBtn.addEventListener('click', function () {
	ghostLetter.classList.toggle('ghostLetterActive')
	console.log('paspaudziau')
})

closeBtn.addEventListener('click', function () {
	ghostLetter.classList.toggle('ghostLetterActive')
	console.log('paspaudziau')
})