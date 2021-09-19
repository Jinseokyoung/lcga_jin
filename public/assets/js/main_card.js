// Movement Animation to happen
const card = document.querySelector('.card1')
const container = document.querySelector('.container1')
// Items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30
  let yAxis = (window.innerHeight / 2 - e.pageY) / 70
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
// Animate In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none'
  // Popout
  title.style.transform = 'translateZ(150px)'
  sneaker.style.transform = 'translateZ(200px) rotateZ(0deg)'
  description.style.transform = 'translateZ(125px)'
//   sizes.style.transform = 'translateZ(100px)'
//   purchase.style.transform = 'translateZ(75px)'
})
// Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(10deg) rotateX(10deg)`
  // Popback
  title.style.transform = 'translateZ(20px)'
  sneaker.style.transform = 'translateZ(20px) rotateZ(0deg)'
  description.style.transform = 'translateZ(20px)'
//   sizes.style.transform = 'translateZ(0px)'
//   purchase.style.transform = 'translateZ(0px)'
})
