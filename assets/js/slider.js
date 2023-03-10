// Variables
const leftButton = document.querySelector('#leftButton')
const rightButton = document.querySelector('#rightButton')
const indexHeader = document.querySelector('.slider')
const imagesTable = [
  { image: '../../assets/images/restaurant/1.jpg' },
  { image: '../../assets/images/slider/3.jpg' },
  { image: '../../assets/images/rooms/7.jpg' }
]
let slides = 0

// Fonctions
function nextSlide() {
  indexHeader.style.backgroundImage = 'url(' + imagesTable[slides].image + ')'
  if (slides == imagesTable.length - 1) {
    slides = 0
  } else {
    slides++
  }
}

function previousSlide() {
  indexHeader.style.backgroundImage = 'url(' + imagesTable[slides].image + ')'
  if (slides == 0) {
    slides = imagesTable.length - 1
  } else {
    slides--
  }
}

function autoPlay() {
  myInterval = setInterval(nextSlide, 4000)
}

// Evenements
window.onload = autoPlay()

rightButton.addEventListener('click', () => {
  nextSlide()
  clearInterval(myInterval)
  autoPlay()
})

leftButton.addEventListener('click', () => {
  previousSlide()
  clearInterval(myInterval)
  autoPlay()
})
