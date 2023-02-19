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

window.onload = () => {
	dateTime.updateTime()
	dateTime.updateTimeElement()
	dateTime.updateTimeMomentElement()
	dateTime.updateDate()
	dateTime.updateDateElement()
}
 
setInterval(() => {
	dateTime.updateTime()
	dateTime.updateTimeElement()
	dateTime.updateTimeMomentElement()
	dateTime.updateDate()
	dateTime.updateDateElement()
}, 750)

function Log(content) {
	console.log(content)
}