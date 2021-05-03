// this three lines to get the value of element  get by id
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// on click the sign in button it removes the right-panel-active class

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// on click the sign Up button it add the right-panel-active class

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});