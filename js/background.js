const key = "YOUR_KEY!";
const apiURL = `https://api.unsplash.com/photos/random?query=nature&orientation=landscape&collections=317099&per_page=1`

fetch (apiURL, {
	headers: {
		Authorization: `Client-ID ${key}`
	}
}).then(response => response.json())
  .then(data => {
  	const { urls: { regular }, user: { name }, links: { html } } = data
  	console.log(regular, name, html)

  	updatePhoto(regular, html, name)
  })
  .catch(error => console.error(error))

function updatePhoto(imageURL, imageSource, name) {
	const pictureLink = document.querySelector("#pictureLink")
	const linkToUnsplash = document.querySelector("#linkToUnsplash")
	const imageOwner = document.querySelector("#user")

	document.body.style.background = `url(${imageURL}) no-repeat center/cover`
	pictureLink.href = imageSource
	linkToUnsplash.href = imageSource
	imageOwner.innerHTML = name
}