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
