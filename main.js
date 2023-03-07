
const bodyElement = document.body;
const anchorElement = document.getElementById("aTagElement")

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	bodyElement.classList.toggle("dark-mode");
	// anchorElement.classList.add("make-text-white")

}

function randomBG(){
	bodyElement.classList.toggle("dark-mode");
}

['irvine.jpg', 'pirate.jpg' , 'nicole.jpg', 'david.jpg'].forEach(function(img){
	const newImage = document.createElement('img');
	newImage.src = "images/" + img; // Just concatenate the path to the file name
	document.querySelector('.gallery-section').appendChild(newImage)
	newImage.setAttribute("alt", "A Gallery Image"); // images require an ALT attribute to be valid
});