
const dateTime = {
	hourElement: document.querySelector("#hour"),
	momentElement: document.querySelector("#momentText"),

	updateTime: function() {
		const hours = new Date().getHours()
		const minutes = new Date().getMinutes()
		const minutesString = minutes < 10 ? "0" + minutes : minutes
		const hoursInTwelveFormat = hours > 12 ? hours - 12 : hours
		return [hoursInTwelveFormat, minutesString]
	},
	updateTimeElement: function() {
		this.hourElement.innerHTML = `${this.updateTime()[0]}:${this.updateTime()[1]}`
	},
	updateTimeMomentElement: function() {
		this.momentElement.innerHTML = new Date().getHours() > 12 ? "PM" : "AM"
	},
	updateDate: function() {
		const day = new Date().getDate()
		const month = new Date().getMonth()
		const year = new Date().getFullYear()
		const monthsName = [
			"January", "February", "March", "April", 
			"May", "Juny", "July", "August", "September",
			"October", "November", "December"
		]
		return { month: monthsName[month], day: day, year: year }
	},
	updateDateElement: function() {
		const monthElement = document.querySelector("#month")
		const dayElement = document.querySelector("#day")
		const yearElement = document.querySelector("#year")
		monthElement.innerHTML = this.updateDate().month
		dayElement.innerHTML = this.updateDate().day
		yearElement.innerHTML = this.updateDate().year
	}
}

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


// Initialize
window.onload = () => {
	dateTime.updateTime()
	dateTime.updateTimeElement()
	dateTime.updateTimeMomentElement()
	dateTime.updateDate()
	dateTime.updateDateElement()

	imageInformations.handle()
}

// date and time update
setInterval(() => {
	dateTime.updateTime()
	dateTime.updateTimeElement()
	dateTime.updateTimeMomentElement()
	dateTime.updateDate()
	dateTime.updateDateElement()
}, 750)
