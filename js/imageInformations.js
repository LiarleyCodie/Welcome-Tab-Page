const imageInformations = {
	containerElement: document.querySelector("#informations"),
	iconElement: document.querySelector("#pictureLink"),
	popupElement: document.querySelector("#informationsBody"),
	popupButtonElement: document.querySelector("#linkToUnsplash"),
	state: "hidden",
	timeout: null,
	updateElement: function(state) {
		if (state === "visible" || state === "hover") {
			this.containerElement.classList.add("active")
		} else if (state === "hidden") {
			this.containerElement.classList.remove("active")
		}
	},
	handle: function() {
		addEventListener("mousemove", ({ target }) => {
		if (target === this.containerElement ||
			target === this.iconElement ||
			target === this.popupElement ||
			target === this.popupButtonElement) {
			this.state = "hover"
			clearTimeout(this.timeout)
			this.timeout = null

		}

		if (this.state === "hover") {
			if (target != this.containerElement &&
				target != this.iconElement &&
				target != this.popupElement &&
				target != this.popupButtonElement) {
				this.state = "visible"
			}
		}

		this.updateElement(this.state)

		if (this.state === "visible" && this.state != "hidden")
			this.timeout = setTimeout(() => {
				this.state = "hidden"
				this.updateElement(this.state)
				this.timeout = null
			}, 2000)
		})
	}
}