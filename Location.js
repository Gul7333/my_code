console.log(navigator.geolocation)
console.log(navigator.geolocation.getCurrentPosition(done, notdone))
function done(position) {
  console.log(position)
}
function notdone(error) {
  console.log(error)
}
// basically navigator. geolocation has method getCurrentPosition
// which need two callback function ie success and Error