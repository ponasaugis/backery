let burgerBtn = document.getElementById('burgerBtn')
let topMenu = document.getElementById('topMenu')
let activeNav = document.getElementById('nav')
let burgerBtninn = document.querySelector(".burgerBtnInner")

let ghostLetter = document.querySelector(".ghostLetter")
let readBtn = document.getElementById('readBtn')
let closeBtn = document.getElementById('closeBtn')


let ghostRecipe = document.querySelector(".ghostRecipe")
let recipeBtn = document.getElementById('recipeBtn')
let closeRecipeBtn = document.getElementById('closeRecipeBtn')

burgerBtn.addEventListener('click', function () {
	topMenu.classList.toggle('active')
	activeNav.classList.toggle('activeBg')
	// activeNav.style.backgroundColor = 'blue';
	burgerBtninn.classList.toggle('active')
	console.log(activeNav.classList)
		
});

readBtn.addEventListener('click', function () {
	ghostLetter.classList.toggle('ghostLetterActive')
	
})

closeBtn.addEventListener('click', function () {
	ghostLetter.classList.toggle('ghostLetterActive')
	
})

recipeBtn.addEventListener('click', function () {
	ghostRecipe.classList.toggle('ghostRecipeActive')
	
})

closeRecipeBtn.addEventListener('click', function () {
	ghostRecipe.classList.toggle('ghostRecipeActive')
	
})