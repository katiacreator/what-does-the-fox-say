const foxImg = document.querySelector('#fox')
const foxSays = new Audio("../audio/fox.mp3")
foxImg.addEventListener("click", function(e){
    foxSays.volume = .01
    foxSays.play()
})

const notFoxImg = document.querySelector("#notFox")

notFoxImg.addEventListener("click", evt => {
  if (evt.target.id !== "notFox"){
    const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
    audioElement.volume = .01
    audioElement.play()
  }
})